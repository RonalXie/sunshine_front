<template>
  <div>
    <a-row>
      <a-col :xs="8" :xxl="4">
        <img src="https://bulma.io/images/bulma-logo.png" height="35" alt=""
             >
      </a-col>
      <a-col :xs="10" :xxl="16">
      </a-col>
      <a-col :xs="6" :xxl="4" style="text-align: right">
        <a-button type="link" icon="global" size="large" @click="()=>{this.$router.push('/')}"/>
        &nbsp;
          <a-dropdown :trigger="['contextmenu']">
            <a-avatar src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top" size="large"></a-avatar>
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
      current: ['mail'],
    };
  },
};
</script>
<style>
.ant-menu-horizontal{
  border: none;
}
</style>
