<template>
  <ul class="pagination flex-c">
    <g-link
      v-if="!isFirstPage(currentPage, totalPages)"
      :to="previousPage(currentPage,totalPages)"
      class="prev-btn page-link"
      tabindex="-1"
    >&laquo;</g-link>

    <g-link
      v-for="page in pages"
      :key="page.name"
      :to="page.link"
      v-bind:class="[isCurrentPage(currentPage, page.name) ? 'active' : '']"
      class="pagi"
      :aria-label="page.name"
      :aria-current="page.name"
    >{{page.name}}</g-link>

    <g-link
      :to="nextPage(currentPage,totalPages)"
      class="next-btn"
      tabindex="-1"
      v-if="!isLastPage(currentPage, totalPages)"
    >&raquo;</g-link>
  </ul>

</template>

<style lang="scss" scoped>
.pagination {
  width: 100%;
}

.pagi,
.prev-btn,
.next-btn {
  background-color: rgb(240, 162, 16);
  color: #fff;
  text-decoration: none;
  width: 25px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px 5px;
  transition: all 0.1s;

  &:hover {
    // opacity: .8;
    box-shadow: 0 2px 4px 0 #333;
  }
}

</style>

<script>
export default {
  name: 'pagination',
  props: {
    baseUrl: String,
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
      return currentPage == 1
    },
    isLastPage(currentPage, totalPages) {
      return currentPage == totalPages
    },
    isCurrentPage(currentPage, pageElement) {
      return currentPage == pageElement
    },
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1
      }
      return this.currentPage - 1
    },
    pages() {
      const range = []
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`,
        })
      }
      return range
    },
  },
}
</script>