<template>
  <button class="el-btn-standart" 
          :class="{'el-btn-standart-disabled' : disabled}"
          @click="$emit('click')">
    <i v-if="iconBefore" class="ui-i-before" :class="[iconBefore]"/>
    <span  class="text-in-button" >
      {{title}}
    </span>
    <i v-if="iconAfter" class="ui-i-after" :class="[iconAfter]"/>
    <!-- <img v-if="item.type === 'folder'" class="mr-2" :src="iconAfter"> -->
  </button>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
    },
    iconBefore: {
      type: String,
    },
    iconAfter: {
      type: String,
    },
    disabled: {
      type: [String , Object , Boolean , Array , Number],
    },
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