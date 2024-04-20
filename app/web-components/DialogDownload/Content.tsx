'use client';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormClient } from '@/app/web-components/ContactFormSection/FormClient';
const ThankYouMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    <span className='text-white'>Thank you for your inquiry</span>
  </motion.div>
);

export const Content = ({ isOpen }: { isOpen: boolean }) => {
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleSubmit = () => {
    setSubmissionStatus(true);
  };

  useLayoutEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmissionStatus(false);
      }, 1000);
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {submissionStatus ? (
        <ThankYouMessage key='thankyou' />
      ) : (
        <React.Fragment key='form'>
          <FormClient inModal handleSubmit={handleSubmit} />
          <p className='mt-4 text-center text-xs text-white'>
            <span>
              Нажимая на кнопку “Отправить” вы соглашаетесь с условиями{' '}
            </span>
            <br />
            <Link className='hover:underline' href='#'>
              Политики конфиденциальности
            </Link>
          </p>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
