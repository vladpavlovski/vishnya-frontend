'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import { CgWebsite } from 'react-icons/cg';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { ContactProps } from '@/app/utils/model';

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className='flex'>
      <Link
        href={url}
        className={`hover:dark:text-primary ${
          path === url && 'dark:border-primary dark:text-primary'
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function RenderSocialIcon({
  social,
  size,
}: {
  social: string | undefined;
  size?: number;
}) {
  switch (social) {
    case 'WEBSITE':
      return <CgWebsite size={size} />;
    case 'TWITTER':
      return <AiFillTwitterCircle size={size} />;
    case 'YOUTUBE':
      return <AiFillYoutube size={size} />;
    case 'DISCORD':
      return <FaDiscord size={size} />;
    case 'INSTAGRAM':
      return <FaInstagram size={size} />;
    case 'FACEBOOK':
      return <FaFacebook size={size} />;
    case 'LINKEDIN':
      return <FaLinkedin size={size} />;
    case 'TIKTOK':
      return <FaTiktok size={size} />;
    case 'TELEGRAM':
      return <FaTelegram size={size} />;
    case 'WHATSAPP':
      return <FaWhatsapp size={size} />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  menuLinks,
  menuLinks2,
  socialLinks,
  contacts,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  menuLinks2: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  contacts: ContactProps;
}) {
  return (
    <footer className='bg-secondary py-10 text-white'>
      <div className='container mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-0 md:space-y-12'>
        <div className='grid grid-cols-12'>
          {/*{First Column}*/}
          <div className='col-span-6 pr-6 text-center md:col-span-3 md:text-left'>
            <ul>
              <li className='flex'>
                <Link
                  href={`tel:${contacts.officePhoneNumber1}`}
                  className='hover:text-primary'
                >
                  {contacts.officePhoneNumber1}
                </Link>
              </li>
              <li className='flex'>
                <Link
                  href={`tel:${contacts.officePhoneNumber2}`}
                  className='hover:text-primary'
                >
                  {contacts.officePhoneNumber2}
                </Link>
              </li>
              <li className='flex'>
                <Link
                  href={`mailto:${contacts.officeEmail}`}
                  className='hover:text-primary'
                >
                  {contacts.officeEmail}
                </Link>
              </li>
              <li className='flex'>
                <div className='hover:text-primary'>
                  {contacts.officeAddress}
                </div>
              </li>
            </ul>
          </div>

          {/*{Second Column}*/}
          <div className='col-span-6 pr-6 text-center md:col-span-3 md:text-left'>
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          {/*{Third Column}*/}
          <div className='col-span-6 pr-6 text-center md:col-span-3 md:text-left'>
            <ul>
              {menuLinks2.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          {/*{Fourth Column}*/}
          <div className='col-span-6 pr-6 text-center md:col-span-3 md:text-center'>
            <div className='flext text-3xl'>{contacts.officePhoneNumber3}</div>
            <div className='flex flex-wrap justify-center space-x-0 pt-0'>
              {socialLinks.map((link: FooterLink) => {
                return (
                  <a
                    key={link.id}
                    rel='noopener noreferrer'
                    href={link.url}
                    title={link.text}
                    target={link.newTab ? '_blank' : '_self'}
                    className='flex h-20 w-20 items-center justify-center rounded-full'
                  >
                    <RenderSocialIcon social={link.social} size={40} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-6 lg:justify-center'>
          <div className='flex flex-col justify-center'>
            <Logo width={80} height={80} src={logoUrl} />
            <div>©{new Date().getFullYear()} All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
