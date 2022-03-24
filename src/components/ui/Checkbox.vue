<template>
  <div class="" label="Выбрать:" ng-yes="Да" ng-no="Нет" >
    <div class="check_wrap">
      <span class="label-checkbox-dr">
        {{title}}:
        {{(model) ? 'Да' : 'Нет'}}
      </span>
<!--      <span ng-if="!ngModel &amp;&amp; ngNo" class="label-checkbox-dr ng-binding ng-scope">-->
<!--        Нет-->
<!--      </span>-->
      <input class="ui-checkbox-dr" type="checkbox" id="145" @click="$emit('new-model' , model)" v-model="model" style="display:none">
      <label for="145" class="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z">

          </path>
          <polyline points="1 9 7 14 15 4">

          </polyline>
        </svg>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "Checkbox",
  props: {
      title : {
        type : String,
      },
      value : {
        type : Boolean,
      }
    },
  methods: {
  },
  data() {
    return {
      model : (this.value) ? true : false,
    }
  },
}
</script>
<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/checkbox.scss';
</style>