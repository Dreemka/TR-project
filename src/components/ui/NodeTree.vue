<template>
  <li class="node-tree" v-if="renderComponent">
    <!-- <span class="label">{{ node.label }}</span> -->
    <slot></slot>
    <ul v-if="node.children && node.children.length">
      <node v-for="(child , index) in node.children" :key="index" :node="child">
        <div @click="go(child , node)">
          {{ child.label }}
        </div>
      </node>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'node',
    props: {
      node: Object
    },
    data(){
      return {
        renderComponent: true,
      }
    },
    methods: {
      go(child){
        console.log(8888);
        child.children = [
          {
            label: 'A cool sub-folder 222',
            children: [
              { label: 'A cool sub-sub-folder 1111' },
              { label: 'A cool sub-sub-folder 2222' }
            ]
          },
          { label: 'This one is not that cool' }
        ]
          // this.$set(node.children, node.children.indexOf(child), child)
        this.renderComponent = false;
        
        this.$nextTick(() => {
          // А потом покажем снова
          this.renderComponent = true;
        });
      }
    }
  };
</script>