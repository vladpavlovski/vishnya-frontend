import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import emailFormImg from '@/public/images/email-form-bg.webp';
import { Content } from '@/app/web-components/DialogDownload/Content';
interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const DialogDownload = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
        className='border-none'
        style={{
          background: `url('${emailFormImg.src}'), rgba(132, 19, 38, 0.92)`,
          width: '488px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <DialogHeader>
          <DialogTitle className='mx-20 my-4 text-center text-xl uppercase text-white'>
            Скачать каталог проектов
          </DialogTitle>
          <DialogDescription>
            <Content isOpen={isOpen} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
