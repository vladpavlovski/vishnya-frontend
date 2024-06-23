'use client';
import { Button } from '@/components/ui/button';
import { DialogDownload } from '@/app/web-components/DialogDownload/DialogDownload';
import { useState } from 'react';

export const SlideActions = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  return (
    <div
      id='slide-actions'
      className='flex max-w-[750px] flex-col items-center gap-4 md:flex-row md:gap-8'
    >
      <Button
        onClick={() => setIsDownloadDialogOpen(true)}
        className='bg-secondary px-6 py-7 font-NewAthena text-2xl hover:bg-primary'
      >
        Скачать каталог проектов
      </Button>
      <Button
        onClick={() => setIsDownloadDialogOpen(true)}
        className='bg-primary px-6 py-7 font-NewAthena text-2xl hover:bg-secondary'
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
