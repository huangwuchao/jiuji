// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "./font/font_1003760_8gdxl0exth8/iconfont";
import $ from 'jquery';
//import swiper from "../node_modules/swiper/dist/css/swiper"

import Vconsole from 'vconsole'
let vConsole = new Vconsole() //初始化
export default vConsole

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
