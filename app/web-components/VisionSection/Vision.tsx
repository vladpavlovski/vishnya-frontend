import { getStrapiMedia } from '@/app/utils/api-helpers';
import { Picture } from '@/app/utils/model';
import Image from 'next/image';

interface Props {
  data: {
    title: string;
    subtitle: string;
    description: string;
    concepts: {
      id: number;
      title: string;
      description: string;
      backgroundImage: Picture;
    }[];
  };
}

export const Vision = ({ data }: Props) => {
  const { title, subtitle, description, concepts } = data;

  return (
    <section className='bg-background py-32'>
      <div className='mx-auto px-3 sm:container'>
        <p className='text-sm uppercase text-primary'>{subtitle}</p>
        <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>{title}</h3>

        <p className='text-md text-fontBase'>{description}</p>
        <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {concepts.map((concept) => {
            const {
              data: {
                attributes: { url },
              },
            } = concept.backgroundImage;
            const imageUrl = getStrapiMedia(url);
            return (
              <div key={concept.id} className='relative gap-2'>
                {imageUrl && (
                  <Image
                    alt={concept.title}
                    className='h-full w-full object-cover'
                    height='700'
                    src={imageUrl}
                    style={{
                      aspectRatio: '466/700',
                      objectFit: 'cover',
                    }}
                    width='466'
                  />
                )}
                <div className='justify-top absolute inset-0 flex flex-col bg-[#00000050] p-8 md:pt-16 lg:pt-24'>
                  <h2 className='px-2 text-center text-3xl uppercase text-white drop-shadow-md'>
                    {concept.title}
                  </h2>
                  <p className='mt-4 text-justify text-sm leading-loose text-white drop-shadow-md'>
                    {concept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
