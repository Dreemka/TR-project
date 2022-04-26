<template>
  <ul>
    <li v-if="renderComponent">
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
                        :id="child.id"
                        v-show="item.openFolder">
          <div class="t-rr-s-nav-list-wrapper-content"
               :class="{'active': $route.params.name === child.name}">
            <i class="cursor-pointer mr-2"
               style="position: relative; top: -2px;"
               @click="child.openFolder = !child.openFolder; go(child)"
               :class="[listStyleIcon , {'rotate--90' : !child.openFolder} , {'el-not-allowed' : !child.child_folders}]" />
            <!-- <i :class="iconBefore"
               v-if="iconBefore"
               style="font-size: 24px"/>  -->
            <div @click="childAction(child)"
                 class="cursor-pointer t-rr-s-text-li">
              <img v-if="child.type === 'folder' && $route.params.name !== child.name" class="mr-2" src="@/assets/transporter-icon/Icon/folder.svg">
              <img v-if="child.type === 'folder' && $route.params.name === child.name" class="mr-2" src="@/assets/transporter-icon/Icon/folderLink.svg">   
                 {{ child.name }}
            </div>
          </div>
                        
         </ChildListItem>
    </li>
  </ul>
</template>

<script>
  import QueryMixin from '@/mixins/query-mixin';
  // import ChildListItem from '../ui/childListItem.vue'

  export default {
    name: "ChildListItem",
    components: {
      // ChildListItem,
    },
    mixins: [
      QueryMixin,
    ],
    data(){
      return {
        openFolder: false,
        componentKey: 0,
        response: [],
        renderComponent: true,
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
        this.postData(this.urlQuery, this.paramsQuery)
        .then((data) => {
          this.$emit('itemQueryData' , this.idParent , data)
        });
      }
    },
    mounted() {
      this.$root.$on('folderData' , (item) => {
        this.parentAction(item , this.item)
        if(item.id === this.item.id) {
          this.item.openFolder = true
          this.childAction(this.item)
          this.go(this.item , item)
        } else if(item.parent_folder_id === this.item.folder_id){
          
          this.item.openFolder = true
          this.childAction(this.item)
          this.go(this.item , item)
          // if (item.id === this.item.id) console.log(true)
        }
      })
    },
    methods: {
      go(child , item = {}){
        console.log(child.folder_id)
        let self = this
        if(child.children) {
          // child.children = false;
          // child.openFolder = false
          self.renderComponent = false;

          self.$nextTick(() => {
            self.renderComponent = true;
          })
        } else {
            this.postData("/api/v1/Folder.getFolderList", {
                parent_folder_id: child.folder_id,
                hub_id: child.hub_id
            })
            .then((data) => {
              child.children = data

              child.children.map(one=>{
                if (one.id === item.id) {
                  one.openFolder = true
                  this.go(one)
                  this.childAction(one)
                }
              })

              self.renderComponent = false;
              self.$nextTick(() => {
              self.renderComponent = true;
            });
            });
        }
      },
      childAction(child){
        this.$emit('childAction' ,child)
      },
      parentAction(item , thisItem) {
        if(item.parent_folder_id === thisItem.folder_id) {
          console.log(thisItem.parent_folder_id)
          thisItem.openFolder = true
        }
        this.renderComponent = false;
        this.$nextTick(() => {
        this.renderComponent = true;
        });
        // console.log(item.parent_folder_id)
        // this.postData("/api/v1/Folder.getFolderList", {
        //         parent_folder_id: item.parent_folder_id,
        //         hub_id: child.hub_id
        //     })
        //     .then((data) => {
        //       child.children = data

        //       // child.children.map(one=>{
        //       //   if (one.id === item.id) {
        //       //     one.openFolder = true
        //       //     this.go(one)
        //       //     this.childAction(one)
        //       //   }
        //       // })

        //       self.renderComponent = false;
        //       self.$nextTick(() => {
        //       self.renderComponent = true;
        //     });
        //     });
      }
    }
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>