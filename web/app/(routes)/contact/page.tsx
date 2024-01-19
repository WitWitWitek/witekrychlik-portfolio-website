'use client';

import {
  Section,
  Button,
  Input,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@witekrychlik/ui-components';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: 'Imię i nazwisko powinny zawierać co najmniej 2 znaki.',
    })
    .max(100, {
      message: 'Imię i nazwisko powinny zawierać maksymalnie 100 znaków.',
    }),
  email: z
    .string()
    .min(2, {
      message: 'Email powinien zawierać co najmniej 2 znaki.',
    })
    .email({ message: 'Adres e-mail nie jest poprawny.' }),
  message: z
    .string()
    .min(2, {
      message: 'Treść wiadomości powinna zawierać co najmniej 2 znaki.',
    })
    .max(1000, {
      message: 'Treść wiadomości powinna zawierać maksymalnie 1000 znaków.',
    }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values }),
    });
  }

  return (
    <Section className="min-h-screen flex flex-row">
      <div className="lg:max-w-2xl flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20">
          Formularz kontaktowy
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary font-bold text-2xl">
                    Imię i nazwisko:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jan Kowalski"
                      className="text-secondary text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary font-bold text-2xl">
                    E-mail:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="jan.kowalski@mail.com"
                      className="text-secondary text-lg"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary font-bold text-2xl">
                    Wiadomość:
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Treść wiadomości..."
                      className="text-secondary text-lg h-[300px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button
              type="submit"
              variant="secondary"
              className="font-bold tracking-wider"
            >
              Wyślij
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
