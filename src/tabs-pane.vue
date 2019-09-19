<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsPane',
    inject: ['eventBus'],
    created(){
        //console.log('爷爷给pane的eventBus')
        //console.log(this.eventBus)
         this.eventBus.$on('update:selected', (name)=>{
            console.log(name)
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs-pane {

    }
</style>