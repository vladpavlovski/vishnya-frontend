import { sectionRenderer } from '@/app/utils/section-renderer';
import { Metadata } from 'next';
import { FALLBACK_SEO } from '@/app/utils/constants';
import { getProjectBySlug } from '@/app/utils/get-project-by-slug';
import { Content } from '@/app/catalog/[slug]/components/Content';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getProjectBySlug(params.slug);

  if (!page.data[0].attributes?.seo) return FALLBACK_SEO;
  const metadata = page.data[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}

export default async function ProjectRoute({ params }: Props) {
  const page = await getProjectBySlug(params.slug);
  if (page.data.length === 0) return null;
  // TODO: CREATE A CUSTOM ERROR PAGE
  return <Content data={page.data[0]} />;
}
