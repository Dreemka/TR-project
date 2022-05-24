<template>
  <div class="t-rr-s-sidebar-setting-wrapper unselectable">
    <div class="t-rr-s-sidebar-setting-wrapper-title">
      <h5 class="first-uppercase">{{ $t('Settings.Title') }}</h5>
    </div>
    <nav class="t-rr-s-nav-list">
      <ul class="t-rr-s-menu-wrap">
        <li v-for="(item , index) in listMenuFu" :key="index" 
            class="t-rr-s-menu-list"
            :class="{'active' : item.route === $route.path}">
          <router-link :to="item.route">
            <!-- <i class="mr-10 transporter-Settings_outline_tiny" /> -->
            <img class="mr-2 item-icon" :src="item.icon">
            
            {{item.name}}
            </router-link>
        </li>
      </ul>
    </nav>
    <div class="flex-column-between">
      <nav class="t-rr-s-nav-list">
        <ul class="t-rr-s-menu-wrap">
          <li v-for="(item , index) in listMenuFooterFu" :key="index" 
              class="t-rr-s-menu-list"
              :class="{'active' : item.route === $route.path}">
            <router-link :to="item.route">
              <!-- <i class="mr-10 transporter-Settings_outline_tiny" /> -->
              <img class="mr-2 item-icon" :src="item.icon">
              
              {{item.name}}
              </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// import FooterNavbar from "@/components/app/FooterNavbar";
// import {mapGetters , mapActions} from 'vuex'
// import QueryMixin from '@/mixins/query-mixin';



export default {
  components: {
    // FooterNavbar,
  },
  computed: {
    listMenuFu() {
      return [
        {
          name: this.$t('Settings.Project'),
          route: "/projectSetting",
          icon: require("@/assets/transporter-icon/Icon/Settings.svg")
        },
        {
          name: this.$t('Settings.Users'),
          route: "/userSetting",
          icon: require("@/assets/transporter-icon/Icon/ProfileSettings.svg")
        },
        {
          name: this.$t('Settings.TelegramAlert'),
          route: "/telegramAlertSetting",
          icon: require("@/assets/transporter-icon/Icon/Notifications.svg")
        },
        {
          name: this.$t('Settings.ForgeAPI'),
          route: "/forgeAPISetting",
          icon: require("@/assets/transporter-icon/Icon/ForgeApi.svg")
        }
      ]
    },
    listMenuFooterFu() {
      return [
        {
          name: this.$t('Settings.Support'),
          route: "",
          icon: require("@/assets/transporter-icon/Icon/Support.svg")
        },
        {
          name: this.$t('Settings.FAQ'),
          route: "",
          icon: require("@/assets/transporter-icon/Icon/FAQ.svg")
        },
      ]
    }
  }
  
}
</script>

<style lang="scss">

@import 'src/assets/css/sidebar-settings.scss';
</style>