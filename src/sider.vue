<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'GuluSider',
    
};
</script>

<style lang="scss" scoped>
.sider {
  background: #949698;
  width: 200px;
  min-height: 100px;

  
}
</style>