<template>
  <div class="t-rr-s-header-wrapper">
    <!-- <div class="t-rr-s-header-authorize-bar">
      <Logo @click="goToLink"
            class="cursor-pointer"/>
        <div class="t-rr-s-profile-wrapper">
          <ProfileMenu 
            :profile="getProfile()"/>
        </div>
    </div> -->
    <Header />
    <div class="t-rr-s-header-function-bar">
      <div class="t-rr-s-header-function-bar-filter">
        <DropDownSt
          :title="$t('download')"
          :dropDownData="dataProjectList"
          :mask="$t('to_choise')"
          iconAfter="transporter-cloud_outline"
          :disabled="false"
          class="mr-20"
          @item-data="getProject" />
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
import Header from '@/components/app/Header';
import Input from "@/components/ui/Input";
import UiButton from '@/components/ui/Button';
import DropDownSt from '@/components/ui/DropDownSt';
import {mapGetters , mapActions} from 'vuex';
import QueryMixin from '@/mixins/query-mixin'

export default {
  name: "Sidebar",
  components: {
    Input, 
    UiButton, 
    DropDownSt,
    Header,
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
    download() {
      const foldersArr = this.datalistContentDownload.filter(one => one.type === "folder")
      .map(one=>one.folder_id)
      const itemsArr = this.datalistContentDownload.filter(one => one.type === "item")
      .map(one=>{
        const complect = `${one.item_id}?version=${one.version}`
        return complect
      })
      this.postData('/api/v1/Item.getArchive', {
        hub_id: this.datalistContentDownload[0].hub_id,
        versions: itemsArr,
        folders: foldersArr,
      })
      .then((data) => {
        window.location.href = data.location;
      });
  
    },
    forceRerender() {
      this.componentKey += 1;  
    },
    getProject(value) {
      this.$root.$emit('itemData' , value)
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
@import 'src/assets/css/header.scss';
</style>