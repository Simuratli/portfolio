import {defineField, defineType} from 'sanity'

export const writingType = defineType({
    name: 'writing',
    title: 'Writings',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'date',
            title: 'Writing Date',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags',
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'date',
        },
    },
})
