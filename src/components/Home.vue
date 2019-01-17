<template>
    <div id="Home">
        <!-- 广告+搜索框 -->
        <div class="a1">
            <!-- 广告 -->
            <div class="showapp" v-if="show">
                <div>
                    <a href="javascript:;" v-on:click="show = !show">x</a>
                    <img src="../assets/jiuji.png" alt="">
                    <div>
                        <p>打开九机APP购物</p>
                        <p>新人领469元红包</p>
                    </div>
                </div>
                <a href="https://m.9ji.com/download-app?url=jiuji%3A%2F%2Fm.9ji.com">立即打开</a>
            </div>
            <!-- 搜索框 -->
            <div class="one">
                <!-- 搜索框 -->
                <div class="osearch">
                    <!-- 地址 -->
                    <router-link tag='a' :to="'/stores'" class="oplace">
                        <!-- 地址名 -->
                        <span>昆明市区</span>
                        <!-- 图标 -->
                        <i class="fa fa-angle-down"></i>
                    </router-link>
                    <div></div>
                    <!-- 搜索框 -->
                    <router-link tag='a' :to="'/search-form'" class="osear">
                        <!-- 图标 -->
                        <i class="fa fa-search"></i>
                        <!-- 搜索框 -->
                        <span>{{searchplaceholder}}</span>
                    </router-link>
                </div>
                <!-- 导航栏 -->
                <div class="onavigate">
                    <nav>
                    <!-- <router-link :to="{name:navigatelabel.path}" v-for="navigatelabel in navigatelabels" :key="navigatelabel.id" :class="{active:active==navigatelabel.path}" @click="selected(navigatelabel.path)">{{navigatelabel.title}}</router-link> -->
                        <a :href="navigatelabel.path" v-for="navigatelabel in navigatelabels" :key="navigatelabel.id" :class="{active:active==navigatelabel.id}" @click="selected(navigatelabel.id)">
                            {{navigatelabel.title}}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from "vue";

    //引入axios
    import Axios from 'axios';
    
    export default {
        data(){
            return{
                show: true,
                searchplaceholder:'',

                navigatelabels:[ //导航栏
                    {
                        id:1,
                        title:'推荐',
                        path:'#/home/tabs=1'
                    },
                    {
                        id:2,
                        title:'限时购',
                        path:'#/home/tabs=2'
                    },
                    {
                        id:3,
                        title:'以旧换新',
                        path:'#/home/tabs=3'
                    },
                    {
                        id:4,
                        title:'手机快修',
                        path:'#/home/tabs=4'
                    },
                    {
                        id:5,
                        title:'久久租',
                        path:'#/home/tabs=5'
                    },
                    {
                        id:6,
                        title:'头条',
                        path:'#/home/tabs=6'
                    }
                ],
                active:1, //导航栏高亮
            }
        },
        methods: {
            selected(path){
                this.active = path;
                // this.$router.push({path});
            }
        },
        created(){
            Axios.get('/dbapi/user/userInfo/v1').then(res=>{
                // console.log(res.data.data.searchPlaceholder);
                this.searchplaceholder = res.data.data.searchPlaceholder;
            })
        }
    }
</script>
<style lang="scss">
    #Home{
        flex:1;
        overflow-x: hidden;
        .a1{
            background: #f21c1c;
            .showapp{
                height: 1.333333rem;
                background: rgba(0,0,0,0.7);
                display: flex;
                overflow: hidden;
                align-items: center;
                justify-content: space-between;
                >div{
                    display: flex;
                    align-items: center;
                    a{
                        font-size: .426667rem;
                        line-height: .426667rem;
                        color: #9c9c9c;
                        width: .533333rem;
                        height: .533333rem;
                        border: 1px solid #9c9c9c;
                        border-radius: .24rem;
                        text-align: center;
                        margin: 0 .266667rem;
                    }
                    img{
                        width: 1.066667rem;
                        height: 1.066667rem;
                    }
                    >div{
                        margin-left: .266667rem;
                        p:nth-child(1){
                            color: #fff;
                            font-size: .362667rem;
                        }
                        p:nth-child(2){
                            color: #9c9c9c;
                            font-size: .32rem;
                        }
                    }
                }
                >a{
                    width: 2.133333rem;
                    height: .853333rem;
                    margin-right: .213333rem;
                    background: #f21c1c;
                    line-height: .853333rem;
                    color: #fff;
                    border-radius: .8rem;
                    font-size: .373333rem;
                    text-align: center;
                }
            }
            .one{
                height: 2.506667rem;
                background: url(../assets/search_background.jpg);
                background-size: cover;
                overflow: hidden;
                .osearch{
                    height: .906667rem;
                    background: rgba(0,0,0,0.4);
                    margin: .373333rem;
                    margin-bottom: .25rem;
                    padding: .106667rem;
                    border-radius: .8rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .oplace{
                        padding-right: .213333rem;
                        font-size: .426667rem;
                        display: flex;
                        span{
                            color: #fff;
                            line-height: .906667rem;
                            font-size: .373333rem;
                        }
                        i{
                            margin-left: .133333rem;
                            color: #fff;
                            line-height: .906667rem;
                        }
                    }
                    div{
                        width: .053333rem;
                        height: .373333rem;
                        background: #fff;
                        opacity: .6;
                        line-height: .906667rem;
                    }
                    .osear{
                        padding: .266667rem;
                        font-size: .426667rem;
                        flex: 1;
                        i{
                            width: .346667rem;
                            color: #fff;
                        }
                        span{
                            color: #fff;
                            opacity: .6;
                            font-size: .373333rem;
                        }
                    }
                }
                .onavigate{
                    height: 1.066667rem;
                    width: 100%;
                    overflow: hidden;
                    nav{
                        height: 1.066667rem;
                        padding: 0 .266667rem;
                        display: flex;
                        align-items: center;
                        overflow: auto;
                        a{ //五个导航
                            margin: 0 .266667rem;
                            font-size: .4rem;
                            color : #fff;
                            opacity : .8;
                            text-align: center;
                            flex-shrink: 0;
                        }
                    }
                    .active{
                        font-size : .426667rem;
                        opacity : 1;
                    }
                }
            }
        }
    }
</style>