<template>
  <section class="empty-layout">
    <router-view />
  </section>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    // error(baseError) {
    //   console.log(baseError.response.data)
    // }
  },
  mounted() {
    console.log(333)
  }
}
</script>


<style lang="scss">

</style>