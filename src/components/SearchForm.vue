<template>
    <div id="SearchForm">
        <div class="top">
            <p class="fanhui">
                <a href="javascript:;"><</a> 
            </p>
            <div class="sou">
                <form action="">
                    <input type="text" name="" id="" placeholder="iPhone XS Max">
                </form>
            </div>
            <div class="souright">
                <a href="">搜索</a>
            </div>
        </div>
        <div class="resou">热搜</div>
    
        <div class="hua">
            <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
            <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
             <a href="javascript:;">
                vivo NEX 双屏版
            </a>
        </div>
        
        <div class="paihan">
            <a href="javascript:;">
                <div>
                    <p>手机热销排行榜</p>
                    <span>榜单</span>
                </div>
                <span class="paihan-right">></span>
            </a>
            <a href="javascript:;">
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
    
}
</script>
<style lang="scss" scoped>
    #SearchForm{
        background-color: #f5f5f5;
        position: relative;
        max-width: 640px;
            .top{
                width: 100%;
                background-color: rgba(250, 250, 250, 0.98);
                height: 44px;
                position: relative;
                background-repeat: no-repeat;
                background-position: top;
                background-size: cover;
                display: flex;
                    .fanhui{
                        height: 44px;
                            a{  
                                display: block;
                                height: 44px;
                                min-width: 44px;
                                box-sizing: border-box;
                                list-style: none;
                                color: rgb(51, 51, 51);
                                padding-left: 15px;
                                font-size: 30px;
                                line-height: 44px;

                            }
                    }
                    .sou{
                        width: 287px;
                        height: 44px;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 44px;
                        right: 44px;
                        
                            form{
                                width: 100%;
                                height: 30px;
                                display: block;
                                    input{
                                        width: 100%;
                                        height: 30px;
                                        border: 1px solid #ccc;
                                        border-radius: 16px;
                                        margin-top:7px;
                                        margin-left:5px;
                                        position: absolute;
                                        left: 0px;
                                        right: 0px;

                                    }  
                            }
                    }
                    .souright{
                            height: 44px;
                                a{
                                    display: block;
                                    width: 44px;
                                    height: 44px;
                                    text-align: center;
                                    line-height: 44px;
                                    list-style: none;
                                    color: #333;
                                    text-decoration: none;
                                    font-size:16px;
                                    margin-left:288px;
                                }
                    }
            }
            .resou{
                padding: 15px 10px 0;
                color: #000;
                font-weight: 600;
                font-size:16px;
                background: #fff;
            }
            .hua{
                display: flex;
                height: 54px;
                padding: 15px 10px;
                overflow-y: hidden;
                background: #fff;
                    a{
                        display: inline-block;
                        padding: 0 10px;
                        border-radius: 12px;
                        height: 24px;
                        line-height: 22px;
                        font-size: 12px;
                        margin-right: 10px;
                        border: 1px solid #ededed;
                        background: #f5f5f5;
                        color: #333;
                        text-decoration: none;
                        list-style: none;
                        white-space: nowrap;
                    } 
            }
            .paihan{
                padding: 0 10px;
                margin: 10px 0;
                background: #fff;
                    a{  
                        text-decoration: none;
                        outline: none;
                        display: flex;
                        height: 44px;
                        border-bottom: 1px solid #dfdfdf;
                        font-size:14px;
                        color:#333;
                        //font-weight: 600;
                            div{
                                display: flex;
                                height: 16px;
                                color: #000;
                                font-weight: 600;
                                padding-right: 8px;
                                flex-wrap: nowrap;
                                margin-top:12px;
                                    span{
                                        padding: 0 5px;
                                        background: rgba(200,15,30,.1);
                                        display: inline-block;
                                        height: 16px;
                                        line-height: 16px;
                                        font-size: 12px;
                                        border-radius: 8px;
                                        color: #f21c1c;
                                        margin-left: 5px;
                                        font-style: normal;
                                        font-weight: 400;
                                    }
                            }
                            .paihan-right{
                                margin-top:10px;
                                margin-left:190px;
                                font-size:20px;
                            }

                    }
            }
    }
</style>
