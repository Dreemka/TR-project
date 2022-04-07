<template>
  <div class="t-rr-s-table-wrapper">
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">
          <Checkbox index="h1"  v-model="checkAll"/>  
        </th>
        <th scope="col">
          <div>
            {{$t('file_name')}}
            <i class="transporter-menu_outline"></i>
          </div>
        </th>
        <th scope="col">
          <div>
            {{$t('version')}}
            <i class="transporter-menu_outline"></i>
          </div>
        </th>
        <th scope="col">
          <div>
            {{$t('size')}}
            <i class="transporter-menu_outline"></i>
          </div>
        </th>
        <th scope="col">
          <div>
            {{$t('date_of_change')}}
            <i class="transporter-menu_outline"></i>
          </div>
        </th>
        <th scope="col">
          <div>
            {{$t('who_changed')}}
            <i class="transporter-menu_outline"></i>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , idx) in data"
          :key="idx"
          :class="{'t-rr-s-choise-item-active' : item.check}">
        <th scope="row">
          <Checkbox :index="idx"  v-model="item.check"/>
        </th>
        <td>{{item.name}}</td>
        <td>{{item.version}}</td>
        <td>{{item.size}}</td>
        <td>{{item.modified_time | date('date')}}</td>
        <td><i class="mr-10  transporter-profile"></i>{{item.modified_user_name}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Checkbox from '@/components/ui/Checkbox'
export default {
name: "Table",
components: {
  Checkbox,
},
data() {
  return {
    checkAll: false,
    lovingVue: false,
    tableTest: [
      {
        nameFile: 'A01',
        version: 'V1',
        size: '23,k KB',
        date: '22 марта 2022',
        author: 'Овчинников Александр' 
      },
            {
        nameFile: 'A01',
        version: 'V1',
        size: '23,k KB',
        date: '22 марта 2022',
        author: 'Овчинников Александр' 
      },
            {
        nameFile: 'A01',
        version: 'V1',
        size: '23,k KB',
        date: '22 марта 2022',
        author: 'Овчинников Александр' 
      }
    ]
  }
},
props: {
  data: {
    type: Array
  }
},
methods: {
  // eventCheck(value) {
  //   console.log(value);
  //   // console.log(item)
  //   // item.check = value
  // }
},
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/hub-table.scss';
</style>