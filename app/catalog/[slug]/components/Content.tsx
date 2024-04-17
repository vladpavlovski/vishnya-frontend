import { ProjectBreadcrumbs } from '@/app/catalog/[slug]/components/Breadcrumbs';
import { ContentProps } from '@/app/utils/model';
import React from 'react';
import { Header } from '@/app/catalog/[slug]/components/Header';
import { Gallery } from '@/app/catalog/[slug]/components/Gallery';
import { ProjectDescription } from '@/app/catalog/[slug]/components/ProjectDescription';
import { Disposition } from '@/app/catalog/[slug]/components/Disposition';
import { ContactFormSection } from '@/app/web-components/ContactFormSection/ContactFormSection';

export const Content = ({ data }: ContentProps) => {
  const {
    id,
    attributes: { title, exteriorGallery, interiorGallery },
  } = data;

  return (
    <section className='text-black-100 bg-background py-8 md:pb-8 md:pt-4'>
      <div className='mx-auto sm:container'>
        <ProjectBreadcrumbs title={title} />
        <Header data={data} />
        {/* {ExteriorGallery} */}
        <Gallery data={exteriorGallery?.data || []} title={'Экстерьер'} />
        {/* {ProjectDescription} */}
        <ProjectDescription data={data} />
        {/* {InteriorGallery} */}
        <Gallery data={interiorGallery?.data || []} title={'Интерьер'} />
        {/* {Disposition and payment plan} */}
        <Disposition data={data} />
        {/* {Location Map} */}

        {/* {Contact Form} */}
      </div>
      <ContactFormSection
        data={{
          subtitle: 'Остались вопросы?',
          title: 'Заполните форму и мы с вами свяжемся',
        }}
      />
      <div className='mx-auto sm:container'>{/* {Similar projects} */}</div>
    </section>
  );
};
