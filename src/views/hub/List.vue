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
  props: ["parentFolderId", "hubId" , "name"],
  methods: {
    ...mapActions(['ContentList']),
    query(item){
      this.ContentList({hub_id: item.hub_id , parent_folder_id: item.folder_id})
        .then(() => {
          // console.log(item.hub_id)
          // console.log(item.parent_folder_id)
          // console.log(this.$route.params)

          this.$router.push({ name: 'folder', params: { parentFolderId: item.parent_folder_id, hubId: item.hub_id, name: item.name} })
          .catch(() => {})

          // localStorage.setItem('params', item.parent_folder_id)
          // console.log(item.name)
          this.listContent = this.dataContentList
          // this.$root.$emit('folderItem' , item)

          // console.log(this.listContent)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  computed: mapGetters(['dataContentList']),
  mounted() {
    console.log(this.parentFolderId)
    console.log(this.hubId)
    console.log(this.name)

    this.$root.$on('folderData' , (item) => {
      console.log(item)
      this.query(item)
    })

    // this.ContentList({hub_id: this.$route.params.hub_id , parent_folder_id: this.$route.params.folder_id})
    //     .then(() => {
    //       // this.$router.push({ name: 'folder', params: { parent_folder_id: item.parent_folder_id, hub_id: item.hub_id, name: item.local_path.replace(/ /ig, '_') } })
    //       // console.log(item.name)
    //       this.listContent = this.dataContentList
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    let self = this
    this.$root.$on('folderItem', function (item) {
      console.log(888)
      self.query(item)
    })
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/hub-list.scss';
</style>