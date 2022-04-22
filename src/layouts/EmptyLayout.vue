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
}
</script>


<style lang="scss">

</style>