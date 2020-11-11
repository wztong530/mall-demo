<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="~assets/img/tabBar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/category-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item-icon" src="~assets/img/tabBar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/cart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabBar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabBar/TabBar"
import TabBarItem from "../../common/tabBar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>