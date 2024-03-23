import Email from '@/app/web-components/Email';
import MainSlide from '@/app/web-components/MainSlide';
import CatalogWidget from '@/app/web-components/CatalogWidget';

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.lead-form':
      return <Email key={index} data={section} />;
    case 'sections.main-slide':
      return <MainSlide key={index} data={section} />;
    case 'sections.catalog-widget':
      return <CatalogWidget key={index} data={section} />;
    default:
      return null;
  }
}
