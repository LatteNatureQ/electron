<template>
    <div id="botton__nav__bar">
        <div class="audio__box">
            <div id="aplayer"></div>
        </div>
    </div>
</template>
<script>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    new APlayer({
      container: document.getElementById("aplayer"),
      //   autoplay: true,
      audio: [
        {
          name: "一千个晚安",
          artist: "方洞镔",
          url: require("../../assets/audio/测试音频.mp3"),
          cover: require("../../assets/images/一千个晚安.png")
        }
      ]
    });
  }
};
</script>
<style scoped>
@import "../../assets/styles/bottomNavBar.css";
</style>
