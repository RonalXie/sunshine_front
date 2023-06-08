<template>
  <div style="height: 100%;overflow: hidden" class="box p-0">
    <div style="padding: 16px;text-align: center">
      <img src="https://bulma.io/images/bulma-logo.png" alt="" height="36px">
    </div>
    <a-menu mode="inline" :default-selected-keys="['/dashboard']" @click="menuClick" :default-open-keys="['manageArticle','manageUser']" style="border: none">
      <a-menu-item key="/dashboard">
        <a-icon type="dashboard"/>
        <span>DashBoard</span>
      </a-menu-item>
      <a-sub-menu key="manageArticle">
        <span slot="title"><a-icon type="book"/><span>内容管理</span></span>
        <a-menu-item key="/manage/article">
          文章管理
        </a-menu-item>
        <a-menu-item key="/manage/category">
          分类管理
        </a-menu-item>
        <a-menu-item key="/manage/tag">
          标签管理
        </a-menu-item>
        <a-menu-item key="/manage/attachment">
          附件管理
        </a-menu-item>
        <a-menu-item key="2">
          评论管理
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="manageUser">
        <span slot="title"><a-icon type="setting"/><span>系统设置</span></span>
        <a-menu-item key="/setting/user">
          个人中心
        </a-menu-item>
        <a-menu-item key="/plugin/center">
          插件
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    menuClick({item, key, keyPath}) {
      // 获取到当前的key,并且跳转
      console.log(item, keyPath)
      if (this.$route.path === key) {
        //当前路径中不包括本path就执行
        return;
      }
      this.$router.push({
        path: key
      })
    },
  }
}
</script>

<style scoped>

</style>
