<template>
    <svg class="g-icon" aria-hidden="true">
        <use v-bind:xlink:href="`#i-${name}`"></use>  <!--v-bind可以省略-->
        <!--实际效果如下-->
        <!--<use xlink:href="#i-settings"></use>-->
    </svg>
</template>

<script>
    export default {
        props: {
            name: ''
        }
        // ['name']
    }
</script>

<style lang="scss">
    .g-icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>