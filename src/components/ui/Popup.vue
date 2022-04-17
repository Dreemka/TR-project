<template>
  <div class="t-rr-s-popup-wrapper">
    <div class="t-rr-s-popup-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/popup.scss';
</style>