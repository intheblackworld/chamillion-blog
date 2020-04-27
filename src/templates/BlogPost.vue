<template>
  <Layout>
    <div class="cover">
      <img
        :src="$page.post.image.src"
        alt=""
      >
      <div class="cover-mask"></div>
      <div class="post-info">
        <div class="post-title">
          {{$page.post.title}}
        </div>
        <div class="tag-list flex-ac">
          <g-link
            :to="tag.path"
            class="tag"
            v-for="tag in $page.post.tags"
            :key="tag.title"
          >{{tag.title}}</g-link>
          <div class="post-date flex-ac"> {{formatChineseDate($page.post.datetime)}}
          </div>
        </div>
        <!-- <div class="post-date flex-ac">{{$page.post.timeToRead}} min read</div> -->

      </div>
    </div>
    <!-- <g-link to="/" class="link">  &larr; Go Back</g-link> -->
    <div class="container flex wrap">
      <div class="left">
        <div class="content">
          <div
            v-html="$page.post.content"
            class="desc"
          />
          <div class="block-title">
            延伸閱讀
          </div>
          <div class="extend-post-list">
            <g-link
              v-for="post in extendPosts"
              :to="`${post.node.path}`"
              :key="post.node.id"
              class="extend-link"
            >
              {{post.node.title}}
            </g-link>
          </div>

          <div class="block-title">
            分享這篇文章
          </div>
          <ShareLinks :post="$page.post" />
        </div>

        <div class="content">
          <div
            class="block-title"
            v-if="seriesPostData"
          >
            系列文章
          </div>
          <SeriesPost :seriesPost="seriesPostData" />
        </div>

        <div class="content">
          <div class="block-title">
            相關文章
          </div>
          <RelatedPost :relatedPost="relatePostData" />
        </div>
      </div>
      <Side />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    post(id: $id) {
      title
      description
      path
      image(width:1600, height:800)
      # image_caption
      excerpt
      content
      datetime
      timeToRead
      extends

      category {
        id
        title
        path
        belongsTo(limit:4) {
          totalCount
          edges {
            node {
              ... on Post {
                title
                path
              }
            }
          }
        }
      }
      tags {
        id
        title
        path

        belongsTo(limit:4) {
          totalCount
          edges {
            node {
              ... on Post {
                id
                title
                path
                image
                tags {
                  id
                  title
                }
                datetime
              }
            }
          }
        }
      }
    }

    allPost{
      edges {
        node {
          id
          title
          # timeToRead
          # description
          datetime
          path
          image
        }
      }
    }

    previous: post(id: $previousElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      category {
        id
        title
      }
    }

    next: post(id: $nextElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
      category {
        id
        title
      }
    }

    tag(id: $id) {
      title
      path
      
    }  
  }
</page-query>

<style lang="scss" scoped>
.cover {
  width: 100vw;
  height: 35vh;
  overflow: hidden;
  position: relative;
  img {
    width: 100vw;
    height: auto;
  }

  .cover-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.post-info {
  position: absolute;
  z-index: 1;
  width: 1025px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 20px;
  height: 25%;
}
.post-title {
  text-align: left;
  font-size: 28px;
  line-height: 28px;
  color: #fff;
  text-shadow: 0 0 2px #333;
  font-weight: bold;
  margin-bottom: 20px;
}

.post-date {
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  margin-left: 5px;
}

.desc {
  padding-bottom: 40px;
}

.left {
  width: 70%;
  padding-right: 10px;
}

.content {
  border-bottom: 3px solid #ccc;
  margin-bottom: 40px;
}

.extend-post-list {
  margin-bottom: 40px;
}
.extend-link {
  display: block;
  color: #f0a210;
  margin: 0 15px 20px 15px;

  &:hover {
    color: #ce8703;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .content {
    width: 100%;
    padding: 0 5%;
  }

  .cover {
    height: 50vh;
    margin-top: 20px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .post-info {
    width: 100%;
    padding: 0 5%;
  }

  .left {
    width: 100%;
    padding-right: 0;
  }
}
</style>

<script>
import { formatChineseDate } from '../utils/format'
import _ from 'lodash'
import Layout from '@/layouts/Post.vue'
import RelatedPost from '@/components/RelatedPost.vue'
import SeriesPost from '@/components/SeriesPost.vue'
import Side from '@/components/Side.vue'
import ShareLinks from '@/components/ShareLinks.vue'

export default {
  name: 'blogPost',

  data() {
    return {}
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'title', content: this.$page.post.title },
        { name: 'description', content: this.$page.post.description },
        { property: 'og:title', content: this.$page.post.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: this.$page.post.description },
        { property: 'og:image', content: this.$page.post.image.src },
      ],
    }
  },

  components: {
    Side,
    Layout,
    RelatedPost,
    SeriesPost,
    ShareLinks,
  },

  computed: {
    // 本來想要傳入 router 到 graphQL 但看起來是不行
    // https://github.com/gridsome/gridsome/issues/182
    // 延伸閱讀列表
    extendPosts() {
      return this.$page.allPost.edges.filter(edge => {
        return this.$page.post.extends.includes(edge.node.title)
      })
    },

    relatePostData() {
      return _.uniqBy(
        _.flatten(
          this.$page.post.tags.map(tag =>
            tag.belongsTo.edges.map(edge => edge),
          ),
        ),
        edge => edge.node.title,
      )
    },

    seriesPostData() {
      return _.uniqBy(
        _.flatten(
          this.$page.post.tags.map(tag =>
            tag.belongsTo.edges.map(edge => edge),
          ),
        ),
        edge => edge.node.title,
      )
    },
  },

  created() {
    // console.log(this.$page.post)
  },

  methods: {
    formatChineseDate,
  },
}
</script>