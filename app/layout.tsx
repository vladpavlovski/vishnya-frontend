import type { Metadata } from 'next';
import './globals.css';
import { getStrapiMedia, getStrapiURL } from './utils/api-helpers';
import { fetchAPI } from './utils/fetch-api';
import { FALLBACK_SEO } from '@/app/utils/constants';
import Navbar from '@/app/web-components/Navbar';
import Banner from '@/app/web-components/Banner';
import Footer from '@/app/web-components/Footer';
import { BrowserLogger } from '@/app/web-components/BrowserLogger';

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error('The Strapi API Token environment variable is not set.');

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      'metadata.shareImage',
      'favicon',
      'navbar.links',
      'navbar.navbarLogo.logoImg',
      'contacts',
      'footer.footerLogo.logoImg',
      'footer.menuLinks',
      'footer.menuLinks2',
      'footer.socialLinks',
    ],
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  const { notificationBanner, navbar, footer, contacts } =
    global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data?.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data?.attributes.url
  );

  return (
    <html lang='ru'>
      <body>
        <Navbar
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          contacts={contacts}
        />

        <main className='min-h-screen'>{children}</main>

        <Banner data={notificationBanner} />

        <Footer
          logoUrl={footerLogoUrl}
          logoText={footer.footerLogo.logoText}
          menuLinks={footer.menuLinks}
          menuLinks2={footer.menuLinks2}
          socialLinks={footer.socialLinks}
          contacts={contacts}
        />
      </body>
    </html>
  );
}
