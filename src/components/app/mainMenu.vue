<template>
  <div class="main-menu">
    <ul class="wrapper">
      <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          class="item cursor-pointer"
          :to="link.url"
      >
        <i class="mr-10" :class="[link.icon]"></i><span>{{ link.title }}</span>
        <ul v-if="Object.keys($route.params).length" class="child-el-menu">
          <li>
            {{$route.params.Id}}
          </li>
        </ul>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainMenu",
  data: () => ({
    links: [
      {
        title: 'Home',
        url: '/home',
        icon: 'contrust-home_outline'
      },
      {
        title: 'About',
        url: '/about',
        icon: 'contrust-info_outline'
      },
      {
        title: 'Login',
        url: '/login',
        icon: 'contrust-users'
      },
      {
        title: 'Acceptance',
        url: '/acceptance',
        icon: 'contrust-D'
      },
      {
        title: 'Sectors',
        url: '/sectors',
        icon: 'contrust-D'
      },
    ]
  }),
  mounted() {
    console.log(this.$route.params);
  },
  watch: {
    $route : function(){
      console.log(this.$route.params);
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/main-menu.scss';
</style>