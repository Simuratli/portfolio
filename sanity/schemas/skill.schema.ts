import {defineField, defineType, defineArrayMember} from 'sanity'

export const skillType = defineType({
    name: 'skill',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            description: 'e.g. Frontend Engineering, AI & Integration',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'skillGroups',
            title: 'Skill Groups',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'skillGroup',
                    title: 'Skill Group',
                    fields: [
                        defineField({
                            name: 'groupName',
                            title: 'Group Name',
                            description: 'e.g. Languages, UI Stack, State, Testing',
                            type: 'string',
                        }),
                        defineField({
                            name: 'skills',
                            title: 'Skills',
                            type: 'array',
                            of: [{type: 'string'}],
                            options: {
                                layout: 'tags',
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'groupName',
                            subtitle: 'skills',
                        },
                        prepare({title, subtitle}) {
                            return {
                                title,
                                subtitle: Array.isArray(subtitle) ? subtitle.join(' · ') : '',
                            }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'category',
        },
    },
})
