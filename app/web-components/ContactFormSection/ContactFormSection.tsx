import { FormClient } from '@/app/web-components/ContactFormSection/FormClient';
import emailFormImg from '@/public/images/email-form-bg.webp';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: {
    subtitle: string;
    title: string;
  };
}
/**
 * Renders the ContactFormSection component with the provided data.
 *
 * @param {Props} data - The data object containing subtitle and title.
 * @return {JSX.Element} The rendered ContactFormSection component.
 */
export const ContactFormSection = ({ data }: Props) => {
  return (
    <section
      style={{
        background: `url('${emailFormImg.src}'), rgba(132, 19, 38, 0.92)`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
      className='text-black-100 bg-background p-8 md:py-16 '
    >
      <div className='mx-auto px-3 sm:container'>
        <h3 className='text-xs uppercase text-primary'>{data.subtitle}</h3>
        <h2 className='mb-8 text-3xl uppercase text-primary'>{data.title}</h2>
        <FormClient />
        <p className='mt-4 text-xs text-white'>
          Нажимая на кнопку “Отправить” вы соглашаетесь с условиями{' '}
          <Link className='underline' href='#'>
            Политики конфиденциальности
          </Link>
        </p>
      </div>
    </section>
  );
};
