<template>
    <div class="wrapper" v-bind:class={error}>
        <!-- <div class="wrapper" v-bind:class="{error: error}"> 如果父组件存在error，子组件就有一个class为erro的类 -->
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
        v-on:change="$emit('change', $event)"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        >
        <!-- <input type="text" v-bind:value="value" v-bind:disabled="disabled" v-bind:readonly="readonly"> 等价于上面的写法 -->
        <template v-if="error">
            <g-icon name="gantanhao" class="icon-error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './icon'
    export default {
        components: {
            'g-icon': Icon,
        },
       name:'',
       props: {
           value: {
               type: String,
           },
           disabled: {
               type: Boolean,
               default: false
           },
           readonly: {
               type: Boolean,
               default: false
           },
           error: {
               type: String
           }
           
       }

    }
</script>

<style lang="scss" scoped>
   $font-size: 14px;
   $width: 150px;
   $height: 32px;
   $border-color: #999;
   $border-color-hover: #666;
   $border-radius: 4px;
   $transition: all 0.2s;
   $box-shadow-color: rgba(0,0,0,0.2);
   $red: #F1453D;
   .wrapper {
       font-size: $font-size;
       display: inline-flex;
       align-items: center;
       margin-right: 10px;
       &:last-child {
           margin-right: 0px;
       }
       > * {
           margin-right: 0.5em;
       }
       > :last-child {
           margin-right: 0;
       }
       > input {
           font-size: $font-size;
           width: $width;
           padding: 8px 8px;
           border: 1px solid $border-color;
           border-radius: $border-radius;
           transition: $transition;
           &:hover {
               border-color: $border-color-hover;
           }
           &:focus {
               box-shadow: 0px 1px 2px $box-shadow-color inset; 
               outline: none;
           }
           &[disabled] {
               border-color: #ccc;
               color: #ccc;
               cursor: not-allowed;
           }
           &[readonly] {
               border-color: #aaa;
               color: #aaa;
           }
       }
       &.error {
           >  input {
               border: 1px solid $red;
               &:focus {
               box-shadow: 0px 1px 2px rgba(255, 0, 0, 0.2) inset; 
               }
           }
       }
       .icon-error {
           fill: $red;
           width: 15px;
           height: 15px;
       }
       .errorMessage {
           color: $red;
           font-size: 12px;

       }
           
       
   }
</style>