// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mr.變色龍 | 適應環境 - 登峰造極 | 通往財富的自由之路', // meta title
  siteDescription: '', // meta description
  siteUrl: 'chamillioner.com',
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
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
            route: '/tags/:id',
          },
          category: {
            typeName: 'Category',
            route: '/category/:id',
            create: true,
          },
          series: {
            typeName: 'Series',
            // route: '/series/:title',
            create: true,
          }
        }
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
    }
  ],

  template: {
    Category: [{
      path: '/category/:title', // 根據路徑對應 template
      component: '~/templates/Category.vue'
    }],
    Tag: [{
      path: '/tags/:title',
      component: '~/templates/Tag.vue'
    }],
    Series: [{
      path: '/series/:title',
      component: '~/templates/Series.vue'
    }],
  },

  transformers: {
    remark: {
      // global remark options
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  port: 8080,
  outputDir: 'dist'
}
