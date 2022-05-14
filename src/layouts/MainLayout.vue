<template>
  <section class="t-rr-s-main-layout">
    <MainHeader />
    <div class="t-rr-s-main-wrapper">
      <Sidebar />
      <main class="app-content">
        <div class="app-page">
          <router-view />
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import MainHeader from '@/components/app/MainHeader'
import Sidebar from '../components/app/Sidebar.vue'

export default {
  name: "MainLayout",
  components: { 
    MainHeader , Sidebar
  }
}
</script>

<style lang="scss">

@import 'src/assets/css/main.scss';
</style>