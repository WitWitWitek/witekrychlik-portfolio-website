import { useToast } from '@witekrychlik/ui-components';
import { useState } from 'react';
import * as z from 'zod';
import { formSchema } from '../validation/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  async function sendContactFormHandler(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(() => true);
      setIsSuccess(() => false);
      const response = await fetch('api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values }),
      });
      const data = (await response.json()) as { message: string };
      response.ok && form.reset();
      toast({
        title: data.message,
        variant: response.ok ? 'default' : 'destructive',
      });
    } catch (err) {
      toast({
        title: 'Wystąpił problem w trakcie wysyłania wiadomości.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(() => false);
    }
  }

  return {
    form,
    isSuccess,
    isLoading,
    sendContactFormHandler,
  };
};

export default useContactForm;
