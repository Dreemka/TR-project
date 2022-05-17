<template>
<section class="t-rr-s-project-setting-wrapper">
  <div class="t-rr-s-project-setting-header">
    <div class="t-rr-s-project-setting-header-title">
      <h5>{{$t('Settings.projectText.Project')}}</h5>
    </div>
    <div class="t-rr-s-project-setting-header-setting">
        <UiButton 
          :title="$t('Settings.projectText.UpdateProjectList')"
          :disabled="false"
          class="fz-14"
          @click="reloadListProject()" />
        <UIinput 
          :mask="$t('search')"
          icon='transporter-Search_tiny'
          v-model="filterData"
          class="fz-14"/>
    </div>
  </div>
  <div class="t-rr-s-project-setting-body">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">
          <div class="flex-center-start">
            <div class="el-overflow-white-space">
              {{$t('Settings.projectText.ProjectTitle')}}
            </div>
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
          </div>
        </th>
        <th scope="col">
          {{$t('Settings.projectText.Synchronization')}}
        </th>
        <th scope="col">
          {{$t('Settings.projectText.LastDetour')}}
        </th>
        <th scope="col">
          {{$t('Settings.projectText.Progress')}}
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="( item , idx ) in dataFilter" :key="idx">
          <td>
            {{item.name}}
          </td>
          <td>
            <Toogle :index="idx"
              v-model="item.check"
              @change="choiseFu(item)"/>
          </td>
          <td>
            {{item.updated_at | date('datetime')}}
          </td>
          <td>
            100/100
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
import {mapGetters , mapActions} from 'vuex';
import QueryMixin from '@/mixins/query-mixin'
import Toogle from '@/components/ui/CheckboxToogle'

export default {
  components: {
    UiButton,
    UIinput,
    Toogle
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
    ...mapGetters(['dataHubList']),
  },
  mounted(){
    this.HubList({})
        .then(() => {
          this.getProject(this.dataHubList)
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods: {
    ...mapActions(['HubList']),
    getProject(value) {
      console.log(value)
      this.postData('/api/v1/Settings.projectList', {
        hub_id : (this.dataHubList) ? this.dataHubList[0].hub_id : null,
      })
      .then((data) => {
        console.log(data)
        data = data.map(one => {
          if (one.disabled === 0) one.check = false
          if (one.disabled === 1) one.check = true
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
    choiseFu(item) {
      console.log(item)
      if (item.check === true) item.disabled = 1
      if (item.check === false) item.disabled = 0
      this.disabledProject(item)
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

@import 'src/assets/css/project-settings.scss';

</style>
