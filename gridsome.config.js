// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

var embedConfig = {
  'enabledProviders': ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'], 
  'Youtube': {
    template: './src/embedTemplates/Youtube.hbs',
  },
  'Vimeo': {
    template: './src/embedTemplates/Vimeo.hbs',
  },
  'Giphy': {
    template: './src/embedTemplates/Giphy.hbs',
  },
  'JSFiddle': {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  'Codepen': {
    template: './src/embedTemplates/Codepen.hbs',
  },

};

module.exports = {
  siteName: 'Mr.變色龍 | 適應環境 - 登峰造極 | 通往財富的自由之路', // meta title
  siteDescription: '', // meta description
  siteUrl: 'https://chamillioner.com',
  // github page
  // siteUrl: 'https://intheblackworld.github.io',
  // pathPrefix: '/chamillion-blog',
  icon: 'src/favicon.png',


  // CNAME
  siteUrl: 'https://chamillioner.com',

  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KVSSTLT',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/post/**/*.md',
        // route: '/post/:title', // 代表 graphQL 的 path 值
        // route: '/blog/:year/:month/:day/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
            route: '/tags/:id',
          },
          // category: {
          //   typeName: 'Category',
          //   route: '/category/:id',
          //   create: true,
          // },
          series: {
            typeName: 'Series',
            route: '/series/:id',
            create: true,
          }
        },
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', embedConfig]
          ]
        },
      }
    },
    // 全文檢索套件
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        autoSetup: false,
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'handle', 'description']
          }
        ],
        searchFields: ['title'],
        // 可搜尋中文 https://github.com/thetre97/gridsome-plugin-flexsearch/issues/23#event-3172979300
        flexsearch: {
          encode: false,
          tokenize: function (str) {
            return str.replace(/[\x00-\x7F]/g, "").split("");
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/content/*': {
            changefreq: 'weekly',
            priority: 0.7
          },
          // '/resources/*': {
          //   changefreq: 'weekly',
          //   priority: 0.5
          // },
          // '/news/*': {
          //   changefreq: 'weekly',
          //   priority: 0.5
          // }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [{
          userAgent: "*",
          allow: "/",
          disallow: ["/search", "/admin", "/user"],
          crawlDelay: 2,
          cleanParam: "ref /content/"
        }]
      }
    },
  ],

  template: {
    // Category: [{
    //   path: '/category/:title', // 根據路徑對應 template
    //   component: '~/templates/Category.vue'
    // }],
    Tag: [{
      path: '/tags/:title',
      component: '~/templates/Tag.vue'
    }],
    Series: [{
      path: '/series/:title',
      component: '~/templates/Series.vue'
    }],
  },
  // transformers: {
  //   remark: {
  //     // global remark options
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  //     anchorClassName: 'icon icon-link',
  //   }
  // },
  port: 8080,
  outputDir: 'dist'
}
