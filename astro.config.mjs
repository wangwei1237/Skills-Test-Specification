import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Skills Test Specification',
      description: 'Specification document for testing Agent Skills behavior, contracts, and routing.',
      editLink: {
        baseUrl: 'https://github.com/wangwei1237/Skills-Test-Specification/edit/main/',
      },
      sidebar: [
        {
          label: 'Specification',
          items: [
            { slug: 'index', label: 'Overview' },
            { slug: '01-goals' },
            { slug: '02-boundaries' },
            { slug: '03-case-types' },
            { slug: '04-test-modes' },
            { slug: '05-file-location' },
            { slug: '06-yaml-structure' },
            { slug: '07-fields' },
            { slug: '08-case-guidelines' },
            { slug: '09-minimum-suite' },
            { slug: '10-principles' },
            { slug: '11-evaluation' },
            { slug: '12-template' },
          ],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/wangwei1237/Skills-Test-Specification',
        },
      ],
    }),
  ],
});
