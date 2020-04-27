<template>
  <div class="layout">
    <Header />
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
import { isMobile } from '@/utils/device'
export default {
  components: {
    Header,
  },

  data() {
    return {
      isMobile
    }
  },
  created() {
    // console.log(this.$store.state)
  },
}
</script>