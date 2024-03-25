import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import filterIcon from '@/public/icons/filter.svg';
import squareCardIcon from '@/public/icons/squareCardIcon.svg';
import dispositionIcon from '@/public/icons/dispositionIcon.svg';
import bathroomIcon from '@/public/icons/bathroomIcon.svg';
import bedroomIcon from '@/public/icons/bedroomIcon.svg';

interface CatalogWidgetProps {
  data: {
    title: string;
    motivateQuestion?: string;
  };
}

export const CatalogCard = () => {
  return (
    <div className='w-full rounded'>
      <div className='rounded-t bg-secondary px-3 py-2 text-xs uppercase text-white'>
        БЫСТРАЯ ОКУПАЕМОСТЬ! ДОХОД ОТ 10%
      </div>
      <div className='flex flex-col md:flex-row'>
        <Image
          className='md:rounded-md-bl max-h-48 w-full md:h-full'
          alt={'Title'}
          src='https://picsum.photos/310/350'
          width={310}
          height={350}
        />
        <div className='rounded-md-br bg-projectCard p-4 md:w-7/12 xl:p-6'>
          {/*{Price}*/}
          <p className='text-xl xl:text-3xl'>
            <span className='mr-1 text-primary'>$</span>100 000
          </p>
          {/*{Title}*/}
          <h3 className='text-md font-bold text-secondary xl:text-xl'>
            Квартира в Аджмане, ОАЭ, 101 м2
          </h3>

          <div className='my-2 flex flex-row justify-between'>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={squareCardIcon}
                alt={'Площадь'}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span>101 м2</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={dispositionIcon}
                alt={'Комнат'}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span>2</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={bathroomIcon}
                alt={'Ванных комнат'}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span>1</span>
            </span>
            <span className='flex gap-1 text-sm'>
              <Image
                width={17}
                height={17}
                unoptimized
                src={bedroomIcon}
                alt={'Спальных комнат'}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span>1</span>
            </span>
          </div>
          {/*{Tags}*/}
          <div className='mt-2 flex flex-row gap-1 xl:mt-4'>
            <div className='rounded bg-tagBackground px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
            <div className='rounded bg-tagBackground px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
            <div className='rounded bg-tagBackground px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
          </div>
          <p className='mt-2 text-justify text-sm md:leading-tight'>
            Онлайн-показ Удалённая сделка Оплата в рублях Апартаменты в
            первоклассном жилом комплексе Ajman Creek Towers(Т1) в Аджмане!
            Высокий доход от инвестиций - 10% в $! Предоставим каталог
            инвестора!
          </p>
          <Button
            asChild
            className='mt-4 w-full bg-secondary px-20 hover:bg-primary'
          >
            <Link href='#'>Подробнее</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className='mb-6 mt-4 hidden flex-row gap-2 bg-projectCard p-6 md:flex'>
      <Select>
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Купить' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='buy'>
            Купить
          </SelectItem>
          <SelectItem value='light'>Продать</SelectItem>
          <SelectItem value='dark'>Арендовать</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Любая недвижимость' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='buy'>
            Купить
          </SelectItem>
          <SelectItem value='light'>Продать</SelectItem>
          <SelectItem value='dark'>Арендовать</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Все районы' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='buy'>
            Купить
          </SelectItem>
          <SelectItem value='light'>Продать</SelectItem>
          <SelectItem value='dark'>Арендовать</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Цена' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='buy'>
            Купить
          </SelectItem>
          <SelectItem value='light'>Продать</SelectItem>
          <SelectItem value='dark'>Арендовать</SelectItem>
        </SelectContent>
      </Select>
      <Button className='bg-secondary hover:bg-primary'>
        Показать предложения
      </Button>
    </div>
  );
};

export default function CatalogWidget({ data }: CatalogWidgetProps) {
  const { title, motivateQuestion } = data;
  return (
    <section className='text-black-100 bg-background py-16 md:pb-8 md:pt-16'>
      <div className=' mx-auto px-3 sm:container'>
        <div className='mb-6 flex-1 flex-row flex-wrap justify-between align-middle md:mb-0'>
          <div className='mb-3 flex items-end gap-2 md:mb-0'>
            <Button asChild variant='link' className='rounded-none p-0'>
              <Image
                src={filterIcon}
                alt={'Фильтр'}
                unoptimized
                width={36}
                height={36}
                className={'md:hidden'}
              />
            </Button>
            <h2 className='text-lg uppercase leading-none text-secondary md:mb-4 md:text-2xl md:text-3xl lg:mb-8 lg:text-4xl'>
              {title}
            </h2>
          </div>
          {motivateQuestion && (
            <a
              href='#'
              className='align-middle font-bold text-primary underline'
            >
              {motivateQuestion}
            </a>
          )}
        </div>
        {/*{Filters}*/}
        <Filters />
        <div className='grid grid-cols-1 justify-between gap-4 align-middle md:grid-cols-2 xl:gap-8'>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
        <div className='mt-6 flex flex-row justify-center'>
          <Button asChild className='bg-primary px-20 hover:bg-secondary'>
            <Link href='#'>В каталог →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
