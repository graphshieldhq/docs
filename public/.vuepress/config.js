module.exports = {
  base: '/',
  title: 'GraphShield | Docs',
  description: 'Documentation for GraphShield Proxy and GraphShield Hub',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  dest: 'docs',
  plugins: [
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    ['mermaidjs',
      {
        theme: 'neutral' // default, dark, forest, neutral
      }
    ],
    ['vuepress-plugin-code-copy',
      {
        align: 'top',
        color: '#ffffff',
        backgroundTransition: true,
        backgroundColor: '#000000',
        successText: 'Copied!',
        staticIcon: true
      }
    ],
    ,
    'autometa', {
      enable: true, // enables/disables everything - control per page using frontmatter
      image: true, // regular meta image used by search engines
      twitter: true, // twitter card
      og: true, // open graph: facebook, pinterest, google+
      schema: true,
      canonical_base: 'https://docs.graphshield.io',
      author: {
        name: 'GraphShield',
        twitter: 'GraphShield',
      },
      site: {
        name: 'GraphShield',
        twitter: 'GraphShield',
      },
      description_sources: [
        'frontmatter',
        'excerpt',
        // markdown paragraph regex
        //
        /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
        //
        // this excludes blockquotes using `(?!^>)`
        ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

        // html paragraph regex
        /<p(?:.*?)>(.*?)<\/p>/i,

      ],
      // ---------------------------------------------------------------------------
      // order of what gets the highest priority:
      // 1. frontmatter
      // 2. content markdown image such as `![alt text](http://url)`
      // 3. content regular html img
      image_sources: [
        'frontmatter',
        /!\[.*?\]\((.*?)\)/i,        // markdown image regex
        /<img.*?src=['"](.*?)['"]/i, // html image regex
      ]
    }
  ],

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-checkbox'))
    }
  },

  theme: 'yuu',

  themeConfig: {

    yuu: {
      defaultDarkTheme: true,
      disableDarkTheme: false,
      colorThemes: ['purple', 'blue'], // green (default), blue, red, and purple
      defaultColorTheme: 'default',
      labels: {
        darkTheme: '🌗 Dark Theme', // Default is "Enable Dark Theme?"
      },
    },

    logo: '/logo.png',

    // Footer options
    lastUpdated: '📅 Last Updated',

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options

    // Customising the header label
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'guillaumemeyer/docs',
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'GitHub',

    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'guillaumemeyer/docs',
    //   if your docs are not at the root of the repo:
    docsDir: 'public',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    //   defaults to false, set to true to enable
    editLinks: true,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: '📝 Improve this page!',


    // Navbar: Horizontal navigation
    nav: [],

    // Sidebar options 
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: 'GETTING STARTED',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/', 'What is GraphShield?'],
            ['/how-does-it-work', 'How does it Work?']
          ]
        },
        {
          title: 'SECURITY & COMPLIANCE POLICIES',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/policies/', 'Understanding Policies and Rules'],
            ['/policies/conditional-access', 'Conditional Access Policy'],
            ['/policies/auditing', 'Auditing Policy'],
            ['/policies/classification', 'Classification Policy'],
            ['/policies/vip-protection', 'VIP Protection Policy'],
            ['/policies/beta-endpoints', 'Beta Endpoints Policy'],
            ['/policies/anonymization', 'Anonymization Policy']
          ]
        },
        {
          title: 'INTEGRATE YOUR APPS',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/integration/', 'Getting Started'],
            ['/integration/authentication', 'Authentication'],
            ['/integration/async-operations', 'Async Operations'],
            ['/integration/subscriptions', 'Subscriptions'],
            ['/integration/throttling', 'Throttling Guidance'],
            ['/integration/errors', 'Error Responses']
          ]
        },
        {
          title: 'TRUST CENTER',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/SECURITY', 'Security Policy']
          ]
        }
      ]
    }
  }
}
