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
        width: 22px;
        height: 22px;
        vertical-align: -0.15em;
        fill: #797979;
        overflow: hidden;
    }

</style>