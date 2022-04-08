<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase">{{ $t('project_files') }}</h5>
    <nav>
      <ul class="t-rr-s-nav-list">
        <ListItem v-for="(item, index) in listFolder" 
            :key="index"
            iconBefore="transporter-doc"
            listStyleIcon="transporter-Dropdown"
            :item="item"
            urlQuery="/api/v1/Folder.getFolderList"
            :idParent='index'
            :paramsQuery="{
                      parent_folder_id: item.folder_id,
                      hub_id: item.hub_id
            }"
            @itemQueryData="itemQueryDataFu">
          <div @click="openContent(item)" 
               class="cursor-pointer t-rr-s-text-li">
               {{item.chaildValue}}
            {{item.name}}
          </div>
        </ListItem>
      </ul>
    </nav>
    <div class="flex-column-between nav-main-block">
        <FooterNavbar :actives="isActive" />
    </div>
  </div>
</template>

<script>
import FooterNavbar from "@/components/app/FooterNavbar";
import {mapGetters , mapActions} from 'vuex'
import ListItem from '../ui/listItem.vue';

export default {
  name: "Sidebar",
  components: {
    FooterNavbar,
    ListItem
  },
  data(){
    return {
      isActive: false,
      listFolder: [],
      openFolder: false,
    }
  },
  created(){    
  },
  mounted() {
    let self = this
    this.$root.$on('itemData', function (item) {
      console.log(item)
      self.query(item)
    })
    // let requestData = {
    //   Folder_id : null
    // }
    // this.FolderList(requestData)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },
  computed: {
    ...mapGetters(['dataFolderList']),
    ...mapGetters(['dataHubList']),
  },
  methods: {
    ...mapActions(['FolderList']),
    query(item){
      this.FolderList({parent_folder_id: item.top_folder_id, hub_id: this.dataHubList[0].hub_id})
          .then(response => {
            console.log(response)
            this.listFolder = this.dataFolderList
            this.openContent(this.dataFolderList[0])
          })
    },
    openContent(item) {
      console.log(999)
      console.log(item)
      this.$root.$emit('folderItem' , item)
    },
    itemQueryDataFu(index , value) {
      // item.itemQueryData = value
      console.log(value)
      console.log(this.listFolder[index])
      this.listFolder[index].chaildValue = value
      this.$forceUpdate();
    },
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>