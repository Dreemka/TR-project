<template>
        <!-- <ul class="tree ml-10" v-if="componentKey" @click="toggle"> -->
          <li v-if="componentKey" >
            <!-- {{isOpen}}
            {{isFolder}} -->
            <!-- <div @click="toggle">toggle</div> -->

            <div class="t-rr-s-nav-list-wrapper-content"
                 :class="{'active': $route.params.folderId === item.folder_id}">
              <!-- <span @click="toggle(item)">+</span> -->
              <i class="cursor-pointer mr-2"
               style="position: relative; top: -2px;"
               @click="toggle(item)"
               :class="[listStyleIcon , {'rotate--90' : !item.isOpen} , {'el-not-allowed' : !item.child_folders}]" />
              <div
                class="cursor-pointer t-rr-s-text-li"
                @click="childAction(item)"
                @dblclick="toggle(item)">
              <img v-if="item.type === 'folder' && $route.params.folderId !== item.folder_id" class="mr-2" src="@/assets/transporter-icon/Icon/folder.svg">
              <img v-if="item.type === 'folder' && $route.params.folderId === item.folder_id" class="mr-2" src="@/assets/transporter-icon/Icon/folderLink.svg">
                  {{item.name}}
              </div>
            </div>
            <ul v-show="item.isOpen" v-if="isFolder" class="tree ml-10">
              <NodeTree
                class="item"
                v-for="(child, index) in item.children"
                :key="index"
                :item="child"
                :listStyleIcon="listStyleIcon"
                @make-folder="$emit('make-folder', $event)"
                @add-item="$emit('add-item', $event)">
              </NodeTree>
            </ul>
          </li>
        <!-- </ul> -->
</template>

<script>
  import NodeTree from './NodeTree';
  import QueryMixin from '@/mixins/query-mixin';


  export default {
    name: 'NodeTree',
    props: {
      item: [Object , Array],
      listStyleIcon: {
        type: String
      },
    },
    components: {
      NodeTree
    },
    mixins: [
      QueryMixin,
    ],
    data() {
      return {
        componentKey: true,
        changed: 0,
      }
    },
    computed: {
      isFolder: function() {
        let hook = this.changed;
        console.log(hook)
        return this.item.children && this.item.children.length;
      }
    },
    mounted(){
    this.$root.$on('folderData' , (item) => {
      if (this.item.folder_id === item.parent_folder_id) {
        this.getChildFolder(this.item)
        this.openParentFolders(item)
      }
    })
    },
    methods: {
      openParentFolders(item) {

        let rec = (item) => {
            if(item.parentsFolders) {
              item.parentsFolders.isOpen = true
              return rec(item.parentsFolders)
            } else {
              return
            }
        }
        rec(item)
      },
      forceRerender() {
        this.componentKey += 1;
      },
      childAction(item){
        this.$root.$emit('folderItem' , item)
      },
      getChildFolder(item) {
        if (!item.isOpen) {
          this.getData('/api/v1/Folder.getFolderList', {
              parent_folder_id: item.folder_id,
              hub_id: item.hub_id
          })
            .then((data) => {
              item.children = data
              item.children.map(one => one.parentsFolders = item)
              item.isOpen = true;
              this.changed++;
          });
        } else {
          item.isOpen = false;
          this.componentKey = false
          this.$nextTick(() => {
            this.componentKey = true;
          });

        }
      },
      toggle(item) {
        if (this.isFolder) {
          item.isOpen = !item.isOpen;
          this.componentKey = false
          this.$nextTick(() => {
            this.componentKey = true;
          });
        } else {
          this.getChildFolder(item)
        }
      },
    },
  };
</script>