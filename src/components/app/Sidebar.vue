<template>
<aside class="no-active" v-bind:class="{ active: isActive }">
  <Logo />
  <div class="logo-wrapper">
    <i class="contrust-Burger-menu cursor-pointer" v-on:click="convertNav(); isActive = !isActive"></i>
  </div>
  <mainMenu />
</aside>
</template>

<script>
import Logo from '@/components/app/Logo'
import mainMenu from "@/components/app/mainMenu";
export default {
  name: "Sidebar",
  components: {
    Logo, mainMenu
  },
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    convertNav() {

      console.log('click')
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>