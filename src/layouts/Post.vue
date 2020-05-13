<template>
  <div class="layout">
    <Header />
    <div
      class="fb-customerchat"
      attribution=setup_tool
      page_id="103647181351954"
      theme_color="#333333"
      logged_in_greeting="嗨，很高興能跟你交流"
      logged_out_greeting="嗨，很高興能跟你交流"
    >
    </div>
    <transition
      name="fade"
      appear
    >
      <main>
        <!-- a wrapper for slot is needed -->
        <slot /> <!-- the content -->
      </main>
    </transition>
    <div class="footer"></div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>


<script>
import Header from '@/components/Header'
export default {
  components: {
    Header,
  },

  data() {
    return {
    }
  },
  created() {
    // console.log(this.$store.state)
  },

}
</script>