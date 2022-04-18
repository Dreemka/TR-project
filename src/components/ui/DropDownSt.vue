<template>
<div class="t-rr-s-drop-down-st-wrapper">
  <div class="input-group">
      <select class="custom-select"
              id="inputGroupSelect01"
              @change="action(valueItem)"
              v-model="valueItem">
        <option selected>{{mask}}</option>
        <option v-for="(item , $index) in dropDownData" 
                :key="$index" 
                :value="item"
                >
                <div>
                  {{item.name}}
                </div>
        </option>
      </select>
  </div>
</div>
</template>

<script>
export default {
  name: "DropDownSt",
  self: this,
  props: {
    dropDownData: {
      type: [Object, Array]
    },
    mask: {
      type: String
    }
  },
  data: () => ({
    active: false,
    valueItem: null,
  }),
  mounted() {
    this.valueItem = this.mask
  },
  methods: {
    action(item){
      this.$root.$emit('itemData' , item)
    },
  }

}
</script>

<style lang="scss" >
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/drop-down-st.scss';
</style>