<template>
  <div class="t-rr-s-table-wrapper">
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">
          <Checkbox index="h1"  
                    v-model="checkAll"
                    @change="allchoiseFu(checkAll)"/>  
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
          <Checkbox :index="idx"  
                    v-model="item.check"
                    @change="choiseFu(item)"/>
        </th>
        <td>
          <i :class="[{'transporter-doc' : item.type === 'folder'}]"
             style="font-size: 24px"/>   
          {{item.name}}
        </td>
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
    }
  },
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    allchoiseFu(checkAll) {
      if(checkAll) this.data.map(one=>one.check = true)
      if(!checkAll) this.data.map(one=>one.check = false)
    },
    choiseFu(item) {
      let checkFu = this.data.filter(one=>one.check)
      if(!item.check) this.checkAll = !!checkFu.length
      if(item.check && checkFu.length === this.data.length) this.checkAll = true
      }
      
    
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