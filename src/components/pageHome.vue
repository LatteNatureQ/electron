<template>
    <div id="pageHome">
        <div class="main__box">
            <div class="slideshow">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item style="width: 50%"  v-for="(item,index) in 8" :key="index">
                        <img style="width:100%;height: 100%;object-fit: cover;" :src="require(`../assets/images/轮播图${index+1}.jpg`)" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
@import "../assets/styles/pagehome.css";
</style>
