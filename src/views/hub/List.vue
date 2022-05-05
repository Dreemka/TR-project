<template>
  <section class="t-rr-s-hub-list">
    <Table :data="listContent" />
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
      routerData: this.$route.params,
    }
  },
  props: ["folderId", "hubId" , "name"],
  methods: {
    ...mapActions(['ContentList']),
    query(item){
      this.ContentList({hub_id: item.hub_id , parent_folder_id: item.folder_id})
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
  },
  computed: mapGetters(['dataContentList']),
  mounted() {
    this.$root.$on('folderData' , (item) => {
      this.query(item)
    })
    this.$root.$on('folderItem', (item) => {
      this.query(item)
    })
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/hub-list.scss';
</style>