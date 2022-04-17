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
          <div class="flex-center-start">
            <div class="el-overflow-white-space">
              {{$t('file_name')}}
            </div>
            <label for="fileName">
              <i class="transporter-menu_outline" />
            </label>
             <input name="fileName" 
                    id="fileName" 
                    type="checkbox" 
                    v-model="fileName"
                    class="el-display-none"
                    @change="sortLis('file_name')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-center">
            <div class="el-overflow-white-space">
              {{$t('version')}}
            </div>
            <label for="version">
              <i class="transporter-menu_outline" />
            </label>
             <input name="version" 
                    id="version" 
                    type="checkbox" 
                    v-model="version"
                    class="el-display-none"
                    @change="sortLis('version')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-center">
            <div class="el-overflow-white-space">
              {{$t('size')}}
            </div>
            <label for="size">
              <i class="transporter-menu_outline" />
            </label>
             <input name="size" 
                    id="size" 
                    type="checkbox" 
                    v-model="size"
                    class="el-display-none"
                    @change="sortLis('size')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-center">
            <div class="el-overflow-white-space">
              {{$t('date_of_change')}}
            </div>
            <label for="date_of_change">
              <i class="transporter-menu_outline" />
            </label>
             <input name="dateOfChange" 
                    id="dateOfChange" 
                    type="checkbox" 
                    v-model="dateOfChange"
                    class="el-display-none"
                    @change="sortLis('date_of_change')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-center">
            <div class="el-overflow-white-space">
              {{$t('who_changed')}}
            </div>
             <label for="who_changed">
                <i class="transporter-menu_outline" />
             </label>
             <input name="whoChanged" 
                    id="whoChanged" 
                    type="checkbox" 
                    v-model="whoChanged"
                    class="el-display-none"
                    @change="sortLis('who_changed')">
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , idx) in data"
          :key="idx"
          :class="{'t-rr-s-choise-item-active' : item.check}"
          >
        <th scope="row">
          <Checkbox :index="idx"
                    v-model="item.check"
                    @change="choiseFu(item)"/>
        </th>
        <td>
          <div @click="openPopup(item)">
                 <div class="cursor-pointer">
                    <i :class="[{'transporter-doc' : item.type === 'folder'}]"
                      style="font-size: 24px"/>
                   {{item.name}}
                 </div>
              
          </div>
        </td>
        <td v-if="item.type !== 'folder'">{{item.version}}</td>
        <td v-if="item.type === 'folder'"> - </td>
        <td v-if="item.type !== 'folder'">{{item.size}}</td>
        <td v-if="item.type === 'folder'"> - </td>
        <td>{{item.modified_time | date('date')}}</td>
        <td>
          <i class="mr-10  transporter-profile"></i>
          {{item.modified_user_name}}
          <Popup :item="item"
                  v-if="item.popupOpen">
                  <div class="t-rr-s-popup-block-header">
                        {{$t('version_history')}}
                    <i class="transporter-Close fz-28 cursor-pointer" 
                       @click.stop="closePopup(item)"/>
                  </div>
                  <div class="t-rr-s-popup-block-content fz-20">
                    {{item.name}}
                    <ul class="t-rr-s-popup-block-content-list">
                      <li class="t-rr-s-popup-block-content-list-item"
                          v-for="version in item.listVersion" 
                          :key="version.id">
                          <div class="t-rr-s-popup-block-content-list-item-version fz-20">
                              V{{version.version}}
                          </div>

                          <div class="t-rr-s-popup-block-content-list-item-info">
                            <span>
                              {{$t('loaded')}}
                            </span>
                            <span>
                              {{version.create_user_name}}
                            </span>
                            <span>
                              {{version.create_time | date('date')}}
                            </span>
                          </div>

                          <div class="t-rr-s-popup-block-content-list-item-download">
                            <i class="transporter-file" />
                          </div>
                      </li>
                    </ul>
                  </div>
                  <div class="t-rr-s-popup-block-footer flex-center-end">
                      <UiButton 
                                :title="$t('close')"
                                icon="false"
                                @click="closePopup(item)" />
                  </div>

              </Popup>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Checkbox from '@/components/ui/Checkbox'
import UiButton from '@/components/ui/Button'
import Popup from '../../components/ui/Popup.vue'
import QueryMixin from '@/mixins/query-mixin'
import {mapActions} from 'vuex'



export default {
  name: "Table",
  components: {
    Checkbox,
    Popup,
    UiButton
  },
  mixins: [
    QueryMixin,
  ],
  data() {
    return {
      checkAll: false,
      lovingVue: false,
      fileName: false,
      version: false,
      size: false,
      whoChanged: false,
      dateOfChange: false,
    }
  },
  props: {
    data: {
      type: Array
    },
    triger: {
      type: Array
    }
  },
  methods: {
    ...mapActions(['listContentDownloadAdd']),
    allchoiseFu(checkAll) {
      if(checkAll) this.data.map(one=>one.check = true)
      if(!checkAll) this.data.map(one=>one.check = false)
      let checkFu = this.data.filter(one=>one.check)

      console.log(checkFu)
      this.listContentDownloadAdd(checkFu)

    },
    choiseFu(item) {
      let checkFu = this.data.filter(one=>one.check)
      console.log(checkFu)
      if(!item.check) this.checkAll = !!checkFu.length
      if(item.check && checkFu.length === this.data.length) this.checkAll = true
      this.listContentDownloadAdd(checkFu)

    },
    sortLis(column) {
      switch (column) {
        case "file_name":
          if(this.fileName) this.data.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          })
          if(!this.fileName) this.data.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
          console.log(this.data)
          break;
        case "version":
          console.log(this.version)
          if(this.version) this.data.sort(function (a, b) {
            if (a.version < b.version) {
              return 1;
            }
            if (a.version > b.version) {
              return -1;
            }
            return 0;
          })
          if(!this.version) this.data.sort(function (a, b) {
            if (a.version > b.version) {
              return 1;
            }
            if (a.version < b.version) {
              return -1;
            }
            return 0;
          })
          console.log(this.data)
          break;
        case "size":
        if(this.size) this.data.sort(function (a, b) {
          if (a.size < b.size) {
            return 1;
          }
          if (a.size > b.size) {
            return -1;
          }
          return 0;
        })
        if(!this.size) this.data.sort(function (a, b) {
          if (a.size > b.size) {
            return 1;
          }
          if (a.size < b.size) {
            return -1;
          }
          return 0;
        })
        break;
        case "date_of_change":
        if(this.dateOfChange) this.data.sort(function (a, b) {
          if (a.modified_time < b.modified_time) {
            return 1;
          }
          if (a.modified_time > b.modified_time) {
            return -1;
          }
          return 0;
        })
        if(!this.dateOfChange) this.data.sort(function (a, b) {
          if (a.modified_time > b.modified_time) {
            return 1;
          }
          if (a.modified_time < b.modified_time) {
            return -1;
          }
          return 0;
        })
        break;
        case "who_changed":
        if(this.whoChanged) this.data.sort(function (a, b) {
          if (a.modified_user_name < b.modified_user_name) {
            return 1;
          }
          if (a.modified_user_name > b.modified_user_name) {
            return -1;
          }
          return 0;
        })
        if(!this.whoChanged) this.data.sort(function (a, b) {
          if (a.modified_user_name > b.modified_user_name) {
            return 1;
          }
          if (a.modified_user_name < b.modified_user_name) {
            return -1;
          }
          return 0;
        })
        break;
        
        default:
          break;
      }
    },
    openPopup(item) {
      console.log(item)
      // item.popupOpen = true
      this.postData('/api/v1/Version.getList', {
        item_id: item.item_id,
        hub_id: item.hub_id
      })
      .then((data) => {
        item.listVersion = data
        if(item.listVersion.length) item.popupOpen = true
        this.$set(this.data, this.data.indexOf(item), item)
      });
    },
    closePopup(item) {
      console.log(item)
      item.popupOpen = false
      this.$set(this.data, this.data.indexOf(item), item)
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/hub-table.scss';
</style>