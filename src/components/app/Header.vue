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
          :disabled="!checkFu.length"
          class="mr-20"
          @click="download()"
          :key="componentKey" />
        <UiButton 
          :title="$t('upload')"
          iconAfter="false"
          :disabled="true" />  
      </div>
      <div class="t-rr-s-header-function-bar-search">
        <Input 
              :mask="$t('search')" 
              icon='transporter-Search_tiny'
              v-model="filterData"
              style="padding: 5px;" />
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
import {mapGetters , mapActions} from 'vuex';
import QueryMixin from '@/mixins/query-mixin'





export default {
  name: "Sidebar",
  components: {
    Logo, 
    Input, 
    UiButton, 
    ProfileMenu, 
    DropDownSt
  },
  mixins: [
    QueryMixin,
  ],
  data(){
    return {
      isActive: false,
      data: null,
      filterData: '',
      checkFu: [],
      componentKey: 0,
    }
  },
  mounted() {
    this.HubList({})
        .then(() => {
          this.getProjectList(this.dataHubList)
        })
        .catch(err => {
          console.log(err)
        })
    this.$root.$on('checkFu', (checkFu) => {
       this.checkFu = checkFu
       this.forceRerender()
    })    
  },
  computed: {
    ...mapGetters(['dataProjectList']),
    ...mapGetters(['dataHubList']),
    ...mapGetters(['dataContentList']),
    ...mapGetters(['datalistContentDownload']),
    ...mapGetters(['dataprofile']),
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
      .then(() => {
        console.log(this.dataProjectList)
        // this.getContentList(hubdata , this.dataProjectList)
      })
      .catch(err => {
        console.log(err)
      })
    },
    goToLink() {
      if (this.$route.path !== "/list") this.$router.push({ name: 'list'})
    },
    download() {
      const foldersArr = this.datalistContentDownload.filter(one => one.type === "folder")
      .map(one=>one.folder_id)
      const itemsArr = this.datalistContentDownload.filter(one => one.type === "item")
      .map(one=>{
        const complect = `${one.item_id}?version=${one.version}`
        return complect
      })

      console.log(itemsArr)
      console.log(foldersArr)
      console.log(this.datalistContentDownload[0])
        this.postData('/api/v1/Item.getArchive', {
          hub_id: this.datalistContentDownload[0].hub_id,
          versions: itemsArr,
          folders: foldersArr,
        })
        .then((data) => {
          window.location.href = data.location;
        });
  
    },
    getProfile() {
        let profile = JSON.parse(localStorage.getItem('profile'))
        return profile
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  watch: {
  '$route.params.id': {
    immediate: true,
    handler() {
    },
  },
  'filterData': {
    handler() {
      this.$root.$emit('filterData' , this.filterData)
    }
  }
},
}
</script>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/header.scss';
</style>