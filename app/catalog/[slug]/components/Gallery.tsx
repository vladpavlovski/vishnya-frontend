'use client';
import { Data } from '@/app/utils/model';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { getStrapiMedia } from '@/app/utils/api-helpers';
import ImgsViewer from 'react-images-viewer';
import { useState } from 'react';

export const Gallery = ({ data, title }: { data: Data[]; title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const imagesViewerLinks = data.map(({ id, attributes }: any) => ({
    src: getStrapiMedia(attributes.url),
  }));

  return (
    <div className='my-20'>
      <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>{title}</h3>
      <Carousel className='mx-0'>
        <CarouselContent>
          {data.map(({ id, attributes }: any, index) => {
            const imageUrl = getStrapiMedia(attributes.url);
            return imageUrl ? (
              <CarouselItem
                key={id}
                className='sm:basis-full md:basis-1/2 lg:basis-1/4'
              >
                <Card>
                  <CardContent className='flex max-h-32 items-center justify-center p-0 hover:cursor-pointer'>
                    <Image
                      onClick={() => {
                        setIsOpen(true);
                        setImgIndex(index);
                      }}
                      width={400}
                      height={200}
                      src={imageUrl}
                      alt={attributes.alternativeText}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ) : null;
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ImgsViewer
        imgs={imagesViewerLinks}
        isOpen={isOpen}
        currImg={imgIndex}
        onClickPrev={() => setImgIndex((index) => index - 1)}
        onClickNext={() => setImgIndex((index) => index + 1)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
