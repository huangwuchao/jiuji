<template>
  <div class="app-siwper">
    <div class="swiper-container" id="swiper_all">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in NavList" :key="index">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import tuijian from './tuijian'
import xianshigou from './xianshigou'
import yijiuhuanxin from './yijiuhuanxin'
import shoujikuaixiu from './shoujikuaixiu'
import jiujiuzu from './jiujiuzu'
import toutiao from './toutiao'
import Swiper from 'swiper'
import Bus from '../../common/bus.js'
export default {
  name: 'AppSwiper',
  data () {
    return {
      NavList: [
        { path: '/home/tabs=1', component: tuijian },
        { path: '/home/tabs=2', component: xianshigou },
        { path: '/home/tabs=3', component: yijiuhuanxin },
        { path: '/home/tabs=4', component: shoujikuaixiu },
        { path: '/home/tabs=5', component: jiujiuzu },
        { path: '/home/tabs=6', component: toutiao }
      ]
    }
  },
  mounted () {
    Vue.nextTick(() => {
      var swiper = new Swiper ('#swiper_all', {
        initialSlide: this.$route.path === '/home/tabs=1' ? 0 : this.$route.path === '/home/tabs=2' ? 1 : this.$route.path === '/home/tabs=3' ? 2 : this.$route.path === '/home/tabs=4' ? 3 : this.$route.path === '/home/tabs=5' ? 4 : this.$route.path === '/home/tabs=6' ? 5 : 0
      })
      swiper.on('slideChange', () => {
        // console.log(swiper.activeIndex)
        Bus.$emit('slideTab', swiper.activeIndex)
      })
      Bus.$on('changeTab', (index) => {
        swiper.slideTo(index, 0, false)
      })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
