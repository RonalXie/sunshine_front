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
        <a-button type="link" icon="search" size="large"/>
        &nbsp;
        <a-dropdown :trigger="['contextmenu']">
          <a-avatar
              src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"
              size="large"></a-avatar>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="/login">登录</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
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
</style>
