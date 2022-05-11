<template>
<div class="input-wrapper">
    <!-- <div class="select-label">Проектное название объекта</div> -->
    <input :type="type"
           name="name"
           id="name"
           required
           :value="value"
           @input="dataValue">
         
    <!-- <span class="spin"></span> -->
    
    <label for="name"><i v-if="icon" class="ui-i search" :class="[icon]"/>{{mask}}</label>
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
  },
  type: {
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

@import 'src/assets/css/input.scss';
</style>