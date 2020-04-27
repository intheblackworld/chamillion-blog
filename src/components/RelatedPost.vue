<template>
  <div class="relate-post-list">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <swiper-slide
        v-for="(post, index) in relatedPost"
        :index="index"
        :key="post.node.title"
        class="item"
      >
        <g-link
          :to="`${post.node.path}`"
          :key="post.node.id"
          class="relate-link"
        >
          <img
            :src="post.node.image.src"
            :class="`item-img`"
          />
          <div class="flex">
            <div class="tag-list flex">
              <div
                class="tag"
                v-for="tag in post.node.tags.slice(0, 2)"
                :key="tag.title"
              >{{tag.title}}</div>
            </div>
            <div class="date">
              {{formatChineseDate(post.node.datetime)}}
            </div>
          </div>
          <div class="title">{{post.node.title}}</div>
        </g-link>
      </swiper-slide>
      <div
        class="swiper-button-prev"
        slot="button-prev"
      >
        <!-- <img
                src="./arrow-left.png"
                alt
              /> -->
      </div>
      <div
        class="swiper-button-next"
        slot="button-next"
      >
        <!-- <img
                src="./arrow-right.png"
                alt
              /> -->
      </div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.relate-link {
  text-decoration: none;
}
.item-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 8px;
  // height: 100%;
}

.title {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: 0.5px;
  color: #333;
}

.desc {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.7;
  margin-bottom: 15px;
  height: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.date {
  font-weight: 300;
  color: #666;
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-left: 5px;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
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
  props: ['relatedPost'],
  data() {
    return {
      isMobile,
      isTablet,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 2,
        spaceBetween: isTablet ? 20 : 30,
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