<template>
  <div>
    <a-row>
      <a-col :xs="8" :xl="4" :xxl="4">
        <img src="https://bulma.io/images/bulma-logo.png" height="35" alt=""
        >
      </a-col>
      <a-col :xs="10" :xl="16" :xxl="16">
        <a-menu v-model="current" mode="horizontal" :style="{ lineHeight: '64px'}">
          <a-menu-item key="home">
            <router-link to="/"><span><a-icon type="home"></a-icon>Home</span></router-link>
          </a-menu-item>
          <a-menu-item key="picture">
            <router-link to="/"><span><a-icon type="picture"></a-icon>&nbsp;图库</span></router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :xs="6" :xl="4" :xxl="4" style="text-align: right">
        <a-space>
          <a-icon type="search" :style="{fontSize:'18px'}" />
          <a-icon type="github" :style="{fontSize:'18px'}" />
          <router-link to="/login"><a-icon type="user" :style="{fontSize:'18px'}"></a-icon></router-link>

        </a-space>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['home'],
    };
  },
};
</script>
<style>
.ant-menu-horizontal {
  border: none;
}
.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
  border: none;
}
.ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu{
  border: none;
}
</style>
