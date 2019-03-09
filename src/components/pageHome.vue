<template>
    <div id="pageHome">
        <div class="scroll__bar ">

        </div>
        <div class="main__box">
            <div class="slideshow">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item style="width: 50%" v-for="(item,index) in 8" :key="index">
                        <img style="width:100%;height: 100%;object-fit: cover;" :src="require(`../assets/images/轮播图${index+1}.jpg`)" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="recommend__playlist">
                <div class="recommend__box">
                    <div class="header__more">
                        <span style="font-size:18px">为你推荐歌单</span>
                        <span style="font-size:13px">更多</span>
                    </div>
                    <div class="list">
                        <div class="base">KTV热歌</div>
                        <div class="base">安静</div>
                        <div class="base">网络歌曲</div>
                        <div class="base">官方歌单</div>
                        <div class="base">情歌</div>
                        <div class="base">经典</div>
                        <div class="base">背景音乐</div>
                        <div class="base">全部分类</div>
                    </div>
                    <div class="picture__list">
                        <div v-for="(item,index) in 10" :key="index" class="cover__one">
                            <div class="top">
                                <img src="../assets/images/封面2.jpg" alt="">
                            </div>
                            <div class="bottom">
                                <p class="info">绵请女声 | 关于温柔的一百种模样</p>
                                <p>腾讯音乐人</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import "../assets/styles/pagehome.css";
</style>
