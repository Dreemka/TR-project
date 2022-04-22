<template>
  <div class="el-table-wrapper">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Название файла</th>
        <th scope="col">Версия</th>
        <th scope="col">Размер</th>
        <th scope="col">Дата изменения</th>
        <th scope="col">Кто изменил</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , idx) in dataSectors"
          :key="idx">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.references.project.name}}</td>
        <td>{{item.date_create | date('date')}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
name: "Table",
props: {},
methods: {
},
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/table.scss';
</style>