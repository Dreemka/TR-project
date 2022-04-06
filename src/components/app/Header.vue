<template>
  <div class="t-rr-s-header-wrapper">
    <div class="t-rr-s-header-authorize-bar">
      <Logo />
        <div class="t-rr-s-profile-wrapper">
          <ProfileMenu />
        </div>
    </div>
    <div class="t-rr-s-header-function-bar">
      <div class="t-rr-s-header-function-bar-filter">
        <DropDownSt
          :title="$t('download')"
          :dropDownData="dataProjectList"
          :mask="$t('to_choise')"
          iconAfter="contrust-cloud_outline"
          :disabled="false"
          class="mr-20" />
      </div>
      <div class="t-rr-s-download-upload-wrapper">
        <UiButton 
          :title="$t('download')"
          iconAfter="contrust-cloud_outline"
          :disabled="false"
          class="mr-20" />

        <UiButton 
          :title="$t('upload')"
          iconAfter="contrust-cloud_outline"
          :disabled="false" />  
      </div>
      <div class="t-rr-s-header-function-bar-search">
        <Input 
              :mask="$t('search')" 
              icon='contrust-Search_tiny' />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/app/Logo';
import Input from "@/components/ui/Input";
import UiButton from '@/components/ui/Button';
import DropDownSt from '@/components/ui/DropDownSt';
import ProfileMenu from '@/components/app/ProfileMenu';
import {mapGetters , mapActions} from 'vuex'




export default {
  name: "Sidebar",
  components: {
    Logo, Input, UiButton, ProfileMenu, DropDownSt
  },
  data(){
    return {
      isActive: false,
      data: null,
    }
  },
  mounted() {
    let requestData = {
      hub_id : "b.b1fafd72-d654-4925-80aa-8667b7c3bd10"
    }
    this.ProjectList(requestData)
    .then(response => {
      console.log(this.dataProjectList)
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },
  computed: mapGetters(['dataProjectList']),
  methods: mapActions(['ProjectList']),
}
</script>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/header.scss';
</style>