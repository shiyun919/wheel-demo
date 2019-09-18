<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'GuluLayout',
    data(){
        return {
            layoutClass: {
                hasSider: false,
            }
        }
    },
    created(){
        console.log(this.$children)
        //这时实例的子组件还是空的，因为created钩子指的实例被创建，还未（挂载）渲染页面
    },
    mounted(){
        console.log(this.$children)
        //这时可以打出子组件，因为mounted钩子指的实例已挂载（渲染）完毕
        this.$children.forEach((vm)=>{
             console.log(vm.$options.name)
             if(vm.$options.name === 'GuluSider'){
                 this.layoutClass.hasSider = true
             }
        })
    }

};
</script>


<style lang="scss" scoped>
.layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: #fff;
    &.hasSider {
        flex-direction: row;
    }
}
</style>