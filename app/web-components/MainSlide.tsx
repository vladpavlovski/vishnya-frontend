import HighlightedText from './HighlightedText';
import { getStrapiMedia } from '../utils/api-helpers';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface MainSlideProps {
  data: {
    id: string;
    title: string;
    description: string;
    backgroundImage: Picture;
    bullet1Title: string;
    bullet1Description: string;
    bullet1Value: string;
    bullet2Title: string;
    bullet2Description: string;
    bullet2Value: string;
  };
}

export const SlideActions = () => {
  return (
    <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
      <Button asChild className='bg-secondary px-20 hover:bg-primary'>
        <Link href='#'>Скачать каталог проектов</Link>
      </Button>
      <Button asChild className='bg-primary px-20 hover:bg-secondary'>
        <Link href='#'>Бесплатная консультация</Link>
      </Button>
    </div>
  );
};

export default function MainSlide({ data }: MainSlideProps) {
  const imgUrl = getStrapiMedia(data.backgroundImage.data.attributes.url);

  const backgroundStyling = {
    backgroundImage: `url('${imgUrl || ''}')`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  };

  return (
    <section className='text-black-100 bg-background'>
      <div
        style={backgroundStyling}
        className={`flex justify-center px-6 py-8 md:px-24 md:py-32 `}
      >
        <div className='container mx-auto block'>
          <div className='flex max-w-4xl flex-col justify-center rounded-sm bg-gradient-to-r from-white/[.85] via-white/[.8] to-white/[.4] px-4 py-10 text-center md:rounded-md lg:p-10  lg:text-left'>
            <HighlightedText
              text={data.title}
              tag='h1'
              className='mb-4 text-2xl uppercase leading-none text-secondary md:text-3xl lg:mb-8 lg:text-5xl'
              color='dark:text-violet-400'
            />

            <HighlightedText
              text={data.description}
              tag='p'
              className='tmt-6 mb-2 max-w-3xl text-sm md:mb-4 md:text-base lg:text-lg'
              color='dark:text-violet-400'
            />

            <div className='mb-6 flex flex-col md:flex-row'>
              {/*{ Bullet 1}*/}
              <div className='flex flex-col items-center  md:mr-2 md:flex-row md:border-r-2 md:border-gray-400'>
                <div className='jus flex'>
                  <p className='font mr-2 text-4xl text-primary md:text-6xl'>
                    {data.bullet1Value}
                  </p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-secondary md:text-lg'>
                    {data.bullet1Title}
                  </p>
                  <p className='text-xs'>{data.bullet1Description}</p>
                </div>
              </div>

              {/*{ Bullet 2}*/}
              <div className='flex flex-col items-center md:mr-2 md:flex-row md:border-r-2 md:border-gray-400'>
                <div className='flex '>
                  <p className='font mr-2 text-4xl text-primary md:text-6xl'>
                    {data.bullet2Value}
                  </p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-secondary md:text-lg'>
                    {data.bullet2Title}
                  </p>
                  <p className='text-xs'>{data.bullet2Description}</p>
                </div>
              </div>
            </div>

            <SlideActions />
          </div>
        </div>
      </div>
    </section>
  );
}
