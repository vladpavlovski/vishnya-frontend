import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Picture } from '@/app/utils/model';
import Image from 'next/image';
import { getStrapiURL } from '@/app/utils/api-helpers';
interface MissionProps {
  data: {
    title: string;
    sectionName: string;
    description: [];
    missionTitle1: string;
    missionDescription1: string;
    missionImage1: Picture;
    missionTitle2: string;
    missionDescription2: string;
    missionImage2: Picture;
    missionTitle3: string;
    missionDescription3: string;
    missionImage3: Picture;
  };
}

export const Mission = ({ data }: MissionProps) => {
  const {
    title,
    sectionName,
    description,
    missionTitle1,
    missionDescription1,
    missionImage1,
    missionTitle2,
    missionDescription2,
    missionImage2,
    missionTitle3,
    missionDescription3,
    missionImage3,
  } = data;

  return (
    <section className='mx-auto max-w-7xl bg-background px-4 sm:px-6 md:py-32 lg:px-8'>
      <div className='py-16 text-center'>
        {/*<span className='text-xs uppercase text-primary'>{sectionName}</span>*/}
        <h2 className='mb-5 text-4xl uppercase text-gray-800 text-secondary'>
          {title}
        </h2>
        <div className='mt-4 max-w-2xl text-justify text-base text-gray-500 lg:mx-auto'>
          <BlocksRenderer content={description} />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='space-y-4'>
          <Image
            className='h-auto w-full'
            height='300'
            src={getStrapiURL(missionImage1.data.attributes.url)}
            alt={missionImage1.data.attributes.alternativeText || missionTitle1}
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
          <h3 className='text-2xl font-semibold text-gray-900'>
            {missionTitle1}
          </h3>
          <p className='text-justify text-gray-500'>{missionDescription1}</p>
        </div>
        <div className='space-y-4'>
          <Image
            className='h-auto w-full'
            height='300'
            src={getStrapiURL(missionImage2.data.attributes.url)}
            alt={missionImage2.data.attributes.alternativeText || missionTitle2}
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />

          <h3 className='text-2xl font-semibold text-gray-900'>
            {missionTitle2}
          </h3>
          <p className='text-justify text-gray-500'>{missionDescription2}</p>
        </div>
        <div className='space-y-4'>
          <Image
            className='h-auto w-full'
            height='300'
            src={getStrapiURL(missionImage3.data.attributes.url)}
            alt={missionImage3.data.attributes.alternativeText || missionTitle3}
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width='400'
          />
          <h3 className='text-2xl font-semibold text-gray-900'>
            {missionTitle3}
          </h3>
          <p className='text-justify text-gray-500'>{missionDescription3} </p>
        </div>
      </div>
    </section>
  );
};
