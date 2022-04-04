<template>
  <div class="t-rr-s-sidebar-wrapper unselectable">
    <h5 class="first-uppercase">{{ $t('project_files') }}</h5>
    <nav>
      <ul class="t-rr-s-nav-list">
        <li v-for="(item, index) in query" :key="index">
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

export default {
  name: "Sidebar",
  components: {
    FooterNavbar
  },
  data(){
    return {
      isActive: false,
      query: [
        {
          "name": "01_Project Development"
        },
        {
          "name": "01_Project Development"
        },
        {
          "name": "01_Project Development"
        },
        {
          "name": "01_Project Development"
        }
      ],
    }
  },
  created(){    
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/sidebar.scss';
</style>