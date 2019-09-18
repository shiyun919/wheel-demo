<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  background: #ced0d2;
  
  min-height: 100px;
  flex-grow: 1;
}
</style>