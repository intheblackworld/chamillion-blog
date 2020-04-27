// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  //   // const collection = actions.addCollection('Post')
  // })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })

  api.onCreateNode(options => {
    if (options.internal.typeName === 'Post') {
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      options.series = (typeof options.series === 'string') ? options.series.split(',').map(string => string.trim()) : options.series
      options.extends = (typeof options.extends === 'string') ? options.extends.split(',').map(string => string.trim()) : options.extends
      return {
        ...options
      }
    }
  })

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    // 在這裏做 延伸閱讀 
    // 參考
    // https://danilowoz.com/Advanced-blog-system-in-Gatsby/#-next-and-prev-post
    const {
      data
    } = await graphql(`{
      allPost {
        edges {
          previous {
            id
          }
          next {
            id
          }
          node {
            id
            path
          }
        }
      }
    }
    `);
    data.allPost.edges.forEach(function (element) {
      // 根據每一篇文章，給訂他的path以及用以產生頁面的樣板以及參數
      
      createPage({
        path: element.node.path,
        component: './src/templates/BlogPost.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id
        }
      });

    });

  });
}
