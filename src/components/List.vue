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
          <div class="lefta">
              <div class="left" v-for="data in data" :key="data.id">
              <a href="javascript:;" class="left-tob">{{data.title}}</a>
              </div>
          </div>
          <div class="right2">
              <div class="right" v-for="data2 in data" :key="data2.id">
              <a href="javascript:;" class="right-top">
                  <img :src=data2.picture alt="" >
              </a>
              <div class="avn">
                <div class="avn-top">
                    <p>{{data2.children[0].title}}</p>
                    <a href="javascript:;">{{data2.children[0].name2}}>></a> 
                </div>
                <div class="avn-bottom">
                  <a href="javascript:;">
                    <img :src=data2.children[0].children[0].picture alt="">
                    <span>{{data2.children[0].children[0].title}}</span>
                  </a>
                  
                </div>
              </div>
          </div>
          </div>
          
        </div>
    </div>
    
    
</template>
<script>
    import Axios from 'axios';
    // import { PaletteButton } from 'mint-ui';
    // import Vue from 'vue';
    // Vue.component(PaletteButton.name, PaletteButton);
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
        active:'/home',
        data:[],
        data2:[],
        data3:[]
      }
    },
     methods:{
      selected(path){
        // console.log(path);
        this.active = path;
        this.$router.push({path});
      }
    },
    created(){
        Axios.get('/dbapi/products/category/v1').then(res=>{
             console.log(res.data.data);
            this.data = res.data.data;
            //this.data2 = res.data.data.data[0]['children'][0]['children'];
          console.log(res.data.data[0].children[0].children[0]);
          console.log(res.data.data[0]['children'][1]['children'][0])
 
        })
        
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
            height: 1.173333rem;
            
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-color: rgba(250, 250, 250, 0.98);
            display: flex;
              .hom{
                height: 1.173333rem;
                font-size: .8rem;
                color:#333;
                margin-left:.266667rem;
              }
              .sou{
                display: block;
                background: #e3e3e3;
                border-radius: .133333rem;
                height: .8rem;
                width: 7.68rem;
                margin: .213333rem .4rem 0 .4rem;
                padding: 0 .625rem;
                color: #9c9c9c;
                line-height: .8rem;
                font-size:.426667rem;
                text-decoration: none;
              }
              .tab{
                height: 1.173333rem;
                font-size: 1rem;
                color:#333;
                margin-right:.266667rem;  
              }
          }
    
          .nav{
            width: 100%;
            height: 100%;
            display: flex;
            background: #f5f5f5;
            .lefta{
                display: flex;
                flex-direction: column;
                overflow-x: auto;
               .left{
                width: 2.666667rem;
                height: 1.333333rem;
                background: #fff;
                padding-bottom: 1.333333rem;
                box-sizing: border-box;
                
                  .left-tob{
                      display: block;
                      //width: 100px;
                      padding: 0 .453333rem;
                      position: relative;
                      border: 0;
                      display: flex;
                      color: #333;
                      text-decoration: none;
                      font-size: .426667rem;
                      line-height: 1.333333rem;
                      //text-align:center; 
                  }
              }
            }
            .right2{
                display: flex;
                flex-direction: column;
                overflow-x: auto;
              .right{
                width: 7.12rem;
                height: 100%;
                //overflow: auto;
                margin-left: .266667rem;
                // background: #0f0;
                
                  .right-top{
                    display: block;
                    margin: .266667rem auto 0;
                    color: #333;
                    text-decoration: none;
                      img{
                        width: 7rem;
                        height: 2.333333rem;
                      }
                  }
                  .avn{
                    width:7.12rem;
                    // background: red;
                      .avn-top{
                        width: 7.12rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                          p{
                            height:.8rem;
                            line-height: .8rem;
                            font-size: .32rem;
                            font-weight: 700;
                          }
                          a{
                            font-size: .32rem;
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
                              padding: .266667rem 0;
                              flex-direction: column;
                              align-items: center;
                              display: flex;
                              color: #333;
                              text-decoration: none;
                              background-color: #fff;
                                img{
                                  width: 1.866667rem;
                                  height: 1.866667rem;
                                  margin-bottom: .133333rem;
                                }
                                span{
                                  text-overflow: ellipsis;
                                  display: -webkit-box;
                                  overflow: hidden;
                                  -webkit-box-orient: vertical;
                                  word-break: break-all;
                                  font-size: .32rem;
                                  color:#333;
                                }
                          }
                         
                      }
                  }
              }
            } 
              
          }
          
     }
     .daohan{
      width: 100%;
      height: 1.333333rem;
      display: flex;
      box-shadow: 0 .026667rem .053333rem #ccc;
      background-color: #333;
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 25%;
        color:#9c9c9c;
        font-size: .266667rem;
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        
        .icon {
          width: .64rem;
          height: .64rem;
          vertical-align: .048rem;
          fill: currentColor;
          overflow: hidden;
        //   background:#9c9c9c;
        }
        .badge{
          height: .373333rem;
          line-height: .373333rem;
          padding: 0 .106667rem;
          font-size: .32rem;
          background: #f21c1c;
          color: #fff;
          border-radius: .373333rem;
          position: absolute;
          top: .053333rem;
          right: .4rem;
        }
      }
    //   .active{
    //     color:#c80f1e;
    //   }
    }
</style>
