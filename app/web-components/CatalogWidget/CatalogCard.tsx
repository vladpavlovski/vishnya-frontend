'use client';
import { ShortProject } from '@/app/utils/model';
import Image from 'next/image';
import squareCardIcon from '@/public/icons/squareCardIcon.svg';
import dispositionIcon from '@/public/icons/dispositionIcon.svg';
import bathroomIcon from '@/public/icons/bathroomIcon.svg';
import bedroomIcon from '@/public/icons/bedroomIcon.svg';
import { limitString } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getStrapiMedia } from '@/app/utils/api-helpers';

export const CatalogCard = ({ data }: { data: ShortProject }) => {
  const {
    id,
    attributes: {
      title,
      price,
      square,
      bathroomAmount,
      bedroomAmount,
      roomAmount,
      tags,
      shortDescription,
      cardHeaderTitle,
      exteriorGallery,
      slug,
    },
  } = data;

  const cardImageUrl = exteriorGallery
    ? getStrapiMedia(exteriorGallery?.data?.[0]?.attributes?.url)
    : null;
  return (
    <div className='w-full rounded'>
      <div className='font-NewAthena rounded-t bg-secondary px-3 py-2 text-sm font-bold uppercase text-white'>
        {cardHeaderTitle}
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='relative hidden w-full md:block'>
          {cardImageUrl && (
            <Image
              className='relative w-full md:absolute md:h-full md:rounded-bl-md'
              alt={title}
              src={cardImageUrl}
              fill
              sizes='(min-width: 808px) 100vw, 100vw'
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div className='relative block w-full md:hidden'>
          {cardImageUrl && (
            <Image
              className='relative max-h-48 w-full'
              alt={title}
              src={cardImageUrl}
              height={200}
              width={300}
              style={{ objectFit: 'cover', width: '100%' }}
            />
          )}
        </div>
        <div className='rounded-md-br bg-projectCard p-4 md:w-7/12 xl:p-6'>
          {/*{Price}*/}
          <p className='font-NewAthena text-xl xl:text-3xl'>
            <span className='font-NewAthena mr-1 font-bold text-primary'>
              $
            </span>
            {price}
          </p>
          {/*{Title}*/}
          <h3 className='font-NewAthena text-md font-bold text-secondary xl:text-xl'>
            {title}
          </h3>
          {/*{Icons}*/}
          <div className='my-2 flex flex-row justify-between'>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={squareCardIcon}
                alt={'Площадь'}
              />
              <span>{square || 0}</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={dispositionIcon}
                alt={'Комнат'}
              />
              <span>{roomAmount || 0}</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={bathroomIcon}
                alt={'Ванных комнат'}
                style={{ height: 'auto' }}
              />
              <span>{bathroomAmount || 0}</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={bedroomIcon}
                alt={'Спальных комнат'}
                style={{ height: 'auto' }}
              />
              <span>{bedroomAmount || 0}</span>
            </span>
          </div>
          {/*{Tags}*/}
          <div className='mt-2 flex flex-row gap-1 xl:mt-4'>
            {tags?.map((tag) => (
              <div
                key={tag.id}
                className='rounded bg-tagBackground px-2 py-1 text-xs xl:px-4 xl:py-2'
              >
                {tag.name}
              </div>
            ))}
          </div>

          <p className='mt-2 text-sm md:leading-tight'>
            {limitString(shortDescription, 200)}
          </p>
          <Button
            asChild
            className='font-NewAthena mt-4 w-full bg-secondary px-20 hover:bg-primary'
          >
            <Link href={`/catalog/${slug}`}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
