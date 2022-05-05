<template>
  <li class="node-tree" v-if="renderComponent">
    <slot></slot>
    <ul v-if="item.children && item.children.length">
      <node v-for="(child , index) in item.children" :key="index" :node="child">
        <div @click="go(child , node)">
          {{ item.label }}
        </div>
      </node>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'node',
    props: {
      item: [Object , Array]
    },
    data(){
      return {
        renderComponent: true,
      }
    },
    methods: {
    }
  };
</script>