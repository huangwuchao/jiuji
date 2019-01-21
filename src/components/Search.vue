<template>
    <div id="Search">

        <!-- 头部搜索框 -->
        <div class="searchtop">
            <a href="javascript:;" @click="goback" class="fa fa-angle-left"></a>
            <router-link tag='a' :to="'/search-form'">
                <!-- 图标 -->
                <i class="fa fa-search"></i>
                <!-- 搜索框 -->
                <span id="sname">iPhone XS Max</span>
            </router-link>
            <a href="javascript:;" class="fa fa-th-large"></a>
        </div>

        <!-- 筛选框 -->
        <div class="searchfilter">
            <div class="synthesize select">
                <span class="select">综合</span>
                <i class="fa fa-caret-down select"></i>
            </div>
            <div class="price">
                <span>价格</span>
                <i class="fa fa-sort-up"></i>
                <i class="fa fa-sort-down"></i>
            </div>
            <div class="new">
                <span>新品优先</span>
            </div>
            <div class="filter">
                <span>筛选</span>
                <i class="fa fa-filter"></i>
            </div>
        </div>

        <!-- 搜索内容 -->
        <div class="searchresult">
            <!-- 有搜索结果 -->
            <a href="javascript:;" v-for="(item,idx) in result" :key="idx" @click="selected(item.ppid)">
                <div class="resultpic"><!-- 图片 -->
                    <img :src="item.imagePath" alt="">
                </div>
                <div class="resultcon"><!-- 内容 -->
                    <p>{{item.name}}</p><!-- 商品名称 -->
                    <ul><!-- 商品特点 -->
                        <li>{{item.tag[0]}}</li>
                        <li>{{item.tag[1]}}</li>
                        <li>{{item.tag[2]}}</li>
                        <li>{{item.tag[3]}}</li>
                    </ul>
                    <p>￥{{item.price}}</p><!-- 商品价格 -->
                    <div><!-- 分期 -->
                        <span>分期</span>
                        <span>{{item.installment}}</span>
                    </div>
                    <div><!-- 评价类 -->
                        <span>{{item.commentCount}}人评价</span>
                        <span>好评率{{item.praiseRate}}</span>
                    </div>
                    <a :href="item.rank.link"><!-- 销量排行 -->
                        <span>{{item.rank.text}}</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <div><!-- 一手优品&二手良品 -->
                        <a :href="item.bargain.url">
                            <span>一手优品</span>
                            <span>{{item.bargain.price}}</span>
                        </a>
                        <a :href="item.secondHand.url">
                            <span>二手良品</span>
                            <span>{{item.secondHand.price}}</span>
                        </a>
                    </div>
                </div>
            </a>
            <!-- 没有搜索到结果 -->
            <div class="nothing" v-for="(item,idx) in nofound" :key="idx">
                <img src="../assets/nofound.png" alt="">
                <p>{{item.text}}</p>
            </div>
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
            result:[], //搜索结果

            nofound:[], //未找到
        }
    },
    methods:{
        //返回上一页
        goback(){
            this.$router.go(-1);
        },
        selected(id){
        // console.log();
        // this.active = path;
        this.$router.push({'path':'/particulars',query:{id}});

        console.log(id)
      },
    },
    created(){
        let searchkey = this.$route.query.keyword;
        let fenlei = this.$route.query.id;
         console.log(fenlei);
        let sear = '/dbapi/products/v2?coll=&keyword='+searchkey+'&productId=0&page=1&inStock=0';
        let fenleiAj = '/dbapi/products/v2?coll='+fenlei+'&keyword=&productId=0&page=1&inStock=0';
        if(searchkey){
                Axios.get(sear).then(res=>{
                //判断是否有搜索结果
                // console.log(res);
                if(res.data.data.product.totalCount!=0){
                    var newres = res.data.data.product.list.map(function(item){
                        //修改ppid属性作为跳转详情页属性
                        item.ppid = 'https://m.9ji.com/product/'+item.ppid+'.html';
                    })
                    // console.log(res.data.data.product.list);
                    this.result = res.data.data.product.list;
                }else{
                    // console.log('没有搜索到相关商品');
                    this.nofound =[{text:'没有搜索到相关商品'}];
                }
            })
        }else if(fenlei){
             Axios.get(fenleiAj).then(res=>{
                     console.log(res.data.data.product.list);
                    this.result = res.data.data.product.list;
            })   
        };
        
    },
    mounted(){
        let searchkey = this.$route.query.keyword;
        var sname = document.getElementById('sname');
        sname.innerHTML = searchkey; //根据要搜索的内容更改顶部搜索框的内容
    },
    
}
$(function(){ //jQuery写这里
    $('.searchfilter').on('click','div',function(){
        $(this).siblings('div').find('span').removeClass('select');
        $(this).find('span').addClass('select'); 
        $(this).siblings('div').find('i').removeClass('select');
        $(this).find('i').addClass('select'); 
    })
})
</script>
<style lang="scss">
    #Search{
        flex:1;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        .searchtop{ //头部搜索框
            background: rgba(250,250,250,0.98);
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            >a:nth-child(1){
                width: 1.173333rem;
                height: 1.173333rem;
                text-align: center;
                font-size: .8rem;
                color: rgb(51,51,51);
                line-height: 1.173333rem;
            }
            >a:nth-child(2){
                flex:1;
                height: .746667rem;
                border: 1px solid #dfdfdf;
                display: flex;
                justify-content: center;
                align-items: center;
                >i{
                    margin: 0 .213333rem;
                    color: #9c9c9c;
                    font-size: .373333rem;
                }
                >span{
                    color: #9c9c9c;
                    font-size: .373333rem;
                }
            }
            >a:nth-child(3){
                width: 1.173333rem;
                height: 1.173333rem;
                text-align: center;
                font-size: .533333rem;
                color: #9c9c9c;
                line-height: 1.173333rem;
            }
        }
        .searchfilter{ //筛选框
            height: 1.173333rem;
            background: #fff;
            display: flex;
            align-items: center;
            >div{
                height: 1.12rem;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                >span{
                    font-size: .373333rem;
                    color: #9c9c9c;
                }
                >i{
                    margin-left: .133333rem;
                    font-size: .373333rem;
                    color: #9c9c9c;
                }
            }
            div:nth-child(2){
                position: relative;
                >i:nth-child(3){
                    position: absolute;
                    bottom: .373333rem;
                    right: .693333rem;
                }
            }
            .select{
                color: #f21c1c;
                font-weight: 700;
            }
        }
        .searchresult{ //搜索结果框
            flex: 1;
            overflow: auto;
            >a{
                height: 5.066667rem;
                padding: .266667rem;
                display: flex;
                border-bottom: .026667rem solid #ccc;
                .resultpic{
                    >img{
                        width: 2.666667rem;
                    }
                }
                .resultcon{
                    flex:1;
                    margin-left: .266667rem;
                    display: flex;
                    flex-direction: column;
                    >p:nth-child(1){
                        color: #333;
                        font-weight: 700;
                        font-size: .373333rem;
                        line-height: .448rem;
                        margin-top: .133333rem;
                    }
                    >ul:nth-child(2){
                        margin-top: .133333rem;
                        display: flex;
                        // overflow: auto;
                        >li{
                            height: .533333rem;
                            line-height: .533333rem;
                            padding: 0 .106667rem;
                            font-size: .266667rem;
                            margin-right: .133333rem;
                            color: #999;
                            border-radius: .08rem;
                            border: .026667rem solid #eee;
                            background: #f8f8f8;
                        }
                    }
                    >p:nth-child(3){
                        color: #f21c1c;
                        font-weight: 700;
                        font-size: .426667rem;
                        line-height: .64rem;
                        margin-top: .133333rem;
                        font-weight: 700;
                    }
                    >div:nth-child(4){
                        margin-top: .133333rem;
                        height: .426667rem;
                        display: flex;
                        align-items: center;
                        >span:nth-child(1){
                            color: #f21c1c;
                            border: .026667rem solid #f21c1c;
                            border-radius: .213333rem;
                            line-height: .32rem;
                            width: 1.066667rem;
                            height: .426667rem;
                            padding: .026667rem .186667rem;
                            margin-right: .08rem;
                            font-size: .32rem;
                        }
                        >span:nth-child(2){
                            font-weight: 400;
                            color: rgb(156,156,156);
                            font-size: .32rem;
                            line-height: .32rem;
                        }
                    }
                    >div:nth-child(5){
                        margin-top: .133333rem;
                        height: .469333rem;
                        display: flex;
                        align-items: center;
                        >span{
                            color: #9c9c9c;
                            font-size: .32rem;
                        }
                        >span:nth-child(2){
                            margin-left: .133333rem;
                        }
                    }
                    >a:nth-child(6){
                        margin-top: .133333rem;
                        display: flex;
                        align-items: center;
                        >span{
                            font-weight: 700;
                            margin-right: .133333rem;
                            font-size: .32rem;
                            color: #333;
                        }
                        >i{
                            font-size: .373333rem;
                            color: #9c9c9c;
                        }
                    }
                    >div:nth-child(7){
                        margin-top: .133333rem;
                        display: flex;
                        align-items: center;
                        >a{
                            display: flex;
                            align-items: center;
                            border: .026667rem solid #dfdfdf;
                            border-radius: .533333rem;
                            height: .533333rem;
                            padding: 0 .133333rem;
                            margin-right: .133333rem;
                            >span{
                                line-height: .533333rem;
                                font-size: .266667rem;
                                color: #333;
                            }
                        }
                    }
                }
            }
            .nothing{
                height: 8rem;
                padding-top: 2.666667rem;
                >img{
                    width: 2rem;
                    height: 2rem;
                    margin-left: 50%;
                    transform: translateX(-50%)
                }
                >p{
                    margin-top: .32rem;
                    color: #ccc;
                    font-size: .373333rem;
                    text-align: center;
                }
            }
        }
        
    }
</style>