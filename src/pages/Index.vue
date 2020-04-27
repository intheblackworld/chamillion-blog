<template>
  <Layout>
    <!-- @TODO -->
    <!-- <div class="sereis-block">
        <div class="block-title">
          系列文章
        </div>

        <div class="swiper">

        </div>
      </div> -->
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
    <!-- <div class="block-title">精實創業系列</div>
          <div class="block-title">免費線上課程</div>
          <div class="block-title">三萬一品系列</div> -->

  </Layout>
</template>

<script>
import PostList from '@/components/PostList'
import PostCard from '@/components/PostCard'
export default {
  components: {
    PostList,
    PostCard,
  },
  metaInfo: {
    meta: [
      { name: 'title', content: 'Mr.變色龍' }
    ]
  },

  mounted() {
    console.log(this.$page.series_lean_canvas)
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
  # @TODO 系列文章
  # series_lean_canvas: allPost (filter: { 
  #   series: { contains: ["從零到一的PMF"]}}) {
  #   edges {
  #     node {
  #       id
  #       title
  #       timeToRead
  #       description
  #       datetime
  #       path
  #       image
  #       tags {
  #         id
  #         title
  #         path
  #       }

  #       series {
  #         title
  #       }
  #     }
  #   }
  # }
}
</page-query>