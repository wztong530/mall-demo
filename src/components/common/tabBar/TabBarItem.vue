<template>
  <div class="tab-bar-item" @click="tabChange">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.link)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabChange() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 28px;
  height: 28px;
  vertical-align: middle;
  margin-bottom: -2px;
}
</style>