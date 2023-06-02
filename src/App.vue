<template>
  <div id="app">
    <router-view />
    
    <el-dialog
      custom-class="nosupport-box dialog-no-title"
      :visible.sync="showTip"
      width="490px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :append-to-body="true"
      :show-close="false"
    >
      <div class="title tx-center">不支持当前浏览器,请下载谷歌浏览器</div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="tx-center">
            <el-link type="primary" href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank">
              <img class="chrome-logo" src="@/assets/img/chrome_logo.svg" />
              <div class="chrome-text">点击下载32位谷歌浏览器</div>
            </el-link>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="tx-center">
            <el-link type="primary" href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank">
              <img class="chrome-logo" src="@/assets/img/chrome_logo.svg" />
              <div class="chrome-text">点击下载64位谷歌浏览器</div>
            </el-link>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showTip: false
      };
  },
  beforeCreate() {
    window.document.title = process.env.VUE_APP_SYSTEM_TITLE;
  },
  created() {
    this.$store.commit('app/setSystemTitle', process.env.VUE_APP_SYSTEM_TITLE);
    if (navigator.userAgent.indexOf('Chrome') == -1) {
      this.showTip = true;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.nosupport-box {
  .el-dialog__body {
    padding-top: 0px;
  }
}
</style>
<style lang="scss" scoped>
.nosupport-box {
  .title {
    margin-bottom: 40px;
    font-size: 26px;
    color: $theme-color-warning;
  }
  .chrome-logo {
    height: 80px;
  }
  .chrome-text {
    margin-top: 10px;
    color: #3b86ff;
  }
}
</style>