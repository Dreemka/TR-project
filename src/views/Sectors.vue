<template>
  <section class="sectors unselectable">
    <div class="title-wrapper">
      <h2 class="list-h">Сектора </h2>
      <UiButton :title="title"></UiButton>
    </div>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">НАзвание</th>
        <th scope="col">Проект</th>
        <th scope="col">Дата создания</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , idx) in dataSectors"
          :key="idx">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.references.project.name}}</td>
        <td>{{item.date_create | date('date')}}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import UiButton from '@/components/ui/Button'
import {mapGetters , mapActions} from 'vuex'
export default {
  name: "Sector",
  data() {
    return {
      title : 'Добавить',
      data : null,
      getListData : [],
      errors : []
    }
  },
  mounted() {
    let requestData = {
      references : ["project"]
    }
    this.Sectors(requestData)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },
  computed: mapGetters(['dataSectors']),
  methods: mapActions(['Sectors']),
  components: {
    UiButton ,
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/sectors.scss';
</style>