<template>
  <li>
    <!-- <i class="cursor-pointer"
       v-if="listStyleIcon"
       :class="[listStyleIcon , {'rotate--90' : !openFolder} , {'el-not-allowed' : !response.chaildValue.length}]" /> -->
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
        componentKey: 0,
        response: [],
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
      if(this.urlQuery) {
        this.postData(this.urlQuery, this.paramsQuery)
        .then((data) => {
          console.log(data)
          this.$emit('itemQueryData' , this.idParent , data)
        });
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>