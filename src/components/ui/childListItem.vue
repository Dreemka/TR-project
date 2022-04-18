<template>
  <li>
    {{item.name}}
  </li>
</template>

<script>

  export default {
    name: "childListItem",
    props: {
      item: {
        type: [String,Number,Object,Array,Boolean]
      },
    },
    // components: {
    // },
    // mixins: [
    //   QueryMixin,
    // ],
    // data(){
    //   return {
    //     openFolder: false,
    //     componentKey: 0,
    //     response: [],
    //   }
    // },
    // props: {
    //   iconBefore: {
    //     type: String
    //   },
    //   iconAfter: {
    //     type: String
    //   },
    //   listStyleIcon: {
    //     type: String
    //   },
    //   item: {
    //     type: [String,Number,Object,Array,Boolean]
    //   },
    //   urlQuery: {
    //     type: String
    //   },
    //   paramsQuery: {
    //     type: [String,Number,Object,Array,Boolean]
    //   },
    //   idParent: {
    //     type: Number
    //   }
    // },
    // created(){
    //   if(this.urlQuery) {
    //     this.postData(this.urlQuery, this.paramsQuery)
    //     .then((data) => {
    //       console.log(data)
    //       this.$emit('itemQueryData' , this.idParent , data)
    //     });
    //   }
    // },
    // methods: {
    // }
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>