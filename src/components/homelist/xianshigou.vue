<template>
    <div id="xianshigou">
        <!-- 轮播图 -->
        <div class="xsgbanner">
            <div class="bannercontent"></div>
        </div>

        <!-- 抢购日期表 -->
        <div class="xsgdata">
            <a href="javascript:;" v-for="(item,idx) in week" :key="idx">
                <p>{{item.title}}</p>
                <p>{{item.description}}</p>
            </a>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

//引入axios
import Axios from 'axios';

export default {
    data(){
        return{
            week:[], //星期几星期几那一栏
        }
    },
    created(){
        Axios.get('/dbapi/floors/v1?label=891839163259564033&page=1&random=1547769473712').then(res=>{
            // console.log(res.data.data.container.floor[1].content.tabs);
            this.week = res.data.data.container.floor[1].content.tabs;
        })
    }
}
</script>
<style lang="scss" scoped>
    #xianshigou{
        .xsgbanner{
            height: 5.4rem;
            background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
            padding: .373333rem;
            .bannercontent{
                border-radius: .133333rem;
                background: #58bc58;
                overflow: hidden;
                width: 100%;
                height: 100%;
            }
        }
        .xsgdata{ //星期几星期几那一栏
            height: 1.546667rem;
            margin-bottom: .266667rem;
            padding: .266667rem 0;
            display: flex;
            // overflow: hidden;
            overflow: auto;
            >a{
                display: block;
                width: 2.133333rem;
                flex-shrink: 0;
                // display: flex;
                // flex-direction: column;
                >p:nth-child(1){
                    // width: 1.2rem;
                    width: 1.733333rem;
                    color: #fff;
                    padding: .106667rem .266667rem;
                    margin: auto;
                    background: #2ac57f;
                    font-size: .4rem;
                    border-radius: .8rem;
                    text-align: center;
                }
                >p:nth-child(2){
                    color: #2ac57f;
                    font-size: .346667rem;
                    text-align: center;
                }
            }
        }
    }
</style>