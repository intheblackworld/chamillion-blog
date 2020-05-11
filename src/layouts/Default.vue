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
    <div class="container">
      <div class="flex wrap">
        <transition
          name="fade"
          appear
        >
          <div class="block">
            <slot />
          </div>
        </transition>
        <Side />
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
.feature-block {
  width: 100%;
}

.block {
  width: 70%;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .block {
    width: 100%;
    padding: 0 5%;
  }
}
</style>


<script>
import Header from '@/components/Header'
import Side from '@/components/Side'

export default {
  components: {
    Header,
    Side,
  },
  created() {
    // console.log(this.$store.state)
  },
}
</script>