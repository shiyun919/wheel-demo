<!--html文件-->
<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <!--<button class="g-button" :class="{'icon-left': true}">--><!--icon在左边-->
    <!--<button class="g-button" :class="{'icon-right': true}">-->
    <!--<button class="g-button" :class="{'icon-undefined': true}">-->
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#i-${icon}`"></use>  <!--v-bind可以省略-->
            <!--实际效果如下-->
            <!--<use xlink:href="#i-settings"></use>-->
        </svg>
        <div class="content">
            <slot></slot> <!--slot不能添加class 所以只能添加div 给div添加class-->
        </div>

    </button>
</template>


<!--js文件-->
<script>
    export default {
        props: ['icon', 'iconPosition']  //iconPosition 的值为left或right
    }
</script>


<!--css文件-->
<style lang="scss">
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
        vertical-align: top;
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
            margin-right: 0.25em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin: 0 0 0 0.25em;
            }
            > .content {
                order: 1;
            }
        }
        //&.icon-right .icon {
        //    order: 2;
        //}
        //&.icon-right .content {
        //    order: 1;
        //}

    }

</style>