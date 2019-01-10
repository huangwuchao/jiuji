<template>
    <div id="Home">
        <div class="showapp"></div>
        <div class="one">
            <!-- 搜索框 -->
            <div class="osearch">
                <!-- 地址 -->
                <router-link tag='a' :to="'/stores'" class="oplace">
                    <!-- 地址名 -->
                    <span>天河区</span>
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
                <a href="javascript:;" v-if='idx!=4' v-for="(navigatelabel,idx) in navigatelabels" :key="navigatelabel.id">
                    {{navigatelabel.title}}
                </a>
                <!-- <router-link tag='a' :to="''" v-for="navigatelabel in navigatelabels" :key="navigatelabel.id">{{navigatelabel.title}}</router-link> -->
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return{
            searchplaceholder:'',
            navigatelabels:[]
        }
    },
    methods: {
        // selected(navigatelabel.title){
        //     this.active = navigatelabel.title;
        // }
    },
    created(){
        Axios.get('/dbapi/user/userInfo/v1').then(res=>{
            // console.log(res.data.data.searchPlaceholder);
            this.searchplaceholder = res.data.data.searchPlaceholder;
        }),
        Axios.get('/dbapi/floors/v1?label=0&page=1&random=0').then(res=>{
            // console.log(res.data.data.label);
            this.navigatelabels = res.data.data.label;
            // let arr1 = [];
            // for(var i=0;i<this.navigatelabel.length;i++){
            //     arr1[i] = this.navigatelabel[i].title
            // }
            // console.log(arr1);
            // this.navigatelabel = arr1;
        })
    }
}
</script>
<style lang="scss">
    #Home{
        flex:1;
        background: #0f0;
        overflow-x: hidden;
        .showapp{
            height: 3.125rem;
            background: rgba(0,0,0,0.7);
        }
        .one{
            height: 5.875rem;
            background: url(../assets/search_background.jpg);
            background-size: cover;
            overflow: hidden;
            .osearch{
                height: 2.125rem;
                background: rgba(0,0,0,0.4);
                margin: .875rem;
                margin-bottom: .25rem;
                padding: 0 .9375rem;
                border-radius: 1.875rem;
                display: flex;
                justify-content: center;
                align-items: center;
                .oplace{
                    padding-right: .5rem;
                    font-size: 1rem;
                    display: flex;
                    span{
                        color: #fff;
                        line-height: 2.125rem;
                    }
                    i{
                        margin-left: .3125rem;
                        color: #fff;
                        line-height: 2.125rem;
                    }
                }
                div{
                    width: .125rem;
                    height: .875rem;
                    background: #fff;
                    opacity: .6;
                    line-height: 2.125rem;
                }
                .osear{
                    padding: .625rem;
                    font-size: 1rem;
                    flex: 1;
                    i{
                        color: #fff;
                    }
                    span{
                        color: #fff;
                        opacity: .6;
                        font-size: 1rem;
                    }
                }
            }
            .onavigate{
                height: 2.5rem;
                line-height: 2.5rem;
                a{ //五个导航
                    margin : 0 .625rem;
                    font-size : .9375rem;
                    color : #fff;
                    opacity : .8;
                }
                .active{
                    font-size : 1rem;
                    opacity : 1;
                }
            }
        }
    }
</style>