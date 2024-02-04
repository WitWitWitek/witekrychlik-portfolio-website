import { MetadataEnum } from '../../../constants';
import { Metadata } from 'next';
import Projects from '../../../components/Projects/Projects';

export const revalidate = 900;

export const metadata: Metadata = {
  title: `${MetadataEnum.title} | Projekty`,
};

export default async function ProjectsPage() {
  return <Projects />;
}
