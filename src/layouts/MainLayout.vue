<template>
  <section class="main-layout">
    <Navbar />
    <Sidebar />
    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </section>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: "MainLayout",
  components: {
  Navbar, Sidebar
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/main.scss';
</style>