<template>

  <nav class="no-active unselectable" v-bind:class="{ active: isActive }">
    <div class="logo-wrapper">
      <Logo />
      <i class="contrust-Burger-menu cursor-pointer"  v-on:click="isActive = !isActive"></i>
    </div>
    <div class="flex-column-between nav-main-block">
      <mainMenu />
      <FooterNavbar :actives="isActive" />
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/app/Logo'
import mainMenu from "@/components/app/mainMenu";
import FooterNavbar from "@/components/app/FooterNavbar";

export default {
  name: "Navbar",
  components: {
    Logo, mainMenu , FooterNavbar
  },
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/nav.scss';
</style>