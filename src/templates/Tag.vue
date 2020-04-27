<template>
  <Layout>
    <div class="container">
      <div class="mx-4 sm:mx-0">
        <div class="block-title">{{ $page.tag.title }}相關</div>
        <p class="text-gray-700 text-xl">
          共有
          <span
            class="self-center"
          >{{ $page.tag.belongsTo.totalCount }}篇文章</span>
        </p>
      </div>

      <div class="flex wrap">
        <PostList
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>

      
      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.tag.path"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  # ID! 表示这个字段是非空的，GraphQL 服务保证当你查询这个字段后总会给你返回一个值。在类型语言里面，我们用一个感叹号来表示这个特性。
  query($id: ID!, $page:Int) {
    tag(id: $id) {
      title
      path
      belongsTo(perPage: 1, page: $page) @paginate {
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
              tags {
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
import PostList from "~/components/PostList.vue"
import Pagination from "~/components/Pagination.vue"

export default {
  components: {
    Pagination,
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
      title: this.$page.tag.title,
      meta: [
        { name: 'title', content: this.$page.tag.title },
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