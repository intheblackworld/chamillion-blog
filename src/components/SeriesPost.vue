<template>
  <div class="flex-jb series">
    <div v-if="!isMobileResult">
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
    <div v-if="!isMobileResult">
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
    <div v-if="isMobileResult">
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

export default {
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
      isMobileResult: false
    }
  },

  mounted() {
    this.isMobileResult = this.isMobile(window)
  },

  methods: {
    formatChineseDate,
  },
}
</script>