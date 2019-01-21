<template>
    <div id="Stores">
        <div class="stotop"><!-- 顶部框 -->
            <a href="javascript:;" @click="goback" class="fa fa-angle-left"></a>
            <div></div>
            <a href="javascript:;"></a>
            地图
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
    },
}
</script>
<style lang="scss">
    #Stores{
        flex:1;
        overflow-x: hidden;
        .stotop{
            height: 1.173333rem;
            background: #f21c1c;
            display: flex;
            // align-items: center;
            >a:nth-child(1){
                width: 1.173333rem;
                height: 1.173333rem;
                font-size: .8rem;
                color: #fff;
                text-align: center;
                line-height: 1.173333rem;
            }
        }
    }
</style>