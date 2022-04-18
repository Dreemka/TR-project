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
        <div class="t-rr-s-nav-list-wrapper-content">
          <i class="cursor-pointer"
             @click="go(child)"
             :class="[listStyleIcon , {'rotate--90' : !child.openFolder} , {'el-not-allowed' : !child.child_folders}]" />
          <!-- <i :class="iconBefore"
             v-if="iconBefore"
             style="font-size: 24px"/>  -->
          <img v-if="item.type === 'folder'" class="mr-2" src="@/assets/transporter-icon/Icon/folder.svg">

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
    methods: {
      go(child){
        let self = this
        child.openFolder = !child.openFolder
        if(child.children) {
          child.children = false;
          self.renderComponent = false;
          
          self.$nextTick(() => {
            // А потом покажем снова
            self.renderComponent = true;
          })
        } else {
            this.postData("/api/v1/Folder.getFolderList", {
                parent_folder_id: child.folder_id,
                hub_id: child.hub_id
            })
            .then((data) => {
              child.children = data
              self.renderComponent = false;
              
              self.$nextTick(() => {
              // А потом покажем снова
              self.renderComponent = true;
            });
              // this.$emit('itemQueryData' , this.idParent , data)
            });
        }
      },
      childAction(child){
        // console.log(child)
        this.$emit('childAction' ,child)
      }
    }
  }
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
</style>