export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db021b68dd3c84666562b79',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c5gjuejt',
                  apiId: '2b42b0e2-1cbe-43b2-bdf6-a768cfae74f9'
                },
                {
                  buildHookId: '5db021b68dd3c8b692562b39',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vs6bqn1c',
                  apiId: '5f016b5a-6aeb-43a8-aae9-cc15c4a7f5cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrewbr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vs6bqn1c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
