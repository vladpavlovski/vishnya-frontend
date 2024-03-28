'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { ShortProject } from '@/app/utils/model';
import { CardRenderer } from '@/app/web-components/CatalogWidget/CardRenderer';

interface CatalogWidgetProps {
  data: {
    id: number;
    title: string;
    motivateQuestion: string;
    projects: { data: ShortProject[] };
  };
}

export default function CatalogWidget({ data }: CatalogWidgetProps) {
  const { title, motivateQuestion, projects } = data;

  const noProjectData = projects?.data ? projects.data.length === 0 : true;
  return (
    <section className='text-black-100 bg-background py-16 md:pb-8 md:pt-16'>
      <CardRenderer
        projects={projects?.data || []}
        title={title}
        motivateQuestion={motivateQuestion}
      />
      {!noProjectData && (
        <div className='mt-6 flex flex-row justify-center'>
          <Button asChild className='bg-primary px-20 hover:bg-secondary'>
            <Link href='/catalog'>В каталог →</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
