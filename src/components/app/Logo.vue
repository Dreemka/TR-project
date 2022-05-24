<template>
  <div class="el-logo" @click="$emit('click', $event)">
    <img alt="Logo" :src="require(`@/assets/img/${project}/logofull.svg`)">
  </div>
</template>
<style lang="scss">

@import 'src/assets/css/logo.scss';
</style>

<script>
export default {
  name: "Logo",
  data: () => {

    return {
      project: process.env.VUE_APP_PROJECT || 'transporter'
    }
  },
  mounted() {
  }
}
</script>