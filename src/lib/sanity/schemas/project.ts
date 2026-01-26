export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'completedDate',
            title: 'Completed Date',
            type: 'date',
        },
        {
            name: 'beforeImages',
            title: 'Before Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
            name: 'afterImages',
            title: 'After Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Interior Painting', value: 'interior' },
                    { title: 'Exterior Painting', value: 'exterior' },
                    { title: 'Cabinet Refinishing', value: 'cabinet' },
                    { title: 'Commercial', value: 'commercial' },
                ],
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'afterImages.0',
        },
    },
}
