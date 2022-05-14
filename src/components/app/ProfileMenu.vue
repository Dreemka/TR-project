<template>
  <div class="item cursor-pointer" v-if="!actives">
    <DropDown :dropDownData="dropDownData"  />
  </div>

</template>

<script>

// import {mapGetters } from 'vuex'
import DropDown from "@/components/ui/DropDown";
export default {
  name: "ProfileMenu",
  components: {
    DropDown
  },
  self: this,
  computed: {
    allUsers: function() {
      return this.$store.getters.allUsers;
    },
    dropDownData: function() {
      return {
        mask: {
          iconAfter: 'transporter-profile',
          iconBefore: 'transporter-Dropdown',
          title: (this.profile.first_name) ? this.profile.first_name + ' ' + this.profile.last_name : null,
        },
        arrayData: [
          {
            icon: 'transporter-Settings_outline_tiny fz-20',
            title: this.$t('settings'),
            url: '/projectSetting',
          },
          {
            icon: 'transporter-Document_outline fz-20',
            title: this.$t('quit'),
            url: '/login?message=logout',
            method: 'logOut',
          },
        ],
    }
    }
  },
  props: {
    actives: {
      type: Boolean
    },
    profile: {
      type: Object
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/profile-menu.scss';
</style>