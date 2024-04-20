'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DialogDownload } from '@/app/web-components/DialogDownload/DialogDownload';
import { useState } from 'react';

export const SlideActions = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  return (
    <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
      <Button
        onClick={() => setIsDownloadDialogOpen(true)}
        className='w-full bg-secondary hover:bg-primary'
      >
        Скачать каталог проектов
      </Button>
      <Button asChild className='w-full bg-primary hover:bg-secondary'>
        <Link href='#'>Бесплатная консультация</Link>
      </Button>
      <DialogDownload
        isOpen={isDownloadDialogOpen}
        setIsOpen={setIsDownloadDialogOpen}
      />
    </div>
  );
};
