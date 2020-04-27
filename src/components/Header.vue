<template>
  <header class="header" id="header">
    <!-- <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search"
    >
    {{ searchResults }} -->
    <!-- <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" /> -->
    <img
      src="~@/assets/img/logo.png"
      alt=""
      :class="`logo ${isFixHeader ? 'fixheader' : ''}`"
      @click="$router.push('/')"
    >
    <div
      class="menu"
      @click="isShowMenu = !isShowMenu"
    >
      <font-awesome
        :icon="['fa', 'bars']"
        v-show="!isShowMenu"
      />
      <font-awesome
        :icon="['fa', 'times']"
        v-show="isShowMenu"
      />
    </div>
    <div :class="`nav ${isFixHeader ? 'fixheader' : ''}`">
      <div class="nav-container" @click="isShowMenu = false">
        <ul :class="`nav-list ${isShowMenu ? 'show' : ''}`">
          <g-link
            tag="li"
            to="/tags/美股投資"
            class="nav-item"
          >美股投資</g-link>
          <g-link
            tag="li"
            to="/tags/精實創業"
            class="nav-item"
          >精實創業</g-link>
          <g-link
            tag="li"
            to="/tags/一頁商店"
            class="nav-item"
          >一頁商店</g-link>
          <g-link
            tag="li"
            to="/tags/工作效率"
            class="nav-item"
          >工作效率</g-link>
        </ul>
      </div>
    </div>
    <div class="bottom" v-show="isFixHeader"></div>
    <div class="arrow flex-c" v-scroll-to="{ element: `#header` }">
      <font-awesome
        :icon="['fa', 'arrow-up']"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 320px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  opacity: 1;
}

.nav {
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #303841;
  margin-top: 20px;
  transition: all 0.3s;
}

.nav-container {
  max-width: 1025px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item {
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0px 3px #303841;

  &:hover {
    background: #fff;
    color: #303841;
  }
}

.menu {
  display: none;
}

.logo {
  &.fixheader {
    opacity: 0;
    margin-bottom: 50px;
  }
}

.nav {
  &.fixheader {
    position: fixed;
    top: 0;
    z-index: 20;
    margin-top: 0;
  }
}
.bottom {
  height: 40px;
}

.arrow {
  color: #fff;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #303841;
  cursor: pointer;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .header {
    width: 100vw;
    overflow-x: hidden;
  }
  .block {
    width: 100%;
    padding: 0 5%;
  }

  .menu {
    display: block;
    position: absolute;
    z-index: 25;
    right: 15px;
    top: 10px;
    width: 25px;

    svg {
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }

  .logo {
    width: 90vw;
    margin-top: 60px;
  }

  .nav {
    position: absolute;
    top: 0;
    margin-top: 0;
    height: 50px;
  }

  .nav-list {
    position: fixed;
    width: 100vw;
    display: block;
    opacity: 0;
    right: -100vw;
    top: 0;
    height: 100vh;
    padding: 20px 0;
    z-index: 20;
    background-color: rgba(48, 56, 65, 0.9);
    transition: all 0.3s;

    &.show {
      opacity: 1;
      right: 0;
    }

    .nav-item {
      height: 40px;
      box-shadow: none;
      &:nth-child(1) {
        margin-top: 20vh;
      }
      // background-color: #303841;
    }
  }
}
</style>

<script>
import flexSearch from '@/mixins/flexSearch'
import { isMobile } from '@/utils/device'
export default {
  mixins: [flexSearch],

  data() {
    return {
      isShowMenu: false,
      isMobile,
      isFixHeader: false,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, false)
  },

  methods: {
    onScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (!this.isMobile(window)) {
        if (scrollTop >= window.innerHeight * 0.2) {
          this.isFixHeader = true
        } else {
          this.isFixHeader = false
        }
      }
    },
  },
}
</script>