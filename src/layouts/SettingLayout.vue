<template>
  <section class="t-rr-s-main-layout">
    <Header />
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
import Header from '@/components/app/Header'
import Sidebar from '../components/app/Sidebar.vue'

export default {
  name: "MainLayout",
  components: { 
    Header , Sidebar
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/main.scss';
</style>