<template>
  <button class="btn-first">
    <i v-if="icon" class="ui-i" :class="[icon]"/>
    <span  class="text-in-button" >
{{title}}
</span>
  </button>
</template>

<script>

export default {
  props: {
    title : {
      type : String,
    },
    icon : {
      type : String,
    }
  },
  methods: {
    // todo(id){
    //   this.$emit('remove-todo' , id)
    //   console.log(this)
    // }
  },

}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/button.scss';
</style>