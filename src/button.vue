<!--html文件-->
<template>
    <button class="g-button">按钮</button>
</template>



<!--js文件-->
<script>
    export default{}
</script>




<!--css文件-->
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0px 1em;
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