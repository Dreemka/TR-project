<template>
  <div class="el-check_wrap">
    <!-- <input class="el-checkbox" type="checkbox" :id="index" @click="checkEvent()" v-model="model" style="display:none"> -->
    <input class="el-checkbox" type="checkbox" :id="index" v-on:change="$emit('change', $event.target.checked)" v-bind:checked="checked" style="display:none">
    <label :for="index" class="el-check">
      <svg width="18px" height="18px" viewBox="0 0 18 18">
        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z">
        </path>
        <polyline points="1 9 7 14 15 4">
        </polyline>
      </svg>
    </label>
  </div>
</template>

<script>

export default {
  name: "Checkbox",
  // props: {
  //     title: {
  //       type : String,
  //     },
  //     value: {
  //       type : Boolean,
  //     },
  //     index: {
  //       type: [String , Number]
  //     }
  //   },
  // methods: {
  //   checkEvent() {
  //     console.log(this.model);
  //     this.$emit('newModel' , this.model)
  //   }
  // },
  // data() {
  //   return {
  //     model : (this.value) ? true : false,
  //   }
  // },
  model: {
    prop: 'checked',
    event: 'change',
    index: {
        type: [String , Number]
    }
  },
  props: {
    checked: Boolean,
    index: {
        type: [String , Number]
    },
  },
}
</script>
<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/checkbox.scss';
</style>