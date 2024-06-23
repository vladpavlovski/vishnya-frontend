'use client';
import { Button } from '@/components/ui/button';
import { DialogDownload } from '@/app/web-components/DialogDownload/DialogDownload';
import { useState } from 'react';

export const SlideActions = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  return (
    <div
      id='slide-actions'
      className='flex max-w-2xl flex-col items-center gap-4 md:flex-row md:gap-8'
    >
      <Button
        onClick={() => setIsDownloadDialogOpen(true)}
        className='w-full bg-secondary py-7 font-NewAthena text-xl hover:bg-primary'
      >
        Скачать каталог проектов
      </Button>
      <Button
        onClick={() => setIsDownloadDialogOpen(true)}
        className='w-full bg-primary py-7 font-NewAthena text-xl hover:bg-secondary'
      >
        Бесплатная консультация
      </Button>
      <DialogDownload
        isOpen={isDownloadDialogOpen}
        setIsOpen={setIsDownloadDialogOpen}
      />
    </div>
  );
};
