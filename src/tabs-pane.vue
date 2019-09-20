<template>
    <div class="tabs-pane" :class="className" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            required: true
        }
    },
    data(){
        return {
            active: false
        }
    },
    computed: {
        className(){
            return {
                active: this.active
            }
        }
    },
    created(){
        //console.log('爷爷给pane的eventBus')
        //console.log(this.eventBus)
         this.eventBus.$on('update:selected', (name)=>{
            //console.log(name)
			if(name === this.name){
                //console.log(`pane ${this.name}被选中`)
                this.active = true
			}else{
                //console.log(`我pane${this.name}没被选中`)
                this.active = false
			}
        })
    },
    
}
</script>

<style lang="scss" scoped>
    .tabs-pane {
		width: 100%;
		height: 200px;
		border: 1px solid #c9c9c9;
		margin-top: -1px;
        &.active {
            background: #ddd;
        }
    }
</style>