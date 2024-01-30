import ContactForm from '../../../components/ContactForm/ContactForm';
import { MetadataEnum } from '../../../constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${MetadataEnum.title} | Kontakt`,
};

export default function ContactPage() {
  return <ContactForm />;
}
