<template>
    <div class="card" style="height: 100%">
      <a-tabs default-active-key="1" tab-position="left" size="large" style="height: 100%">
        <a-tab-pane key="1" tab="个人设置">
          <UserSetting/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="其他">
          Content of Tab Pane 1
        </a-tab-pane>
      </a-tabs>
    </div>
</template>

<script>
import UserSetting from "@/components/admin/user/UserSetting.vue";
export default {
    name: "UserView",
  components: {UserSetting}
}
</script>

<style scoped>

</style>
