import Tech from '../../../components/Tech/Tech';
import { MetadataEnum } from '../../../constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${MetadataEnum.title} | Technologie`,
};

export default function TechPage() {
  return <Tech />;
}
