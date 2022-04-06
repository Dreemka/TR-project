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
      // console.log(999);
      // console.log(item)
      this.$root.$emit('itemData' , item)
    },
    // clickDropDown(active){
    //   let self = this;
    //   let listenerClick = function(e) {
    //     let el = document.querySelector('.dropDown-wrapper');
    //     if (el && !el.contains(e.target)) self.active = false;
    //     if (!self.active) document.removeEventListener('click', listenerClick , false)
    //   }
    //   if (active) {
    //     document.addEventListener('click', listenerClick , false);
    //   }
    // },
    // eventClick(item){
    //   let self = this;
    //   console.log(item)
    //   if (item.method) this.$store.dispatch(item.method)
    //   if (item.url) this.$router.push(item.url)
    //   console.log(self.active)
    //   self.active = false;
    // }
  }

}
</script>

<style lang="scss" >
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/drop-down-st.scss';
</style>