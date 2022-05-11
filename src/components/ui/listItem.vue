<template>
  <ul :key="componentKey">
    <li>
      <slot></slot>
      <i :class="iconAfter"
         v-if="iconAfter"
         style="font-size: 24px"/>
         <ChildListItem v-for="(child, index) in item.children"
                        :key="index"
                        :item="child"
                        :iconBefore="iconBefore"
                        :listStyleIcon="listStyleIcon"
                        @childAction="childAction"
                        class="ml-10"
                        :id="child.folder_id"
                        v-show="item.openFolder"
                        :ref="child.folder_id">
          <div class="t-rr-s-nav-list-wrapper-content"
               :class="{'active': $route.params.name === child.name}">
            <i class="cursor-pointer mr-2"
               style="position: relative; top: -2px;"
               @click="getChildFolder(child , item)"
               :class="[listStyleIcon , {'rotate--90' : !child.openFolder} , {'el-not-allowed' : !child.child_folders}]" />
            <div @click="childAction(child)"
                 class="cursor-pointer t-rr-s-text-li">
              <img v-if="child.type === 'folder' && $route.params.name !== child.name" class="mr-2" :src="require(`@/assets/img/${project}/folder.svg`)">
              <img v-if="child.type === 'folder' && $route.params.name === child.name" class="mr-2" :src="require(`@/assets/img/${project}/folderLink.svg`)">
              <!-- {{ child.openFolder }} -  -->
                 {{ child.name }}
            </div>
          </div>
         </ChildListItem>
    </li>
  </ul>
</template>

<script>
  import QueryMixin from '@/mixins/query-mixin';

  export default {
    name: "ChildListItem",
    mixins: [
      QueryMixin,
    ],
    data(){
      return {
        project: process.env.VUE_APP_PROJECT || 'transporter',
        componentKey: 0,
      }
    },
    props: {
      iconBefore: {
        type: String
      },
      iconAfter: {
        type: String
      },
      listStyleIcon: {
        type: String
      },
      item: {
        type: [String,Number,Object,Array,Boolean]
      },
      urlQuery: {
        type: String
      },
      paramsQuery: {
        type: [String,Number,Object,Array,Boolean]
      },
      idParent: {
        type: Number
      },
    },
    created(){
      if(this.urlQuery) {
        this.getData(this.urlQuery, this.paramsQuery)
        .then((data) => {
          this.$emit('itemQueryData' , this.idParent , data)
        });
      }
    },
    mounted() {
      this.$root.$on('folderData' , (item) => {
        if (item.parent_folder_id === this.item.folder_id) {
          this.item.openFolder = true
          this.getChildFolder(this.item , item)
        }
          let rec = (item) => {
            if(item.parentsFolders) {
              if (item.parentsFolders.parent_folder_id === this.item.folder_id) {
              this.item.openFolder = true
              }
              return rec(item.parentsFolders)
            } else {
              return
            }
        }
        rec(item)
      })
    },
    methods: {
      forceRerender() {
        this.componentKey += 1;
      },

      getChildFolder(child) {
        child.openFolder = !child.openFolder
          this.getData("/api/v1/Folder.getFolderList", {
              parent_folder_id: child.folder_id,
              hub_id: child.hub_id
          })
          .then((data) => {
            child.children = data
            child.children.map(one => one.parentsFolders = child)
            this.item.openFolder = true
            this.forceRerender()
          });
      },
      childAction(child){
        this.$emit('childAction' ,child)
      },
    },
    beforeDestroy() {
      // this.$root.$off('folderData');
    }
  }
</script>