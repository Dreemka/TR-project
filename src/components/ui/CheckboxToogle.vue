<template>
  <div class="el-checkbox-toogle-wrap">

    <input class="input-ch ng-pristine ng-untouched ng-valid ng-empty" 
           type="checkbox" 
           :id="index" 
           v-model="checkeds" 
           style="display:none">
    <label :for="index" 
            class="toggle disabled">
            <span></span>
    </label>
  </div>
</template>

<script>

export default {
  name: "Checkbox",
  data(){
    return {
      checkeds: this.checked
    }
  },
  model: {
    prop: 'checked',
    event: 'change',
    index: {
        type: [String , Number]
    }
  },
  watch: {
    'checkeds': {
      handler() {
        this.changeToogle()
      }
    }
  },
  computed: {
    changeChecked(){
      return this.checked
    }
  },
  methods: {
    changeToogle() {
      this.$emit('change', this.checkeds)
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

@import 'src/assets/css/checkbox-toogle.scss';
</style>