<template>
  <div id="pageHome">
    <div @click="test">测试点击关闭窗口</div>
  </div>
</template>
<script>
const { remote } = require("electron");
export default {
  data() {
    return {};
  },
  methods: {
    test() {
      const { Menu, MenuItem } = remote;
      const menu = new Menu();
      menu.append(
        new MenuItem({
          label: "MenuItem1",
          click() {
            console.log("item 1 clicked");
          }
        })
      );
      menu.append(new MenuItem({ type: "separator" }));
      menu.append(
        new MenuItem({ label: "MenuItem2", type: "checkbox", checked: true })
      );

      window.addEventListener(
        "contextmenu",
        e => {
          e.preventDefault();
          menu.popup({ window: remote.getCurrentWindow() });
        },
        false
      );
      console.log(213);
    }
  }
};
</script>