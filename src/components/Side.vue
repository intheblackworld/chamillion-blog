<template>
  <div class="side">
    <div class="block-title">訂閱 Mr.變色龍</div>
    <div class="block-title">FACEBOOK</div>
    <div class="block-title">關於 Mr.變色龍</div>
  </div>
</template>

<style lang="scss" scoped>
.block-title {
  border-left: 5px solid rgb(240, 162, 16);
  padding: 3px 0px 3px 10px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
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