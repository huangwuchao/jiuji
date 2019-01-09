<template>
    <div id="List">
        <div class="list-top">
          <div class="hom" @click="selected('/home')">
            <
          </div>
          <a href="#" class="sou">
                iPhone XS Max
          </a>
          <div class="tab" v-on:click="show = !show">
            ...
          </div>
        </div>
        <div class="daohan" v-if="show">
            <a href="javascript:;" v-for="tab in tabs" :key="tab.path" :class="{active:active==tab.path}" @click="selected(tab.path)">
                <svg class="icon" aria-hidden="true">
                <use :xlink:href="tab.icon"></use>
                </svg>
                <span class="bot_text">{{tab.text}}</span>
                <!-- <span class="badge" v-if='idx===2'>0</span> -->
            </a>
        </div>
        <div class="nav">
          <div class="left">
              <a href="javascript:;" class="left-tob">手机通讯</a>
          </div>
          <div class="right">
              <a href="javascript:;" class="right-top">
                  <img src="https://img2.ch999img.com/pic/category/201812270738310.jpg.webp" alt="" >
              </a>
              <div class="avn">
                <div class="avn-top">
                    <p>热门品牌</p>
                    <a href="javascript:;">排行榜>></a>
                </div>
                <div class="avn-bottom">
                  <a href="javascript:;">
                    <img src="https://img2.ch999img.com/pic/category/201809140531500.jpg.webp" alt="">
                    <span>苹果</span>
                  </a>
                  
                </div>
              </div>
          </div>
        </div>
    </div>
    
    
</template>
<script>
    import { PaletteButton } from 'mint-ui';
    import Vue from 'vue';
    Vue.component(PaletteButton.name, PaletteButton);
export default {
    data(){
      return{
        show: false,
        tabs:[
          {
            text:'首页',
            name:'Home',
            icon:'#icon-shouye',
            path:'/home'
          },{
            text:'分类',
            name:'List',
            icon:'#icon-fenlei',
            path:'/list'
          },{
            text:'购物车',
            name:'Cart',
            icon:'#icon-tubiaozhizuomoban',
            path:'/cart'
          },{
            text:'我的',
            name:'Mine',
            icon:'#icon-wode',
            path:'/mine'
          }
        ],
        active:'/home'
      }
    },
     methods:{
      selected(path){
        // console.log(path);
        this.active = path;
        this.$router.push({path});
      }
    }
}
</script>

<style lang="scss" scoped>
     #List{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
          .list-top{
            height: 2.75rem;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-color: rgba(250, 250, 250, 0.98);
            display: flex;
              .hom{
                height: 2.75rem;
                font-size: 2rem;
                color:#333;
                margin-left:10px;
              }
              .sou{
                display: block;
                background: #e3e3e3;
                border-radius: .3125rem;
                height: 1.875rem;
                width: 300px;
                margin: 8px 15px 0 15px;
                padding: 0 .625rem;
                color: #9c9c9c;
                line-height: 1.875rem;
                text-decoration: none;
              }
              .tab{
                height: 20px;
                font-size: 2rem;
                color:#333;
              }
          }
          .nav{
            width: 100%;
            height: 100%;
            display: flex;
            background: #f5f5f5;
              .left{
                width: 100px;
                height: 50px;
                overflow: auto;
                background: #fff;
                padding-bottom: 50px;
                box-sizing: border-box;
                // background: red;
                  .left-tob{
                      display: block;
                      //width: 100px;
                      padding: 0 17px;
                      position: relative;
                      border: 0;
                      display: flex;
                      color: #333;
                      text-decoration: none;
                      font-size: 16px;
                      line-height: 50px;
                      //text-align:center; 
                  }
              }
              .right{
                width: 289px;
                height: 96px;
                //overflow: auto;
                margin-left: 10px;
                // background: #0f0;
                  .right-top{
                    display: block;
                    
                    margin: 10px auto 0;
                    color: #333;
                    text-decoration: none;
                      img{
                        width: 289px;
                        height: 96px;
                      }
                  }
                  .avn{
                    width: 289px;
                    // background: red;
                      .avn-top{
                        width: 289px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                          p{
                            height: 30px;
                            line-height: 30px;
                            font-size: 12px;
                            font-weight: 700;
                          }
                          a{
                            font-size: 12px;
                            display: flex;
                            color: #333;
                            text-decoration: none;
                          }
                      }
                      .avn-bottom{
                        flex-wrap: wrap;
                        display: flex;
                        
                          a{
                              width: 33%;
                              padding: 10px 0;
                              flex-direction: column;
                              align-items: center;
                              display: flex;
                              color: #333;
                              text-decoration: none;
                              background-color: #fff;
                                img{
                                  width: 70px;
                                  height: 70px;
                                  margin-bottom: 5px;
                                }
                                span{
                                  text-overflow: ellipsis;
                                  display: -webkit-box;
                                  overflow: hidden;
                                  -webkit-box-orient: vertical;
                                  word-break: break-all;
                                  font-size: 12px;
                                  color:#333;
                                }
                          }
                         
                      }
                  }
              }
          }
          
     }
     .daohan{
      width: 100%;
      height: 3.125rem;
      display: flex;
      box-shadow: 0 -1px 2px #ccc;
      background-color: #333;
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 25%;
        color:#9c9c9c;
        font-size: 10px;
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        
        .icon {
          width: 1.5rem;
          height: 1.5rem;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        //   background:#9c9c9c;
        }
        .badge{
          height: .875rem;
          line-height: .875rem;
          padding: 0 .25rem;
          font-size: .75rem;
          background: #f21c1c;
          color: #fff;
          border-radius: .875rem;
          position: absolute;
          top: .125rem;
          right: .9375rem;
        }
      }
    //   .active{
    //     color:#c80f1e;
    //   }
    }
</style>
