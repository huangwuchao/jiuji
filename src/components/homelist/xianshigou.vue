<template>
    <div id="xianshigou">
        <!-- 轮播图 -->
        <div class="xsgbanner">
            <div class="bannercontent"></div>
        </div>

        <!-- 抢购日期表 -->
        <div class="xsgdata"></div>
    </div>
</template>
<script>
export default {
    
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
        .xsgdata{
            height: 1.546667rem;
        }
    }
</style>