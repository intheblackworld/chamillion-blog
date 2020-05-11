<template>
  <div class="share-content flex">
    <g-link
      class="btn fb flex-c"
      :to="`https://www.facebook.com/sharer/sharer.php?u=${$page.metadata.siteUrl}${post.path}`"
    >
      <font-awesome :icon="['fab', 'facebook-f']" />Facebook</g-link>
    <g-link
      class="btn line flex-c"
      :to="`https://social-plugins.line.me/lineit/share?url=${$page.metadata.siteUrl}${post.path}`"
    >
      <font-awesome :icon="['fab', 'line']" />Line</g-link>
    <g-link
      class="btn telegram flex-c"
      :to="`https://t.me/share/url?url=${$page.metadata.siteUrl}${post.path}&text=${post.title}`"
    >
      <font-awesome :icon="['fab', 'telegram-plane']" />Telegram</g-link>
  </div>
</template>

<style lang="scss" scoped>
.share-content {
  margin-bottom: 40px;
}

.btn {
  width: 120px;
  height: 30px;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 15px;
  svg {
    margin-right: 5px;
    width: 8px;
  }

  &.fb {
    background-color: #3b5998;
  }

  &.line {
    background-color: #00b900;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.telegram {
    background-color: #54a9eb;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .share-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    width: 32%;
    margin-right: 0;
  }
}
</style>

<script>
export default {
  name: 'share-links',
  props: ['post'],
  data() {
    return {
      process,
    }
  }
}
</script>