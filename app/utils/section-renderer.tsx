import Email from '@/app/web-components/Email';
import MainSlide from '@/app/web-components/MainSlide';
import CatalogWidget from '@/app/web-components/CatalogWidget';
import { Mission } from '@/app/web-components/Mission';
import { Service } from '@/app/web-components/Service';
import { AboutUs } from '@/app/web-components/AboutUs';

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.lead-form':
      return <Email key={index} data={section} />;
    case 'sections.main-slide':
      return <MainSlide key={index} data={section} />;
    case 'sections.catalog-widget':
      return <CatalogWidget key={index} data={section} />;
    case 'sections.mission':
      return <Mission key={index} data={section} />;
    case 'sections.service':
      return <Service key={index} data={section} />;
    case 'sections.about-us':
      return <AboutUs key={index} data={section} />;
    default:
      return null;
  }
}
