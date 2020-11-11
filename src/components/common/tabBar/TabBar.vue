<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f3f3f3;
  box-shadow: 0 -1px 2px 1px rgba(88, 88, 88, .11);
}

</style>