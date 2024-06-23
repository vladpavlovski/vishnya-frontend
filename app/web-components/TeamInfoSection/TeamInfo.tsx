import { getStrapiMedia } from '@/app/utils/api-helpers';
import { Picture } from '@/app/utils/model';
import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface Props {
  data: {
    title: string;
    description: [];
    backgroundImage: Picture;
  };
}

export const TeamInfo = ({ data }: Props) => {
  const { title, description, backgroundImage } = data;

  const {
    data: {
      attributes: { url },
    },
  } = backgroundImage;
  const imageUrl = getStrapiMedia(url);

  return (
    <section className='bg-background pb-32'>
      <div className='mx-auto px-3 sm:container'>
        <p
          className='hidden text-center font-NewAthena uppercase sm:block sm:text-8xl lg:text-9xl'
          style={{
            color: '#DFC6C6BF',
            letterSpacing: '0.55em',
            // fontSize: '9em',
          }}
        >
          Вишня
        </p>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div>
            {imageUrl && (
              <Image
                alt={title}
                className='h-full w-full object-cover'
                height='400'
                src={imageUrl}
                style={{
                  objectFit: 'cover',
                }}
                width='400'
              />
            )}
          </div>
          <div className='p-8'>
            <h3 className='mb-8 text-4xl uppercase leading-tight text-secondary'>
              {title}
            </h3>

            <div className='text-md text-justify text-fontBase'>
              <BlocksRenderer content={description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
