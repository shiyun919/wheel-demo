<template>
    <div class="tabs-nav">
        <slot></slot>
		<div class="button">
			<slot name="actions"></slot>
		</div>
        
    </div>
</template>

<script>
export default {
    name: 'GuluTabsNav',
    inject: ['eventBus'],
    created(){
        //console.log('爷爷给爸爸的eventBus')
        //console.log(this.eventBus)
    }
}
</script>

<style lang="scss" scoped>
    .tabs-nav {
        display: flex;
		> .button {
			margin-left: auto;
		}
    }
</style>