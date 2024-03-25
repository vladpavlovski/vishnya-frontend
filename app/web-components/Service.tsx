import { Picture } from '@/app/utils/model';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiURL } from '@/app/utils/api-helpers';
import Image from 'next/image';

interface ServiceProps {
  data: {
    title: string;
    description: [];
    backgroundImage: Picture;
    backgroundPhrase: string;
  };
}
export const Service = ({ data }: ServiceProps) => {
  const { title, description, backgroundImage, backgroundPhrase } = data;

  return (
    <section className='mx-auto max-w-7xl bg-background md:py-16 lg:px-8'>
      <div className='relative z-0'>
        <div
          style={{ letterSpacing: '0.55em' }}
          className='absolute left-1/2 top-1/4 hidden -translate-x-1/2 -translate-y-28 transform text-9xl font-thin text-gray-200 text-secondary opacity-40 md:block'
        >
          {backgroundPhrase}
        </div>
      </div>
      <div className='md:flex'>
        <Image
          className='z-10 hidden h-[500px] bg-cover bg-center md:flex md:h-auto md:w-1/2'
          height='400'
          src={getStrapiURL(backgroundImage.data.attributes.url)}
          alt={backgroundImage.data.attributes.alternativeText || title}
          style={{
            aspectRatio: '400/400',
            objectFit: 'cover',
          }}
          width='400'
        />

        <div className='flex flex-col justify-center p-8 md:w-1/2'>
          <h3 className='mb-6 text-center text-4xl uppercase text-secondary md:text-left'>
            {title}
          </h3>
          <div className='mb-4 text-justify'>
            <BlocksRenderer content={description} />
          </div>
        </div>
      </div>
    </section>
  );
};
