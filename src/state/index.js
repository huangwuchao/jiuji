import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import good from "./good";
export default new Vuex.Store({
    // 2. 创建state数据交由store来管理
    modules:{
      
      good
    }
  });