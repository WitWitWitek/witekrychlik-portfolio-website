export type Project = {
  title: string;
  slug: string;
  github: string;
  description: string;
  coverImage: string;
};

export type FullProject = Omit<Project, 'description'> & {
  content: string;
};
