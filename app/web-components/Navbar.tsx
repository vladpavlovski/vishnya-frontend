'use client';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ContactProps } from '@/app/utils/model';
import { SlideActions } from '@/app/web-components/MainSlide';
import Image from 'next/image';
import phoneCallIcon from '/public/phonecall.svg';
import whatsAppIcon from '/public/whatsapp.svg';
import telegramIcon from '/public/telegram.svg';

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className='flex'>
      <Link
        href={url}
        className={`-mb-1 flex items-center border-b-2 sm:mx-3   ${
          path === url && 'border-primary text-primary'
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className='flex'>
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 text-base leading-7 text-black hover:text-primary ${
          path === url && 'border-primary text-primary'
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

const IconAction = ({
  icon,
  text,
  link,
}: {
  icon: any;
  text: string;
  link?: string;
}) => {
  return (
    <div className='flex max-w-[70px]'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='flex flex-col items-center gap-1 text-center'
      >
        <Image width={48} height={46} unoptimized src={icon} alt={text} />
        <span className='text-[12px]'>{text}</span>
      </a>
    </div>
  );
};

const IconActions = ({ contacts }: { contacts: ContactProps }) => {
  return (
    <div className='my-6 flex flex-row justify-between'>
      {/*{TODO: modal for order call}*/}
      <IconAction icon={phoneCallIcon} text={'Заказать консультацию'} />
      <IconAction
        link={`https://wa.me/${contacts.whatsAppId}`}
        icon={whatsAppIcon}
        text={'Написать в WhatsApp'}
      />
      <IconAction
        link={`https://telegram.me/${contacts.telegramId}`}
        icon={telegramIcon}
        text={'Написать в Telegram'}
      />
    </div>
  );
};

function ContactInfo({
  contacts,
  showInMenu = false,
}: {
  contacts: ContactProps;
  showInMenu?: boolean;
}) {
  return (
    <div
      className={`${showInMenu ? 'flex gap-2 pt-6 text-left' : 'hidden text-right'} flex-col lg:flex`}
    >
      <a href={`tel:${contacts.officePhoneNumber1}`} className='text-xl'>
        {contacts.officePhoneNumber1}
      </a>
      <div className='text-xs'>
        {`Звоните, мы работаем ${contacts.openDays} ${contacts.openHours}`}
      </div>
      <a href='#' className='text-sm text-secondary underline'>
        Бесплатная консультация
      </a>
    </div>
  );
}

export default function Navbar({
  links,
  logoUrl,
  contacts,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  contacts: ContactProps;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className='bg-background p-4'>
      <div className='container mx-auto flex h-16 justify-between px-0 sm:px-6'>
        <Logo src={logoUrl} width={192} />

        {/* Desktop Nav */}
        <div className='hidden flex-shrink-0 items-center lg:flex'>
          <ul className='hidden items-stretch space-x-1 lg:flex'>
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>

        <ContactInfo contacts={contacts} />

        {/* Mobile Nav */}
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-40 bg-white' /> {/* Overlay */}
          <Dialog.Panel className='fixed inset-y-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 ltr:right-0 rtl:left-0 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Strapi</span>
                {logoUrl && (
                  <img className='h-12 w-auto' src={logoUrl} alt='' />
                )}
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-black'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-9 w-9' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-4 flow-root'>
              <div className='-my-6 divide-y divide-gray-700'>
                <div className='space-y-2 py-6'>
                  {links.map((item) => (
                    <MobileNavLink
                      key={item.id}
                      closeMenu={closeMenu}
                      {...item}
                    />
                  ))}
                </div>
              </div>
              <ContactInfo showInMenu contacts={contacts} />
              <IconActions contacts={contacts} />
              <div className='mt-6'>
                <SlideActions />
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <button
          className='p-4 lg:hidden'
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className='h-7 w-7 text-black' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
}
