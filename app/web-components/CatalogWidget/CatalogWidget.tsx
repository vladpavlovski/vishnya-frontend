import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import filterIcon from '@/public/icons/filter.svg';
import { ShortProject } from '@/app/utils/model';
import { CardRenderer } from '@/app/web-components/CatalogWidget/CardRenderer';

interface CatalogWidgetProps {
  data: {
    id: number;
    title: string;
    motivateQuestion?: string;
    projects: { data: ShortProject[] };
  };
}

export default function CatalogWidget({ data }: CatalogWidgetProps) {
  const { title, motivateQuestion, projects } = data;

  const noProjectData = projects?.data ? projects.data.length === 0 : true;
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
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </Button>
            <h2 className='text-lg uppercase leading-none text-secondary md:mb-4 md:text-2xl lg:mb-8 lg:text-4xl'>
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
        <CardRenderer projects={projects?.data || []} />
        {!noProjectData && (
          <div className='mt-6 flex flex-row justify-center'>
            <Button asChild className='bg-primary px-20 hover:bg-secondary'>
              <Link href='#'>В каталог →</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
