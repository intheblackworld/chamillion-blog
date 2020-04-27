<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <div class="title">{{ $page.category.title }}分類</div>
        <p class="text-gray-700 text-xl">
          共有
          <span
            class="self-center"
          >{{ $page.category.belongsTo.totalCount }}篇文章</span>
        </p>
      </div>

      <div class="flex wrap">
        <PostList
          v-for="edge in $page.category.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
      <!-- <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.category.path"
          :currentPage="$page.category.belongsTo.pageInfo.currentPage"
          :totalPages="$page.category.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.category.belongsTo.pageInfo.totalPages > 1"
        />
      </div> -->
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    category(id: $id) {
      title
      path
      belongsTo(perPage: 2, page: $page) @paginate {
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
              category {
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
    //   return pluralize("post", this.$page.category.belongsTo.totalCount);
    // }
  },
  metaInfo() {
    return {
      title: this.$page.category.title,
      meta: [
        { name: 'title', content: this.$page.category.title },
      ]
    };
  },

  created() {
    console.log(this.$page.category.belongsTo)
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
}
</style>
