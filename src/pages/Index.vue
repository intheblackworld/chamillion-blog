<template>
  <Layout>
    <!-- @TODO 熱門文章 -->
    <div class="block-title">最新文章</div>
    <PostCard :post="$page.allPost.edges[0].node" />
    <div class="block-posts">
      <PostList
        v-for="edge in $page.allPost.edges.slice(1, $page.allPost.edges.length)"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
    <!-- @TODO 系列文章 -->
    <!-- 展示兩篇，輪播 -->
    <div
      class="mt-40"
      v-show="edge.node.belongsTo.edges.length > 2"
      v-for="edge in $page.allSeries.edges"
      :key="edge.node.title"
    >
      <g-link class="block-title link flex-jb" :to="edge.node.path">
        <div>{{edge.node.title}}系列</div>
        <font-awesome :icon="['fa', 'arrow-right']" />
      </g-link>
      <SwiperPost :postList="edge.node.belongsTo.edges" />
    </div>
  </Layout>
</template>

<script>
import PostList from '@/components/PostList'
import PostCard from '@/components/PostCard'
import SwiperPost from '@/components/SwiperPost.vue'
export default {
  components: {
    PostList,
    PostCard,
    SwiperPost,
  },
  metaInfo: {
    meta: [{ name: 'title', content: 'Mr.變色龍' }],
  },

  mounted() {
    // console.log(this.$page.allSeries.edges)
  },
  methods: {
    seriesPostData(edges) {
      return _.orderBy(edges, edge => edge.node.seriesIndex)
    },
  },
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  firstPost: allPost(sortBy: "datetime", limit: 1) {
    edges {
      node {
        id
        title
        timeToRead
        description
        datetime
        path
        image
        tags {
          id
          title
          path
        }

        series {
          id
          title
          # path
        }
      }
    }
  }

  allPost(sortBy: "datetime") {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        datetime
        path
        image
        seriesIndex
        tags {
          id
          title
          path
        }

        series {
          id
          title
        }
      }
    }
  }
  # @TODO 系列文章
  allSeries {
    totalCount
    edges {
      node {
        id
        title
        path

        belongsTo(sortBy: "seriesIndex", order: ASC) {
          totalCount
          edges {
            node {
              ... on Post {
                id
                title
                path
                image
                datetime
                seriesIndex
                tags {
                  id
                  title
                }

                series {
                  id
                  title
                  path
                }
                
              }
            }
          }
        }
      }
    }
  }
}
</page-query>