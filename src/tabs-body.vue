<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsBody',
    inject: ['eventBus'],
    created(){
       // console.log('爷爷给body的eventBus')
        //console.log(this.eventBus)
    }
}
</script>

<style lang="scss" scoped>
    .tabs-body {
        
    }
</style>