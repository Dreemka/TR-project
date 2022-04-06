<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase">{{ $t('project_files') }}</h5>
    <nav>
      <ul class="t-rr-s-nav-list">
        <li v-for="(item, index) in listHub" :key="index">
          <!-- <i class="contrust-Forward" style="font-size: 24px"/> -->
          <i class="contrust-doc" style="font-size: 24px"/>
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
      listHub: [],
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
    let requestData = {
      hub_id : null
    }
    this.HubList(requestData)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },
  computed: mapGetters(['dataHubList']),
  methods: {
    ...mapActions(['HubList']),
    query(item){
      this.HubList({hub_id: item.hub_id})
      this.listHub = this.dataHubList
    }
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>