<template>
    <div class="tabs-item"  @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    props: {    //需要父组件将值传给你，就用props
        disabled: {
        type: Boolean,
        default: false
        },
        name: {
            type: String | Number,  //[String, Number] 
            required: true
        }
    },
	data(){   //不需要传值，就用data，自身维护
		return {
			active: false
		}
	},
    created(){
       // console.log('爷爷给孙子的eventBus')
        //console.log(this.eventBus)
        this.eventBus.$on('update:selected', (name)=>{
            console.log(name)
			if(name === this.name){
				console.log('我${this.name}被选中')
			}else{
				console.log('我${this.name}没被选中')
			}
				
        })
    },
    
methods: {
        xxx(){
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs-item {
        padding: 8px 12px;
		border: 1px solid #c9c9c9;
		margin: 0px 0px 0px 2px;
		&:first-child {
			margin-left: 0px;
		}
    }
</style>