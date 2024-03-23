import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CatalogWidgetProps {
  data: {
    title: string;
    motivateQuestion?: string;
  };
}

export const CatalogCard = () => {
  //lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl
  return (
    <div className='w-full rounded'>
      <div className='rounded-t bg-secondary px-3 py-2 text-xs uppercase text-white'>
        БЫСТРАЯ ОКУПАЕМОСТЬ! ДОХОД ОТ 10%
      </div>
      <div className='flex flex-row '>
        <Image
          className='rounded-md-bl h-full w-5/12'
          alt={'Title'}
          src='https://picsum.photos/310/350'
          width={310}
          height={350}
        />
        <div className='bg-projectCard rounded-md-br w-7/12 p-4 xl:p-6'>
          {/*{Price}*/}
          <p className='text-xl xl:text-3xl'>
            <span className='mr-1 text-primary'>$</span>100 000
          </p>
          {/*{Title}*/}
          <h3 className='text-md font-bold text-secondary xl:text-xl'>
            Квартира в Аджмане, ОАЭ, 101 м2
          </h3>
          <p className='text-sm'>place for icons</p>
          {/*{Tags}*/}
          <div className='mt-2 flex flex-row gap-1 xl:mt-4'>
            <div className='bg-tagBackground rounded px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
            <div className='bg-tagBackground rounded px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
            <div className='bg-tagBackground rounded px-2 py-1 text-xs xl:px-4 xl:py-2'>
              Теги
            </div>
          </div>
          <p className='mt-2 text-justify text-xs leading-tight'>
            Онлайн-показ Удалённая сделка Оплата в рублях Апартаменты в
            первоклассном жилом комплексе Ajman Creek Towers(Т1) в Аджмане!
            Высокий доход от инвестиций - 10% в $! Предоставим каталог
            инвестора!
          </p>
          <button className='mt-4 w-full rounded-md bg-secondary py-2 text-white xl:py-3'>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className='bg-projectCard mb-6 mt-4 flex flex-row gap-2 p-6'>
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
    </div>
  );
};

export default function CatalogWidget({ data }: CatalogWidgetProps) {
  const { title, motivateQuestion } = data;
  return (
    <section className='text-black-100 bg-background py-32'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-between align-middle'>
          <h2 className='mb-4 text-2xl uppercase leading-none text-secondary md:text-3xl lg:mb-8 lg:text-4xl'>
            {title}
          </h2>
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
        <div className='grid grid-cols-2 justify-between gap-4 align-middle xl:gap-8'>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
        <div className='mt-6 flex flex-row justify-center'>
          <a
            href='#'
            className='max-w-fit rounded bg-primary px-20 py-3 align-middle text-base text-white md:text-lg'
          >
            В каталог →
          </a>
        </div>
      </div>
    </section>
  );
}
