<template>
  <div class="footer-nav">
    <div class="wrapper">
      <ProfileMenu :actives="actives"/>
      <div class="copyright" v-if="!actives">
        <span>2021&#169; ГК"ЭТАЛОН"
          <br />
        Все права защищены</span>

        <a href="">Противодействие мошейничеству корупции и хищениям</a>
      </div>
    </div>
<!--    <ul class="wrapper">-->
<!--      <router-link-->
<!--          v-for="link in links"-->
<!--          :key="link.url"-->
<!--          tag="li"-->
<!--          class="item cursor-pointer"-->
<!--          :to="link.url"-->
<!--      >-->
<!--        <i class="mr-10" :class="[link.icon]"></i><span>{{ link.title }}</span>-->
<!--      </router-link>-->
<!--    </ul>-->
  </div>
</template>

<script>
import ProfileMenu from '@/components/app/ProfileMenu'
export default {
  name: "FooterNavbar",
  props: {
    actives : {
      type: Boolean,
    }
  },
  components: {
    ProfileMenu
  },
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/footer-navbar.scss';
</style>