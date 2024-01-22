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
import { formSchema } from '../../validation/formSchema';
import useContactForm from '../../hooks/useForm';

export default function ContactForm() {
  const { form, sendContactFormHandler, isLoading } = useContactForm();

  const onSubmit = async (values: z.infer<typeof formSchema>) =>
    sendContactFormHandler(values);

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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            >
              Wyślij
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
