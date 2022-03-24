<template>
<div class="input-wrapper">

    <input type="text"
           name="name"
           id="name"
           required
           :value="value"
           @input="dataValue">
    <span class="spin"></span>
    
    <label for="name"><i v-if="icon" class="ui-i search" :class="[icon]"/> {{mask}}</label>
</div>
</template>

<script>
export default {
name: "Input",
props: {
  mask: {
    type: String
  },
  value: {
    type: [String, Number]
  },
  icon : {
    type : String,
  }
},
methods: {
  dataValue(e) {
    this.$emit("input", e.target.value);
  }
},
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/input.scss';
</style>