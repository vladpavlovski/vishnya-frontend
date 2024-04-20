'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z
    .string({ required_error: 'Имя обязательно' })
    .min(2, {
      message: 'Имя должно содержать не менее 2 символов',
    })
    .max(50, {
      message: 'Имя должно содержать не более 50 символов',
    }),
  phone: z
    .string({
      required_error: 'Номер телефона обязателен',
      invalid_type_error: 'Недопустимый формат',
    })
    .min(9, { message: 'Номер телефона должен содержать не менее 9 цифр' })
    .max(15, { message: 'Номер телефона должен содержать не более 15 цифр' }),
  email: z
    .string({ required_error: 'Электронная почта обязательна' })
    .email({ message: 'Недопустимый формат электронной почты' })
    .min(8, {
      message: 'Электронная почта должна содержать не менее 8 символов',
    })
    .max(50, {
      message: 'Электронная почта должна содержать не более 50 символов',
    }),
});

export const FormClient = ({
  inModal,
  handleSubmit,
}: {
  inModal?: boolean;
  handleSubmit?: () => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    handleSubmit?.();
  }

  return (
    <Form {...form}>
      <motion.form
        key='form'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          inModal
            ? 'flex flex-col justify-between gap-4'
            : 'flex flex-col justify-between gap-2 md:flex-row'
        }
      >
        <FormField
          key={'name'}
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='Ваше имя'
                  className='w-full py-6 focus-visible:ring-1 focus-visible:ring-primary'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          key={'phone'}
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='Телефон*'
                  {...field}
                  className='w-full py-6 focus-visible:ring-1 focus-visible:ring-primary'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          key={'email'}
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='E-mail'
                  {...field}
                  className='w-full py-6 focus-visible:ring-1 focus-visible:ring-primary'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full py-6 text-lg hover:bg-secondary'
          type='submit'
        >
          Отправить
        </Button>
      </motion.form>
    </Form>
  );
};
