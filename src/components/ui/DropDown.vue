<template>
<div class="dropDown-wrapper">
  <div class="mask" @click="active = !active; clickDropDown(active);">
    <i class="mr-10 " v-if="dropDownData.mask.iconAfter" :class="[dropDownData.mask.iconAfter]" />
    <span>{{ dropDownData.mask.title }}</span>
    <i class="ml-10 " v-if="dropDownData.mask.iconBefore" :class="[dropDownData.mask.iconBefore]" />
  </div>
  <div class="dropDown-list" v-if="active">
  <ul >
    <li
        v-for="item in dropDownData.arrayData"
        :key="item.id"
        class="cursor-pointer"
        @click="eventClick(item)">
      <i class="mr-10 " :class="[item.icon]" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "DropDown",
  self: this,
  props: {
    dropDownData: {
      type: Object,
    },
  },
  data: () => ({
    active: false
  }),
  methods: {
    clickDropDown(active){
      let self = this;
      let listenerClick = function(e) {
        console.log(123);
        let el = document.querySelector('.dropDown-wrapper');
        if (el && !el.contains(e.target)) self.active = false;
        if (!self.active) document.removeEventListener('click', listenerClick , false)
      }
      if (active) {
        document.addEventListener('click', listenerClick , false);
      }
    },
    eventClick(item){
      let self = this;
      console.log(item)
      if (item.method) this.$store.dispatch(item.method)
      if (item.url) this.$router.push(item.url)
      console.log(self.active)
      self.active = false;
    }
  }

}
</script>

<style lang="scss" >
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/drop-down.scss';
</style>