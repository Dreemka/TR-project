<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase" style="margin-left: 5px;">{{ $t('project_files') }}</h5>
    <nav class="t-rr-s-nav-list">
      <ul>
        <li v-for="(item , index) in listFolder" :key="index">
          <ul>
          <Tree :item="item"
                listStyleIcon="transporter-Dropdown"/>
          </ul>
        </li>
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
import QueryMixin from '@/mixins/query-mixin';
import Tree from '../ui/Tree.vue';



export default {
  name: "Sidebar",
  components: {
    FooterNavbar,
    // ListItem,
    Tree,
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
            this.listFolder.children = this.dataFolderList
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
    makeActive(item){
      if (this.$route.params.folderId === item.parent_folder_id) item.activeMenu = true;
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/sidebar.scss';
</style>