import * as z from 'zod';

export const formSchema = z.object({
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
