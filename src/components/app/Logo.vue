<template>
  <div class="el-logo" @click="$emit('click', $event)">
    <img alt="Vue logo" src="@/assets/img/logo/logofull.svg">
  </div>
</template>
<style lang="scss">
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/logo.scss';
</style>
