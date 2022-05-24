<template>
  <section class="t-rr-s-hub-list">
    <Table :data="listContent"
           :folderData="folderData"
           @getpreviousfolder = "getpreviousfolder"/>
  </section>
</template>

<script>
import Table from './Table'
import {mapGetters , mapActions} from 'vuex'

export default {
  name: "HubList",
  components: {
    Table,
  },
  data() {
    return {
      listContent: [],
      folderData: {},
      routerData: this.$route.params,
    }
  },
  props: ["folderId", "hubId" , "name"],
  methods: {
    ...mapActions(['ContentList']),
    query(item , flag){
      console.log(item)
      let data = {
        hub_id: item.hub_id, 
        parent_folder_id: item.folder_id
        }
      if (flag) data.parent_folder_id = item.parent_folder_id
      this.ContentList(data)
        .then(() => {
          this.$router.push({ name: 'folder', params: { folderId: item.folder_id, hubId: item.hub_id} })
          .catch(() => {})
          this.listContent = this.dataContentList
          this.listContent.map(one=>one.parentsFolders = item)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getpreviousfolder(data) {
      console.log(data)
      this.query(data , true)
    }
  },
  computed: mapGetters(['dataContentList']),
  mounted() {
    this.$root.$on('folderData' , (item) => {
      this.folderData = item
      this.query(item)
    })
    this.$root.$on('folderItem', (item) => {
      this.folderData = item
      this.query(item)
    })
  },
}
</script>

<style lang="scss">

@import 'src/assets/css/hub-list.scss';
</style>