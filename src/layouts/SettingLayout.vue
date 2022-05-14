<template>
  <section class="t-rr-s-main-layout">
    <Header />
    <div class="t-rr-s-main-wrapper">
      <SidebarSettings />
      <main class="app-content">
        <div class="app-page">
          <router-view />
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import Header from '@/components/app/Header'
import SidebarSettings from '../views/settings/SidebarSettings.vue'

export default {
  name: "MainLayout",
  components: { 
    Header, 
    SidebarSettings
  }
}
</script>

<style lang="scss">

@import 'src/assets/css/main.scss';
</style>