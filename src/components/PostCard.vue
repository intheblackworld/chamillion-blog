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
      <div class="title">{{post.series ? `${post.series[0].title}系列${post.seriesIndex} - ` : ''}}{{post.title}}</div>
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
  name: 'postcard',
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
  padding: 0px 0 30px;
  border-bottom: 1px solid #ccc;
}

.post-cover {
  width: 100%;
  min-height: 50vh;
  object-fit: cover;
  padding-right: 10px;
  margin-bottom: 17px;
}

.content {
  position: relative;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: 0.5px;
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
  letter-spacing: .5px;
  margin-left: 5px;
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
</style>