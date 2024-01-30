import {defineField, Rule} from 'sanity'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of project',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of project',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'github',
      type: 'url',
      title: 'Link to GitHub',
    }),
    defineField({
      name: 'live',
      type: 'url',
      title: 'Link to Live',
    }),
    defineField({
      title: 'Data publikacji',
      name: 'releaseDate',
      type: 'date',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Project Description',
      validation: (Rule) => Rule.min(1).max(200),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
}
