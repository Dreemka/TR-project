<template>
  <li v-if="renderComponent" class="ml-10">
    <slot></slot>
    <i :class="iconAfter"
       v-if="iconAfter"
       style="font-size: 24px"/>
       <ChildListItem v-for="(child, index) in item.children"
                      :key="index"
                      :item="child"
                      :iconBefore="iconBefore"
                      :listStyleIcon="listStyleIcon"
                      @childAction="childAction">
        <div class="t-rr-s-nav-list-wrapper-content"
             :class="{'active': $route.params.name === child.name}">
          <i class="cursor-pointer mr-2"
             @click="go(child)"
             :class="[listStyleIcon , {'rotate--90' : !child.openFolder} , {'el-not-allowed' : !child.child_folders}]" />
          <!-- <i :class="iconBefore"
             v-if="iconBefore"
             style="font-size: 24px"/>  -->
            <img v-if="child.type === 'folder' && $route.params.name !== child.name" class="mr-1" src="@/assets/transporter-icon/Icon/folder.svg">
            <img v-if="child.type === 'folder' && $route.params.name === child.name" class="mr-1" src="@/assets/transporter-icon/Icon/folderLink.svg">

          <div @click="childAction(child)"
               class="cursor-pointer t-rr-s-text-li">
               {{ child.name }}
          </div>
        </div>
                      
       </ChildListItem>

  </li>
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
      }
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
      // this.$root.$on('folderData' , (item) => {
      //   console.log(444)
      //   console.log(item.id)
      //   console.log(this.item.id)
      //   console.log(555)
      //   item.children = false

      //   if(item.id === this.item.id) {
      //     // console.table(item)
      //     item.openFolder = false
      //     item.children = false
      //     // this.go(item)
      //     this.childAction(item)
      //     return
      //   }
        
      // })
    },
    methods: {
      go(child){
        // console.log(child)
        let self = this
        child.openFolder = !child.openFolder
        // child.openFolder = true
        if(child.children) {
          child.children = false;
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
              // console.log(8888888888)
              child.children = data
              // console.log(child)

              self.renderComponent = false;
              
              self.$nextTick(() => {
                
              self.renderComponent = true;
              
            });
              // this.$emit('itemQueryData' , this.idParent , data)
            });
        }
      },
      childAction(child){
        // console.log(child)
        this.$emit('childAction' ,child)
        // this.go(child)
      }
    }
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>