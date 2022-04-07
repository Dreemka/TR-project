<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase">{{ $t('project_files') }}</h5>
    <nav>
      <ul class="t-rr-s-nav-list">
        <li v-for="(item, index) in listFolder" 
            :key="index"
            class="cursor-pointer"
            @click="openContent(item)">
          <i class="transporter-doc" 
             style="font-size: 24px"/>
          {{item.name}}
        </li>
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

export default {
  name: "Sidebar",
  components: {
    FooterNavbar
  },
  data(){
    return {
      isActive: false,
      listFolder: [],
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
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>