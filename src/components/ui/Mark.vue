<template>
  <mark :style="[styleChoise]" class="f-size-08">
    <i v-if="icon" class="ui-i" :class="[icon]"/>
      {{title}}
  </mark>
</template>

<script>

export default {
  name: 'Mark',  
  props: {
    title : {
      type : String,
    },
    icon : {
      type : String,
    },
    styleChoise: {
      type : Object,
    }
  },
}
</script>

<style lang="scss">

@import 'src/assets/css/mark.scss';
</style>