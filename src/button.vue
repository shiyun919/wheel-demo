<!--html文件-->
<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" v-on:click="$emit('click')">
    <!--<button class="g-button" :class="{'icon-left': true}">--><!--icon在左边-->
    <!--<button class="g-button" :class="{'icon-right': true}">-->
    <!--<button class="g-button" :class="{'icon-undefined': true}">-->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot> <!--slot不能添加class 所以只能添加div 给div添加class-->
        </div>

    </button>
</template>


<!--js文件-->
<script>
    import Icon from './icon'
    export default {
        components: {
            'g-icon': Icon
        },
        //第一种写法：
        //props: ['icon', 'iconPosition']  //iconPosition 的值为left或right

        //第二种写法
        props: {
            icon: '',
             loading: {
                type: Boolean,   //值得类型
                default: false
            },
            iconPosition: {
                type: String,   //值得类型
                default: 'left',  //默认值
                validator(value) {  //可写成validator: function(value) {}
                    //console.log(value)  // value的值就是用户传给iconPosition的值
                    //return !(value !== 'left' && value !== 'right');   //下面if-else四行的简化版
                    if (value !== 'left' && value !== 'right'){  // && 而且， ||或
                        return false
                    }else {
                        return true
                    }
                }
            }

        }
    }
</script>


<!--css文件-->
<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        color: var(--color);
        padding: 0 12px;
        background: var(--button-background);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align:top;
        &:hover { //&指的是.g-button
            border: 1px solid var(--boeder-color-hover);
        }
        &:active {
            background: var(--button-active-background);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: 1px;
        }
        > .content {
            order: 2;
            margin-top: -1px;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin: 0 0 0 1px;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1.3s infinite linear;  //infinite无限的  linear线性的
        }
        //&.icon-right .icon {
        //    order: 2;
        //}
        //&.icon-right .content {
        //    order: 1;
        //}

    }

</style>