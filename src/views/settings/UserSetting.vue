<template>
<section class="t-rr-s-user-setting-wrapper">
  <div class="t-rr-s-user-setting-header">
    <div class="t-rr-s-user-setting-header-title">
      <h5>{{$t('Settings.userText.Users')}}</h5>
    </div>
    <div class="t-rr-s-user-setting-header-setting">
        <DropDownSt
          :title="$t('download')"
          :dropDownData="dataProjectSettingList"
          :mask="$t('to_choise')"
          iconAfter="transporter-cloud_outline"
          :disabled="false"
          class="fz-14"
          @item-data="getProject" />
        <UIinput 
          :mask="$t('search')"
          icon='transporter-Search_tiny'
          v-model="filterData"
          class="fz-14"/>
        <UiButton 
          :title="$t('Settings.projectText.UpdateProjectList')"
          :disabled="false"
          class="fz-14"
          @click="reloadListProject()" />
    </div>
  </div>
  <div class="t-rr-s-user-setting-body">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">
          {{$t('Settings.userText.UserName')}}
          <label for="fileName"
                 class="t-rr-s-for-arrow">
            <i class="transporter-menu_outline" />
          </label>
           <input name="fileName"
                  id="fileName" 
                  type="checkbox" 
                  v-model="fileName"
                  class="el-display-none"
                  @change="sortList('file_name')">
        </th>
        <th scope="col">
          {{$t('Settings.userText.UserEmail')}}
        </th>
        <th scope="col">
          {{$t('Settings.userText.UserAllowance')}}
        </th>
        <!-- <th scope="col">
          {{$t('Settings.projectText.Progress')}}
        </th> -->
      </tr>
      </thead>
      <tbody>
        <tr v-for="( item , idx ) in dataFilter" :key="idx">
          <td>
            {{item.name}}
            <!-- {{item.first_name}} -->
          </td>
          <td>
            {{item.email}}
          </td>
          <!-- <td>
            {{item.updated_at | date('date')}}
          </td> -->
          <td>
            <UiButton 
              :title="$t('Send')"
              :disabled="false"
              class="fz-14"
              @click="sendAllow(item)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</template>
<script>
import UiButton from '@/components/ui/Button'
import UIinput from '@/components/ui/Input'
import DropDownSt from '@/components/ui/DropDownSt';
import {mapGetters , mapActions} from 'vuex';
import QueryMixin from '@/mixins/query-mixin'
// import Toogle from '@/components/ui/CheckboxToogle'

// import UiMark from '@/components/ui/Mark'
// import UiTabs from '@/components/ui/Tabs'
// import {HTTP} from "@/http-common";

export default {
  components: {
    UiButton,
    UIinput,
    DropDownSt,
    // Toogle
  },
  data() {
    return {
      filterData: '',
      listProject: [],
      dataFilter: [],
      fileName: false,      
    }
  },
  mixins: [
    QueryMixin,
  ],
  computed: {
    // ...mapGetters(['dataProjectList']),
    ...mapGetters(['dataProjectSettingList']),
    ...mapGetters(['dataHubList']),
  },
  mounted(){
    this.HubList({})
        .then(() => {
          this.getProjectSettingList(this.dataHubList)
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods: {
    // ...mapActions(['ProjectList']),
    ...mapActions(['ProjectSettingList']),
    ...mapActions(['HubList']),

    getProjectSettingList(hubdata) {
      let requestData = {
        hub_id : (hubdata) ? hubdata[0].hub_id : null
      }
      this.ProjectSettingList(requestData)
      .then(() => {
        console.log(this.dataProjectSettingList)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getProject(value) {
      console.log(value)
      this.postData('/api/v1/Settings.userList', {
        hub_id : (this.dataHubList) ? this.dataHubList[0].hub_id : null,
        project_id: value.project_id
      })
      .then((data) => {
        console.log(data)
        data = data.map(one => {
          one.name = one.first_name + ' ' + one.last_name
          return one
        })
        this.listProject = data
        this.dataFilter = this.listProject
      });
    },
    disabledProject(value) {
      this.postData('/api/v1/Settings.projectDisabled', {
        hub_id: value.hub_id,
        project_id: value.project_id,
        disabled: value.disabled
      })
      .then((data) => {
        console.log(data)
      });
    },
    reloadListProject() {
      this.getProject()
    },
    sendAllow(item) {
      console.log(item)
      this.postData('/api/v1/Settings.userRestore', {
        hub_id : (this.dataHubList) ? this.dataHubList[0].hub_id : null,
        user_id: item.id,
      })
      .then((data) => {
        console.log(data)
      });
    },
    sortList(column) {
      switch (column) {
        case "file_name":
          if(this.fileName) this.dataFilter.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          })
          if(!this.fileName) this.dataFilter.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
          break;    
        default:
          break;
      }
    },
    // choiseFu(item) {
    //   console.log(item)
    //   if (item.check === true) item.disabled = 1
    //   if (item.check === false) item.disabled = 0
    //   this.disabledProject(item)
    // }
  },
  watch: {
  'filterData': {
    handler() {
      setTimeout(() => {
        if (this.listProject.length) {
          this.dataFilter = this.listProject.filter(one => {
              return one.name.toLowerCase().includes(this.filterData.toLowerCase());
          });
        } 
        }, 1000)
    }
  }
},
}
</script>
<style lang="scss">

@import 'src/assets/css/users-settings.scss';

</style>
