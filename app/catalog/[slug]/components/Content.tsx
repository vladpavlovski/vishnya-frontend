'use client';
import { ProjectBreadcrumbs } from '@/app/catalog/[slug]/components/Breadcrumbs';
// TODO: remove use client
import { ContentProps, Project } from '@/app/utils/model';
import React from 'react';
import { Header } from '@/app/catalog/[slug]/components/Header';
import { Gallery } from '@/app/catalog/[slug]/components/Gallery';

export const Content = ({ data }: ContentProps) => {
  const {
    id,
    attributes: {
      title,
      description,
      square,
      roomAmount,
      bedroomAmount,
      bathroomAmount,
      location,
      propertyType,
      developer,
      disposition,
      exteriorGallery,
      interiorGallery,
      address,
      price,
      currency,
      cardHeaderTitle,
      area,
      handoverDate,
      slug,
    },
  } = data;

  return (
    <section className='text-black-100 bg-background py-8 md:pb-8 md:pt-4'>
      <div className='mx-auto sm:container'>
        <ProjectBreadcrumbs title={title} />
        <Header data={data} />
        {/* {ExteriorGallery} */}
        <Gallery data={exteriorGallery?.data || []} title={'Экстерьер'} />
        {/* {ProjectDescription} */}

        {/* {InteriorGallery} */}
        <Gallery data={interiorGallery?.data || []} title={'Интерьер'} />
        {/* {Disposition and payment plan} */}

        {/* {Location Map} */}

        {/* {Contact Form} */}

        {/* {Similar projects} */}
      </div>
    </section>
  );
};
