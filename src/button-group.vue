<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$el.children)
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if(name !== 'button'){  //节点的节点名称小写方式
                    console.warn(`g-button-group的子元素应该全是g-button，但你写的是${name}`)
                    //g-button-group的子元素应该全是g-button，但你写的是div
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        > .g-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
                margin-left: 0px;
            }
            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>