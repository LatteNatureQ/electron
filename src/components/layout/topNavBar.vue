<template>
    <div id="top__nav__bar">
        <div class="top__bar">
            <div class="search__bar">
                <div class="music__search__box">
                    <i style="opacity: 0.8;margin-right: 12px;font-size: 20px;color: #636363;" class="el-icon-arrow-left"></i>
                    <i style="margin-right:17px;opacity: 0.8;font-size: 20px;color: #636363;" class="el-icon-arrow-right"></i>
                    <div class="search_box">
                        <i  class="el-icon-search search__icon"></i>
                        <input class="search" type="search" placeholder="搜索音乐、MV、歌单、歌手、用户">
                    </div>
                    <img style="margin-left:17px;" src="../../assets/images/音乐图标.png" alt="">

                </div>
                <div class="user__window">
                    <img style="margin-bottom:5px" src="../../assets/images/衣服.png" alt="">
                    <img src="../../assets/images/菜单.png" alt="">
                    <img src="../../assets/images/全屏.png" alt="">
                    <img src="../../assets/images/缩小.png" alt="">
                    <img src="../../assets/images/放大.png" alt="">
                    <img src="../../assets/images/关闭.png" alt="">
                </div>
            </div>
            <div class="classify__menu">
                <span class="active">精选</span>
                <span>歌手</span>
                <span>排行</span>
                <span>电台</span>
                <span>分类菜单</span>
                <span>有声</span>
                <span>数字专辑</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "../../assets/styles/topNavBar.css";
</style>

