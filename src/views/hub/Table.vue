<template>
  <div class="t-rr-s-table-wrapper">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">
          <Checkbox index="h1"
                    v-model="checkAll"
                    @change="allchoiseFu(checkAll)"/>
        </th>
        <th scope="col" width="40%"> 
          <div class="flex-center-start">
            <div class="el-overflow-white-space">
              {{$t('file_name')}}
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
          <div class="flex-center-center">
            <div class="el-overflow-white-space">
              {{$t('version')}}
            </div>
            <label for="version"
                   class="t-rr-s-for-arrow">
              <i class="transporter-menu_outline" />
            </label>
             <input name="version" 
                    id="version" 
                    type="checkbox" 
                    v-model="version"
                    class="el-display-none"
                    @change="sortList('version')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-end">
            <div class="el-overflow-white-space">
              {{$t('size')}}
            </div>
            <label for="size"
                   class="t-rr-s-for-arrow">
              <i class="transporter-menu_outline" />
            </label>
             <input name="size" 
                    id="size" 
                    type="checkbox" 
                    v-model="size"
                    class="el-display-none"
                    @change="sortList('size')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-end">
            <div class="el-overflow-white-space">
              {{$t('date_of_change')}}
            </div>
            <label for="dateOfChange"
                   class="t-rr-s-for-arrow">
              <i class="transporter-menu_outline" />
            </label>
             <input name="dateOfChange" 
                    id="dateOfChange" 
                    type="checkbox" 
                    v-model="dateOfChange"
                    class="el-display-none"
                    @change="sortList('date_of_change')">
          </div>
        </th>
        <th scope="col">
          <div class="flex-center-start">
            <div class="el-overflow-white-space">
              {{$t('who_changed')}}
            </div>
             <label for="whoChanged"
                    class="t-rr-s-for-arrow">
                <i class="transporter-menu_outline" />
             </label>
             <input name="whoChanged" 
                    id="whoChanged" 
                    type="checkbox" 
                    v-model="whoChanged"
                    class="el-display-none"
                    @change="sortList('who_changed')">
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , idx) in dataFilter"
          :key="idx"
          :class="{'t-rr-s-choise-item-active' : item.check}"
          >
        <th scope="row" class="checkbox_wrap">
          <Checkbox :index="idx"
                    v-model="item.check"
                    @change="choiseFu(item)"/>
        </th>
        <td>
          <div @click="openPopup(item)">
                 <div class="cursor-pointer t-rr-s-item">
                    <!-- <i :class="[{'transporter-doc' : item.type === 'folder'}]"
                      style="font-size: 24px"/> -->
                    <img v-if="item.extension === 'doc' || item.extension === 'docx'" class="mr-2" src="@/assets/transporter-icon/Icon/doc.svg">
                    <!-- <img v-if="item.extension === 'rvt'" class="mr-1" src="@/assets/transporter-icon/Icon/rvt.svg"> -->
                    <img v-if="item.extension === 'pdf'" class="mr-2" src="@/assets/transporter-icon/Icon/pdf.svg">
                    <img v-if="item.extension === 'xlxs'" class="mr-2" src="@/assets/transporter-icon/Icon/xls.svg">
                    <img v-if="item.extension === 'dwg'" class="mr-2" src="@/assets/transporter-icon/Icon/dwg.svg">
                    <img v-if="item.type === 'folder'" class="mr-2" :src="require(`@/assets/img/${project}/folder24.svg`)">
                    <i v-if="item.type !== 'folder' && item.extension !== 'dwg' && item.extension !== 'doc' && item.extension !== 'docx' && item.extension !== 'pdf' && item.extension !== 'xlxs'" class="transporter-file fz-24 mr-2" />

                   {{item.name}}
                 </div>
              
          </div>
        </td>
        <td v-if="item.type !== 'folder'">
          <div class="t-rr-s-version-block">
            <span v-if="item.type !== 'folder'">V</span>{{item.version || '-'}}
          </div>
        </td>
        <td v-if="item.type === 'folder'"> - </td>
        <td>{{convert(item.size) || '-'}}</td>
        <!-- <td v-if="item.type === 'folder'"> - </td> -->
        <td>{{item.modified_time | date('date')}}</td>
        <td>
          <i class="mr-10  transporter-profile" v-if="item.modified_user_name"></i>
          {{item.modified_user_name || '-'}}
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
                            <mark v-if="version.version === item.version">
                              {{$t('Current')}}
                            </mark>
                          </div>

                          <div class="t-rr-s-popup-block-content-list-item-download cursor-pointer"
                               @click="download(version)">
                            <img class="mr-1" src="@/assets/transporter-icon/Icon/downloadFile.svg">
                            
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
      <tr v-if="!dataFilter.length">
        <td colspan="6" class="t-tt-s-empty-td fz-24">
          {{$t('TheFolderIsEmpty')}}
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
    UiButton,
  },
  mixins: [
    QueryMixin,
  ],
  data() {
    return {
      project: process.env.VUE_APP_PROJECT || 'transporter',
      checkAll: false,
      lovingVue: false,
      fileName: false,
      version: false,
      size: false,
      whoChanged: false,
      dateOfChange: false,
      search: '',
      dataFilter: [],
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
      if(checkAll) this.dataFilter.map(one=>one.check = true)
      if(!checkAll) this.dataFilter.map(one=>one.check = false)
      let checkFu = this.dataFilter.filter(one=>one.check)
      this.$root.$emit('checkFu' , checkFu)
      this.listContentDownloadAdd(checkFu)
    },
    choiseFu(item) {
      let checkFu = this.dataFilter.filter(one=>one.check)
      if(!item.check) this.checkAll = !!checkFu.length
      if(item.check && checkFu.length === this.dataFilter.length) this.checkAll = true
      this.listContentDownloadAdd(checkFu)
      console.log(checkFu)
      this.$root.$emit('checkFu' , checkFu)
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
        case "version":
          if(this.version) this.dataFilter.sort(function (a, b) {
            if (a.version < b.version) {
              return 1;
            }
            if (a.version > b.version) {
              return -1;
            }
            return 0;
          })
          if(!this.version) this.dataFilter.sort(function (a, b) {
            if (a.version > b.version) {
              return 1;
            }
            if (a.version < b.version) {
              return -1;
            }
            return 0;
          })
          break;
        case "size":
        if(this.size) this.dataFilter.sort(function (a, b) {
          if (a.size < b.size) {
            return 1;
          }
          if (a.size > b.size) {
            return -1;
          }
          return 0;
        })
        if(!this.size) this.dataFilter.sort(function (a, b) {
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
          console.log(this.dataFilter)
        if(this.dateOfChange) this.dataFilter.sort(function (a, b) {
          console.log(a.modified_time)
          if (a.modified_time < b.modified_time) {
            return 1;
          }
          if (a.modified_time > b.modified_time) {
            return -1;
          }
          return 0;
        })
        if(!this.dateOfChange) this.dataFilter.sort(function (a, b) {
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
        if(this.whoChanged) this.dataFilter.sort(function (a, b) {
          if (a.modified_user_name < b.modified_user_name) {
            return 1;
          }
          if (a.modified_user_name > b.modified_user_name) {
            return -1;
          }
          return 0;
        })
        if(!this.whoChanged) this.dataFilter.sort(function (a, b) {
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
    openFolder(item) {
      this.$root.$emit('folderData' , item)
    },
    openPopup(item) {
      if(item.type === "folder") this.openFolder(item)

      if(item.type !== "folder") {
        this.getData('/api/v1/Version.getList', {
          item_id: item.item_id,
          hub_id: item.hub_id
        })
        .then((data) => {
          item.listVersion = data
          if(item.type === "folder") {
            item.popupOpen = false
          } else {
          if(item.listVersion.length) item.popupOpen = true
          }
          this.$set(this.dataFilter, this.dataFilter.indexOf(item), item)
        });
      }
    },
    closePopup(item) {
      console.log(item)
      item.popupOpen = false
      this.$set(this.dataFilter, this.dataFilter.indexOf(item), item)
    },
    download(version) {
        this.getData('/api/v1/Version.download', {
          version_id: version.version_id,
          hub_id: version.hub_id
        })
        .then((data) => {
          console.log(data)
          // document.location.href = data.location;
          window.location.href = data.location;
        });
    },
    searchFu(filterData) {
      this.dataFilter = this.data.slice();
      if (filterData) {
        this.dataFilter = this.data.filter(one => {
            return one.name.toLowerCase().includes(filterData.toLowerCase());
        });
      }
    },
    // convert(item) {
    //   return item.size * 0.001
    // }
    convert(item) {
      if(item < 1) return item
      var i = -1;
      var byteUnits = [' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
      do {
          item = item / 1024;
          i++;
      } while (item > 1024);
      return Math.max(item, 0.1).toFixed(1) + byteUnits[i];
    }
  },
  watch: {
    'data': {
      handler() {
        this.dataFilter = this.data.slice();
      }
    },
    '$route' () {
      this.checkFu = []
      this.checkAll = false
      this.allchoiseFu(this.checkAll)
      // console.log(777)
    }
  },
  mounted() {
    this.$root.$on('filterData', (filterData) => {
      this.searchFu(filterData)
    })
  },
}
</script>

<style lang="scss">

@import 'src/assets/css/hub-table.scss';
</style>