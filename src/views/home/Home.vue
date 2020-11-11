<template>
  <div>
    <nav-bar class="home-nav">
      <slot slot="center">购物街</slot>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
import HomeSwiper from "./childComps/HomeSwiper"

import { getHomeMultidata } from "network/home"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  async created() {
    let res = await getHomeMultidata()
    this.banners = res.data.banner.list
    this.recommends = res.data.recommend.list
  },
  components: {
    NavBar,
    HomeSwiper
  }
}
</script>

<style scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>