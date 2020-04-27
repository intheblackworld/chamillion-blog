<template>
  <Layout>
    <div class="container">
      <div class="mx-4 sm:mx-0">
        <div class="block-title">{{ $page.series.title }}系列</div>
        <p class="text-gray-700 text-xl">
          共有
          <span
            class="self-center"
          >{{ $page.series.belongsTo.totalCount }}篇文章</span>
        </p>
      </div>

      <div class="flex wrap">
        <PostList
          v-for="edge in $page.series.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>

      
      <Pagination
        :baseUrl="$page.series.path"
        :currentPage="$page.series.belongsTo.pageInfo.currentPage"
        :totalPages="$page.series.belongsTo.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.series.belongsTo.pageInfo.totalPages > 1"
      />
    </div>
  </Layout>
</template>

<page-query>
  # ID! 表示这个字段是非空的，GraphQL 服务保证当你查询这个字段后总会给你返回一个值。在类型语言里面，我们用一个感叹号来表示这个特性。
  query($id: ID!, $page:Int) {
    series(id: $id) {
      title
      path
      belongsTo(perPage: 5, page: $page, sortBy: "seriesIndex", order: ASC) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Post {
              title
              description
              excerpt
              image(width:800)
              path
              timeToRead
              datetime
              seriesIndex
              tags {
                id
                title
              }
              series {
                id
                title
              }
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import PostList from "~/components/PostList.vue";
// import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    // Pagination,
    PostList
  },
  computed: {
    // postLabel: function() {
    //   var pluralize = require("pluralize");
    //   return pluralize("post", this.$page.tag.belongsTo.totalCount);
    // }
  },
  metaInfo() {
    return {
      title: this.$page.series.title,
      meta: [
        { name: 'title', content: this.$page.series.title },
      ]
    };
  },

  created() {
    // console.log(this.$page.tag.title)
  }
};
</script>


<style lang="scss" scoped>
.title {
  font-size: 32px;
}
</style>