import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import priceIcon from '@/public/icons/priceIcon.svg';
import squareIcon from '@/public/icons/squareIcon.svg';
import roomIcon from '@/public/icons/roomIcon.svg';
import handoverIcon from '@/public/icons/handoverIcon.svg';
import pinIcon from '@/public/icons/pinIcon.svg';
import buildingIcon from '@/public/icons/buildingIcon.svg';
import developerIcon from '@/public/icons/developerIcon.svg';
import React from 'react';
import { ContentProps } from '@/app/utils/model';

export const Header = ({ data }: ContentProps) => {
  const {
    attributes: {
      title,
      square,
      roomAmount,
      location,
      propertyType,
      developer,
      disposition,
      price,
      currency,
      handoverDate,
    },
  } = data;

  const projectIcons = [
    {
      src: priceIcon,
      text: 'Стоимость',
      value: price,
    },
    {
      src: squareIcon,
      text: 'Площадь',
      value: square,
    },
    {
      src: roomIcon,
      text: 'Количество Комнат',
      value: roomAmount,
    },
    {
      src: handoverIcon,
      text: 'Дата сдачи',
      value: handoverDate,
    },
    {
      src: pinIcon,
      text: 'Местоположение',
      value: location,
    },
    {
      src: buildingIcon,
      text: 'Тип недвижимости',
      value: propertyType,
    },
    {
      src: developerIcon,
      text: 'Застройщик',
      value: developer,
    },
  ];

  const ICON_SIDE_SIZE = 17;

  return (
    <>
      <h1 className='mb-8 mt-4 text-3xl uppercase text-secondary'>{title}</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='flex flex-col items-center gap-10 md:flex-row md:gap-8'>
          <Button className='w-full bg-secondary hover:bg-primary'>
            Заказать обратный звонок
          </Button>
          <Button asChild className='w-full bg-primary hover:bg-secondary'>
            <Link href='#'>Скачать каталог проектов</Link>
          </Button>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          {/* <Image
            src={disposition.data?.[0].attributes.url}
            alt={title}
            unoptimized
            width={590}
            height={295}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          /> */}
          <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
            <Button className='w-full bg-secondary hover:bg-primary'>
              Связаться
            </Button>
            <Button asChild className='w-full bg-primary hover:bg-secondary'>
              <Link href='#'>Whats App</Link>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          {projectIcons.map(({ src, text, value }, index) => (
            <React.Fragment key={text}>
              <span className='flex flex-row gap-2 text-sm'>
                <Image
                  width={ICON_SIDE_SIZE}
                  height={ICON_SIDE_SIZE}
                  unoptimized
                  src={src}
                  alt={text}
                  style={{ height: 'auto' }}
                />
                <span className='align-bottom'>{`${text}: ${value || ''}`}</span>
              </span>
              {index === 3 && <div className='mb-2' />}
            </React.Fragment>
          ))}
          <h3 className='mt-20 text-2xl'>{`Стоимость: ${price}`}</h3>
        </div>
      </div>
    </>
  );
};
