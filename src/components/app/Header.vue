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
          iconAfter="transporter-cloud_outline"
          :disabled="false"
          class="mr-20" />
      </div>
      <div class="t-rr-s-download-upload-wrapper">
        <UiButton 
          :title="$t('download')"
          iconAfter="transporter-cloud_outline"
          :disabled="false"
          class="mr-20" />

        <UiButton 
          :title="$t('upload')"
          iconAfter="transporter-cloud_outline"
          :disabled="false" />  
      </div>
      <div class="t-rr-s-header-function-bar-search">
        <Input 
              :mask="$t('search')" 
              icon='transporter-Search_tiny' />
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
    this.HubList({})
        .then(response => {
          console.log(this.dataHubList)
          console.log(response)
          this.getProjectList(this.dataHubList)
        })
        .catch(err => {
          console.log(err)
        })


    
  },
  computed: {
    ...mapGetters(['dataProjectList']),
    ...mapGetters(['dataHubList']),
    ...mapGetters(['dataContentList']),
  },
  methods: {
    ...mapActions(['ProjectList']),
    ...mapActions(['HubList']),
    ...mapActions(['ContentList']),
    getProjectList(hubdata) {
      let requestData = {
        hub_id : (hubdata) ? hubdata[0].hub_id : null
      }
      this.ProjectList(requestData)
      .then(response => {
        console.log(this.dataProjectList)
        console.log(response)
        // this.getContentList(hubdata , this.dataProjectList)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getContentList(hubdata , projectdata) {
      console.log(projectdata)
      let requestData = {
        hub_id: (hubdata) ? hubdata[0].hub_id : null,
        parent_folder_id: (projectdata) ? projectdata[0].top_folder_id : null
      }
      this.ContentList(requestData)
      .then(response => {
        console.log(this.dataContentList)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }

  }
}
</script>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/header.scss';
</style>