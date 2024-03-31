'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(9).max(15),
  email: z.string().email().min(8).max(50),
});

export const FormClient = () => {
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col justify-between gap-2 md:flex-row'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='Ваше имя'
                  className='w-full focus-visible:ring-1 focus-visible:ring-primary'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='Телефон*'
                  {...field}
                  className='w-full focus-visible:ring-1 focus-visible:ring-primary'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  placeholder='E-mail'
                  {...field}
                  className='w-full focus-visible:ring-1 focus-visible:ring-primary'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          Отправить
        </Button>
      </form>
    </Form>
  );
};
