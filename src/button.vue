<!--html文件-->
<template>
    <button class="g-button" v-if="iconPosition === 'right'">
        <slot></slot>
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#i-${icon}`"></use>  <!--v-bind可以省略-->
            <!--实际效果如下-->
            <!--<use xlink:href="#i-settings"></use>-->
        </svg>
    </button>
    <button class="g-button" v-else>    <!--v-else的取值是！iconPosition（iconPosition不存在）或iconPosition === left-->
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>
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
        padding: 0 1em;
        background: var(--button-background);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);

        &:hover {
            border: 1px solid var(--boeder-color-hover);
        }

        &:active {
            background: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }
    }

</style>