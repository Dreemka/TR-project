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
import SettingLayout from '@/layouts/SettingLayout'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  components: {
    EmptyLayout, MainLayout, SettingLayout
  },
}
</script>

<style lang="scss">
@import 'assets/transporter-icon/style.css';
@import 'assets/css/ui-library.scss';
</style>