<template>
    <div id="pageHome">
        <div @mousedown="handleBeginScroll($event)" @mousemove="handleContinueScroll" class="scroll__bar ">

        </div>
        <div id="wrapper" style="height: 305px;">
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
                                    <img :src="require(`../assets/images/封面${index+1}.jpg`)" alt="">
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
    </div>
</template>
<script>
import "../assets/js/iscroll.min.js";
export default {
  data() {
    return {
      beginSite: ""
    };
  },
  beforeCreate() {
    // document.querySelector("body").style.paddingBottom = "66px";
  },
  created() {},
  methods: {
    //滚动条
    handleBeginScroll(e) {
      this.beginSite = e.offsetY;
      console.log(e.offsetY);
      //   e.target.style.top = e.offsetY + 'px';
      // console.log(e);
    },
    handleContinueScroll() {
      //   console.log(1);
    }
  },
  mounted() {
    var wrapper = document.getElementById("wrapper");
    var myScroll = new IScroll(wrapper, {
      scrollbars: true,
    });
  }
};
</script>
<style scoped>
@import "../assets/styles/pagehome.css";
</style>
