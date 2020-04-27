<template>
  <div class="post flex wrap">
    <img :src="post.image.src" alt="" class="post-cover">
    <div class="content">
      <div class="flex">
        <div class="tag-list flex">
          <g-link :to="tag.path" class="tag" v-for="tag in post.tags" :key="tag.title">{{tag.title}}</g-link>
        </div>
        <div class="date">
          {{formatChineseDate(post.datetime)}}
        </div>
      </div>
      
      <g-link class="title" :to="post.path">{{post.series ? `${post.series[0].title}系列${post.seriesIndex} - ` : ''}}{{post.title}}</g-link>
      <div class="desc" v-html="`${post.description}...`"></div>
      <g-link :to="post.path" class="read">繼續閱讀</g-link>
      <!-- <b>{{post.timeToRead}} min read</b> &nbsp; -->
    </div>
    
  </div>
</template>

<script>
import moment from 'moment'
import { formatChineseDate } from '../utils/format'

export default {
  name: 'postlist',
  props: ["post"],
  data() {
    return {
      formatChineseDate
    }
  },
  created() {
    // console.log(this.post)
  },

  methods: {
  }
};
</script>

<style lang="scss" scoped>
.date {
  font-weight: 300;
}

.post {
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}

.post-cover {
  width: 50%;
  padding-right: 10px;
}

.content {
  width: 50%;
  padding-left: 10px;
  position: relative;
}

.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: #0e4481;
  }
}

.desc {
  font-size: 13px;
  color: #666;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.5;
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
}

.read {
  color: #fff;
  border-radius: 3px;
  background-color: #1a2d42;
  text-decoration: none;
  padding: 7px 10px;
  transition: all .3s;
  font-size: 13px;

  &:hover {
    opacity: .9;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {

}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .post-cover {
    width: 100%;
  }
  .content {
    width: 100%;
    padding-left: 0;
    padding-top: 15px;
  }

  .tag {
    padding: 3px 7px;
    border-radius: 2px;
    height: 20px;
  }
}
</style>