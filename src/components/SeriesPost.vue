<template>
  <div class="flex-jb series">
    <div v-if="!isMobile">
      <g-link
        v-for="(post, index) in postList"
        v-show="index < (postList.length / 2)"
        :to="`${post.node.path}`"
        :key="post.node.id + index"
        class="series-link flex"
      >
        <div class="label-index flex-c">{{post.node.seriesIndex}}</div>{{post.node.title}}
      </g-link>
    </div>
    <div v-if="!isMobile">
      <g-link
        v-for="(post, index) in postList"
        v-show="index > postList.length / 2"
        :to="`${post.node.path}`"
        :key="post.node.id + index"
        class="series-link flex"
      >
        <div class="label-index flex-c">{{post.node.seriesIndex}}</div>{{post.node.title}}
      </g-link>
    </div>
    <div v-if="isMobile">
      <g-link
        v-for="(post, index) in postList"
        :to="`${post.node.path}`"
        :key="post.node.id + index"
        class="series-link flex"
      >
        <div class="label-index flex-c">{{post.node.seriesIndex}}</div>{{post.node.title}}
      </g-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.series {
  > div {
    width: 50%;
    display: inline-block;
  }
}
.series-link {
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  line-height: 1.5;
  text-decoration: none;
  padding: 5px;
  color: #333;

  &:hover {
    color: #880e28;
  }

  &.active--exact {
    background-color: #999;
    color: #fff;
  }
}

.label-index {
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: #880e28;
  color: #fff;
  margin-right: 10px;
  font-size: 13px;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .series {
    > div {
      width: 100%;
      display: inline-block;
    }
  }
}
</style>

<script>
import { isMobile, isTablet } from '../utils/device'
import { formatChineseDate } from '../utils/format'

import slider from '@/mixins/slider.js'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  mixins: [slider],
  props: {
    postList: Array,
  },
  name: 'seriesPost',

  created() {
    // console.log(this.postList)
  },

  data() {
    return {
      isMobile,
      isTablet,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 4,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true,
        // },
        loop: true,
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    formatChineseDate,
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },
}
</script>