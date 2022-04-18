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
  self: this,
  computed: {
    allUsers: function() {
      return this.$store.getters.allUsers;
    },
    dropDownData: function() {
      return {
        mask: {
          iconAfter: 'transporter-profile',
          iconBefore: 'transporter-menu_outline',
          title: (this.allUsers) ? this.allUsers.first_name : null,
        },
        arrayData: [
          {
            icon: 'transporter-Book_filled',
            title: 'Профиль',
            url: '/user',
          },
          {
            icon: 'transporter-logout',
            title: 'Выйти',
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
    }
  },
  created(){
  },
  mounted() {
    // this.$store.dispatch('mountedUserMe')
  },
  components: {
    DropDown
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/profile-menu.scss';
</style>