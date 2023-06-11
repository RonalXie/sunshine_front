<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="17">
        <carousel-card/>
      </a-col>
<!--      <a-col :span="6">-->
<!--        <div style="height: 350px;display: flex;flex-direction: column;justify-content: space-between">-->
<!--          <div class="box p-0" style="height: 165px;background-size: cover ;background-image: url('http://cosy.halo.nicetheme.xyz/upload/tommy-bond-YrrIC3N3wvU-unsplash.jpg'">-->
<!--          </div>-->
<!--          <div class="box p-0" style="height: 165px;background-size: cover ;background-image: url('http://cosy.halo.nicetheme.xyz/upload/kawe-rodrigues-z5k8HD82g9c-unsplash.jpg'">-->
<!--          </div>-->
<!--        </div>-->
<!--      </a-col>-->
      <a-col :span="7">
        <user-card/>
      </a-col>
    </a-row>
<!--    -->
    <br>
    <tab-card/>
  </div>
</template>

<script>
import CarouselCard from "@/components/home/top/CarouselCard.vue";
import UserCard from "@/components/home/top/UserCard.vue";
import TabCard from "@/components/home/top/TabCard.vue";

export default {
  name: "TopContent",
  components: {TabCard, UserCard, CarouselCard}
}
</script>

<style scoped>

</style>
