import { getStrapiMedia } from '@/app/utils/api-helpers';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export const SimilarProjects = () => {
  return (
    <div className='my-16 flex'>
      <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>
        Другие Проекты
      </h3>
      <CarouselContent>
        {/* {data.map(({ id, attributes }: any) => {
          const imageUrl = getStrapiMedia(attributes.url);
          return imageUrl ? (
            <CarouselItem
              key={id}
              className='sm:basis-full md:basis-1/2 lg:basis-1/4'
            >
              <Card>
                <CardContent className='flex max-h-32 items-center justify-center p-0 hover:cursor-pointer'>
                  <Image
                    width={400}
                    height={200}
                    src={imageUrl}
                    alt={attributes.alternativeText}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ) : null;
        })} */}
      </CarouselContent>
    </div>
  );
};
