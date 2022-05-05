<template>
<aside class="no-active" v-bind:class="{ active: isActive }">
  <Logo />
  <div class="logo-wrapper">
    <i class="transporter-Burger-menu cursor-pointer" v-on:click="isActive = !isActive"></i>
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
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/sidebar.scss';
</style>