<template>
  <section class="t-rr-s-hub-list">
    <Table :data="listContent">
    </Table>
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
    }
  },
  methods: {
    ...mapActions(['ContentList']),
    query(item){
      console.log(333)
      this.ContentList({hub_id: item.hub_id , parent_folder_id: item.folder_id})
        .then(response => {
          console.log(this.dataContentList)
          console.log(response)
          this.listContent = this.dataContentList

        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  computed: mapGetters(['dataContentList']),
  mounted() {
    let self = this
    this.$root.$on('folderItem', function (item) {
      console.log(item)
      self.query(item)
    })
    // let requestData = {
    //   hub_id : null
    // }
    // this.ContentList(requestData)
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/hub-list.scss';
</style>