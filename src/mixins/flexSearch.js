import FlexSearch from 'flexsearch'

export default {
  data() {
    return {
      searchTerm: '',
      search: null,
    }
  },

  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 1) return []
      const results = this.search
        .search({ query: searchTerm, limit: 5, suggest: true })
        .map(item => item.title)
      return results
    },
  },
  
  async mounted() {
    // Some flexsearch options, and helper functions
    const { flexsearch, loadIndex } = this.$flexsearch
    // Create a flexsearch instance, and load our config options, plus our custom tokenizer function
    const search = new FlexSearch({
      ...flexsearch,
      tokenize: function(str) {
        return str.replace(/[\x00-\x7F]/g, '').split('')
      },
    })
    // Make search available on this
    this.search = search
    // Load our index data into flexsearch
    await loadIndex(search)
  },
}
