import { TypedObject } from '@portabletext/types';

export type Project = {
  title: string;
  slug: string;
  github: string;
  live: string;
  description: string;
  coverImage: string;
};

export interface FullProject extends Project {
  content: TypedObject | TypedObject[];
}
