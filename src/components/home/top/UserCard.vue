<template>
  <div class="box user">
    <div style="text-align: center;position: absolute;bottom: 14px;left: 0;right:0;margin:auto;">
        <a-avatar
            src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"
            alt=""
            :size="108"
        />
      <p class="m-0 p-0" style="font-weight: bold;font-size:large;">
        RonalXie
      </p>
      <p class="has-text-grey m-0 p-0">Life is fantastic</p>
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
export default {
  name: "UserCard"
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
  background: url("https://pandapro.halo.nicetheme.xyz/upload/img00051.jpg") no-repeat;
  background-size: 100% 55%;
  height: 350px;
  position: relative;
}

</style>
