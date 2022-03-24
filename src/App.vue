<template>
  <div id="app">

    <component :is="layout">
      <router-view  />
    </component>

  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import QAQCLayout from '@/layouts/QAQCLayout'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  components: {
    EmptyLayout, MainLayout, QAQCLayout
  },
}
</script>

<style lang="scss">
//@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/css/variables.scss';
@import 'assets/contrust-icon/style.css';
@import 'assets/css/ui-library.scss';

</style>
