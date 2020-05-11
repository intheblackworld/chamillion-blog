<template>
  <div class="side">
    <!-- @TODO 連結待補 -->
    <!-- <div class="block-title">訂閱變色龍</div>
    <div class="color-block flex-c flex-ja app-store">
      <div class="flex-c icon">
        <font-awesome :icon="['fab', 'app-store-ios']" />
      </div>
      <div class="flex-ac flex-js">
        APP STORE
      </div>
    </div>
    <div class="color-block flex-c flex-ja instgram">
      <div class="flex-c icon">
        <font-awesome :icon="['fab', 'instagram']" />
      </div>
      <div class="flex-ac flex-js">
        Instagram
      </div>
    </div>
    <div class="color-block flex-c flex-ja youtube">
      <div class="flex-c icon">
        <font-awesome :icon="['fab', 'youtube']" />
      </div>
      <div class="flex-ac flex-js">
        Youtube
      </div>
    </div>
    <div class="color-block flex-c flex-ja podcast">
      <div class="flex-c icon">
        <font-awesome :icon="['fa', 'podcast']" />
      </div>
      <div class="flex-ac flex-js">
        Podcast
      </div>
    </div>
    <div class="color-block flex-c flex-ja rss">
      <div class="flex-c icon">
        <font-awesome :icon="['fa', 'rss']" />
      </div>
      <div class="flex-ac flex-js">
        RSS
      </div>
    </div> -->
    <div class="block-title">FACEBOOK</div>
    <div class="block-desc">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMr.yesbrain%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=569556457311767"
        width="340"
        height="500"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
    <div class="block-title">關於 Mr.變色龍</div>
    <div class="block-desc">
      半路自學程式的軟體工程師<br />
      飄到海外體驗人生百態<br />
      現在為連續創業家<br />
      從一個又一個的血淚挫折中<br />
      變成更好的自己<br />
      關注產品,行銷<br />
      個人驅動力優化<br />
      遊戲化八角框架等領域
    </div>
    <div class="block-title">版權聲明</div>
    <div class="block-desc">
      本網站內容未經許可請勿任意轉載
      <!-- 欲引用或轉載網站內容 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-title {
  border-left: 5px solid rgb(240, 162, 16);
  padding: 3px 0px 3px 10px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  margin-top: 40px;
}

.block-desc {
  color: rgba(61, 61, 61, 1);
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 20px;
}

.color-block {
  width: 100%;
  height: 64px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #fff;

  > div {
    width: 60%;
  }

  > .icon {
    width: 40%;
  }

  svg {
    width: 30px;
    height: 30px;
    height: auto;
  }

  &.app-store {
    background: #222831;
  }

  &.instgram {
    background: #30475e;
  }

  &.youtube {
    background-color: rgb(184, 35, 35);
  }

  &.podcast {
    background-color: #dabd93;
  }

  &.rss {
    background-color: #63b3a5;
  }
}

.side {
  width: 30%;
  padding-left: 30px;
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

  .side {
    width: 100%;
    padding: 0 5%;
  }
}
</style>