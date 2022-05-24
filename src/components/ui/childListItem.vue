<template>
  <li>
    {{item.name}}
  </li>
</template>

<script>

  export default {
    name: "childListItem",
    props: {
      item: {
        type: [String,Number,Object,Array,Boolean]
      },
    },
  }
</script>
