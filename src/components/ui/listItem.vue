<template>
  <li :key="componentKey">
    <i class="cursor-pointer"
       v-if="listStyleIcon"
       :class="[listStyleIcon , {'rotate--90' : !openFolder} , {'el-not-allowed' : !response}]" />
    <i :class="iconBefore"
       v-if="iconBefore"
       style="font-size: 24px"/>
    <slot></slot>
    <i :class="iconAfter"
       v-if="iconAfter"
       style="font-size: 24px"/>
  </li>
</template>

<script>
  import QueryMixin from '@/mixins/query-mixin';

  export default {
    name: "ListItem",
    components: {
    },
    mixins: [
      QueryMixin,
    ],
    data(){
      return {
        openFolder: false,
        response: null,
        componentKey: 0,
      }
    },
    props: {
      iconBefore: {
        type: String
      },
      iconAfter: {
        type: String
      },
      listStyleIcon: {
        type: String
      },
      item: {
        type: [String,Number,Object,Array,Boolean]
      },
      urlQuery: {
        type: String
      },
      paramsQuery: {
        type: [String,Number,Object,Array,Boolean]
      },
      idParent: {
        type: Number
      }
    },
    created(){
      this.postData(this.urlQuery, this.paramsQuery)
        .then((data) => {
          this.response = data.ok
          this.$emit('itemQueryData' , this.idParent , data)
          console.log(data);
        });
    },
    methods: {
    forceRerender() {
      this.componentKey += 1;  
    }
    },
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>