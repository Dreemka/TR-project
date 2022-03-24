<template>
  <button class="btn-sec" :class="[type]">
    <i v-if="icon" class="ui-i mr-2" :class="[icon]"/>
    <span  class="text-in-button f-size-08" >
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
    },
    type : {
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
@import 'src/assets/css/btn-sec.scss';
</style>