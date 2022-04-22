<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase">{{ $t('project_files') }}</h5>
    <!-- <Tree :treeData="tree"></Tree> -->
    <nav>
      <ul class="t-rr-s-nav-list">
        <ListItem v-for="(item, index) in listFolder" 
            :key="index"
            iconBefore="transporter-doc"
            listStyleIcon="transporter-Dropdown"
            :item="item"
            :idParent='index'
            v-init:myvar="queryСhildFolders(item)"
            @childAction="childActionFu">
          <div class="t-rr-s-nav-list-wrapper-content"
                :class="{'active': $route.params.name === item.name}"> 
            <i class="cursor-pointer transporter-Dropdown mr-2"
               @click="openChildFolder(item)"
               :class="[{'rotate--90' : !item.openFolder} , {'el-not-allowed' : !item.child_folders}]" />
            <img v-if="item.type === 'folder' && $route.params.name !== item.name" class="mr-1" src="@/assets/transporter-icon/Icon/folder.svg">
            <img v-if="item.type === 'folder' && $route.params.name === item.name" class="mr-1" src="@/assets/transporter-icon/Icon/folderLink.svg">
 
            <div @click="openContent(item)"
                 class="cursor-pointer t-rr-s-text-li">
              {{item.name}}
            </div>
          </div> 
        </ListItem>
      </ul>
    </nav>
    <div class="flex-column-between">
        <FooterNavbar :actives="isActive" />
    </div>
  </div>
</template>

<script>
import FooterNavbar from "@/components/app/FooterNavbar";
import {mapGetters , mapActions} from 'vuex'
import ListItem from '../ui/listItem.vue';
import QueryMixin from '@/mixins/query-mixin';
// import Tree from '../ui/Tree';


export default {
  name: "Sidebar",
  components: {
    FooterNavbar,
    ListItem,
  },
  mixins: [
    QueryMixin,
  ],
  data(){
    return {
      isActive: false,
      listFolder: [],
      active: 'home',
    }
  },
  created(){    
  },
  mounted() {
    let self = this
    this.$root.$on('itemData', function (item) {
      self.query(item)
    })
  },
  computed: {
    ...mapGetters(['dataFolderList']),
    ...mapGetters(['dataHubList']),
  },
  methods: {
    ...mapActions(['FolderList']),
    query(item){
      this.FolderList({parent_folder_id: item.top_folder_id, hub_id: this.dataHubList[0].hub_id})
          .then(() => {
            this.listFolder = this.dataFolderList
            this.openContent(this.dataFolderList[0])
          })
    },
    openContent(item) {
      this.$root.$emit('folderItem' , item)
      this.makeActive(item)
    },
    childActionFu(value) {
      this.openContent(value)
    },
    queryСhildFolders(item){
      if(!item.chaildValue) {
        this.postData('/api/v1/Folder.getFolderList', {
                      parent_folder_id: item.folder_id,
                      hub_id: item.hub_id
            })
        .then((data) => {
          item.chaildValue = data
          if(item.chaildValue.length) item.valueFlag = true
          this.$set(this.listFolder, this.listFolder.indexOf(item), item)
      });
      }
    },
    openChildFolder(item){
      console.log(item)
      item.openFolder = !item.openFolder

      if(!item.children){
        item.children = item.chaildValue
        this.$set(this.listFolder, this.listFolder.indexOf(item), item)
      } else {
        item.children = false
        this.$set(this.listFolder, this.listFolder.indexOf(item), item)
      }
    },
    makeActive(item){
      
      console.log(888)
      console.log(this.$route.params)
      if (this.$route.params.parentFolderId === item.parent_folder_id) item.activeMenu = true;
      console.log(item)
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>