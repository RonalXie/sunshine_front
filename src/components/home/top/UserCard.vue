<template>
  <div class="box user">
    <div style="text-align: center;position: absolute;bottom: 14px;left: 0;right:0;margin:auto;">
        <a-avatar
            :src="userInfo.avater"
            alt=""
            :size="108"
        />
      <p class="m-0 p-0" style="font-weight: bold;font-size:large;">
        {{userInfo.nickname}}
      </p>
      <p class="has-text-grey m-0 p-0">{{userInfo.intro}}</p>
      <br>
      <div style="font-size: large">
        <span>文章: 18</span>
        <a-divider type="vertical"></a-divider>
        <span>分类: 18</span>
        <a-divider type="vertical"></a-divider>
        <span>标签: 18</span>
      </div>
    </div>

  </div>

</template>

<script>
import {searchUser} from "@/api/user";

export default {
  name: "UserCard",
  data(){
    return{
      userInfo:{}
    }
  },
  created() {
    searchUser().then(res=>{
      this.userInfo=res.data.record;
    })
  }
}
</script>

<style>
.user img:hover {
  transform: scale(1.1);
}
.user img{
  transition: all 800ms ease-in-out;
}

.user {
  background: url("https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s") no-repeat;
  background-size: 100% 55%;
  height: 380px;
  position: relative;
}

</style>
