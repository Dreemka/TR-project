<template>
  <div class="t-rr-s-header-wrapper">
    <div class="t-rr-s-header-authorize-bar">
      <Logo @click="goToLink"
            class="cursor-pointer"/>
        <div class="t-rr-s-profile-wrapper">
          <ProfileMenu 
            :profile="getProfile()"/>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/app/Logo';
import ProfileMenu from '@/components/app/ProfileMenu';

export default {
  components: {
    Logo, 
    ProfileMenu, 
  },
  methods: {
    goToLink() {
      if (this.$route.path !== "/list") this.$router.push({ name: 'list'})
    },
    getProfile() {
        let profile = JSON.parse(localStorage.getItem('profile'))
        return profile
    },
  },
}
</script>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';

@import 'src/assets/css/header.scss';
</style>