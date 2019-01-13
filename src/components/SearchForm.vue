<template>
    <div id="SearchForm">
        <div class="top">
            <p class="fanhui">
                <a href="javascript:;" @click="goback" class="fa fa-angle-left"></a> 
            </p>
            <div class="sou">
                <form action="">
                    <input type="text" name="" id="searchkey" placeholder="iPhone XS Max">
                </form>
            </div>
            <div class="souright">
                <!-- <router-link to="{name:'Search',query:{keyword:'iphone'}}'">搜索</router-link> -->
                <!-- <router-link to="Search">搜索</router-link> -->
                <!-- <a href="">搜索</a> -->
                <a href="javascript:;" @click="goto('Search')">搜索</a>
            </div>
        </div>
        <div class="resou">热搜</div>
    
        <div class="hua">
            <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                华为 nova4
            </a>
             <a href="javascript:;">
                iPone
            </a>
             <a href="javascript:;">
                华为
            </a>
            <a href="javascript:;">
                荣耀
            </a>
            <a href="javascript:;">
                呆小萌暖手宝
            </a>
            <!-- <a href="javascript:;">
                vivo NEX 双屏版
            </a>
            <a href="javascript:;">
                vivo NEX 双屏版
            </a> -->
        </div>
        
        <div class="paihan">
            <a href="https://m.9ji.com/product/hot/rank?from=sou">
                <div>
                    <p>手机热销排行榜</p>
                    <span>榜单</span>
                </div>
                <span class="paihan-right">></span>
            </a>
            <a href="https://m.9ji.com/event/2904.html?from=sou">
                <div>
                    <p>暖冬智能家居59元起</p>
                    <span>活动</span>
                </div>
                <span class="paihan-right" style="margin-left: 158px;">></span>
            </a>
        </div>
 
    </div>
</template>
<script>
export default {
    methods:{
        //返回上一页
        goback(){
            this.$router.go(-1);
        },
        //传参跳转搜索结果页
        goto(name){
            let obj = {name};
            var key = document.getElementById('searchkey');
            let searchkey = key.value;
            if(name === "Search"){
                if(searchkey){
                    searchkey
                }else{
                    searchkey = "iPhone XS Max";
                }
                obj.query = {keyword:searchkey};
                
            }
            // console.log(obj);
            this.$router.push(obj);
        }
    }
}
</script>
<style lang="scss" scoped>
    #SearchForm{
        background-color: #f5f5f5;
        position: relative;
        max-width: 17.066667rem;
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
        .top{
            width: 100%;
            background-color: rgba(250, 250, 250, 0.98);
            height: 1.173333rem;
            position: relative;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            display: flex;
            .fanhui{
                height: 1.173333rem;
                a{  
                    display: block;
                    height: 1.173333rem;
                    width: 1.173333rem;
                    color: rgb(51, 51, 51);
                    font-size: 30px;
                    line-height: 1.173333rem;
                    text-align: center;
                }
            }
            .sou{
                width: 7.653333rem;
                height: 1.173333rem;
                position: absolute;
                top: 0;
                bottom: 0;
                left: .96rem;
                right: 1.173333rem;
                form{
                    width: 100%;
                    height: .8rem;
                    display: block;
                    input{
                        width: 100%;
                        height: .8rem;
                        border: 1px solid #ccc;
                        border-radius: .426667rem;
                        margin-top: .186667rem;
                        margin-left: .16rem;
                        padding-left: .213333rem;
                        position: absolute;
                        left: 0;
                        right: 0;
                    }  
                }
            }
            .souright{
                height: 1.173333rem;
                a{
                    display: block;
                    width: 1.173333rem;
                    height: 1.173333rem;
                    text-align: center;
                    line-height: 1.173333rem;
                    list-style: none;
                    color: #333;
                    text-decoration: none;
                    font-size: .426667rem;
                    margin-left: 7.68rem;
                }
            }
        }
        .resou{
            padding: .4rem .266667rem 0;
            color: #000;
            font-weight: 600;
            font-size: .426667rem;
            background: #fff;
        }
        .hua{
            display: flex;
            height: 1.44rem;
            padding: .4rem .266667rem;
            overflow-y: hidden;
            background: #fff;
            a{
                display: inline-block;
                padding: 0 .266667rem;
                border-radius: .32rem;
                height: .64rem;
                line-height: .586667rem;
                font-size: .32rem;
                margin-right: .266667rem;
                border: 1px solid #ededed;
                background: #f5f5f5;
                color: #333;
                text-decoration: none;
                list-style: none;
                white-space: nowrap;
            } 
        }
        .paihan{
            padding: 0 .266667rem;
            margin: .266667rem 0;
            background: #fff;
            a{  
                text-decoration: none;
                outline: none;
                display: flex;
                height: 1.173333rem;
                border-bottom: .026667rem solid #dfdfdf;
                font-size:.373333rem;
                color:#333;
                div{
                    display: flex;
                    height: 16px;
                    color: #000;
                    font-weight: 600;
                    padding-right: .213333rem;
                    flex-wrap: nowrap;
                    margin-top: .32rem;
                    span{
                        padding: 0 .133333rem;
                        background: rgba(200,15,30,.1);
                        display: inline-block;
                        height: .426667rem;
                        line-height: .426667rem;
                        font-size: .32rem;
                        border-radius: .213333rem;
                        color: #f21c1c;
                        margin-left: .133333rem;
                        font-style: normal;
                        font-weight: 400;
                    }
                }
                .paihan-right{
                    margin-top:.266667rem;
                    margin-left:5.066667rem;
                    font-size:.533333rem;
                }
            }
        }
    }
</style>
