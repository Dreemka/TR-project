<template>
<div class="dropDown-wrapper">
  <div class="t-rr-s-dropDown-mask" @click="active = !active; clickDropDown(active);">
    <i class="mr-10 " v-if="dropDownData.mask.iconAfter" :class="[dropDownData.mask.iconAfter]" />
    <span>{{ dropDownData.mask.title || "Демо пользователь"}}</span>
    <i class="ml-10 " v-if="dropDownData.mask.iconBefore" :class="[dropDownData.mask.iconBefore]" />
  </div>
  <div class="dropDown-list" v-if="active">
  <ul >
    <li
        v-for="item in dropDownData.arrayData"
        :key="item.id"
        class="cursor-pointer"
        @click="eventClick(item)">
      <i class="mr-10 " :class="[item.icon]" />
      <!-- <img class="mr-1" src="@/assets/transporter-icon/Icon/logout.svg"> -->

      <span>{{ item.title }}</span>
    </li>
  </ul>
      <div class="t-rr-s-locale-wrapper">
        {{$t('language')}} :
      <a href="#" @click="setLocale('en')">EN</a> /
      <a href="#" @click="setLocale('ru')">RU</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DropDown",
  self: this,
  props: {
    dropDownData: {
      type: Object,
    },
  },
  data: () => ({
    active: false
  }),
  methods: {
    clickDropDown(active){
      let self = this;
      let listenerClick = function(e) {
        let el = document.querySelector('.dropDown-wrapper');
        if (el && !el.contains(e.target)) self.active = false;
        if (!self.active) document.removeEventListener('click', listenerClick , false)
      }
      if (active) {
        document.addEventListener('click', listenerClick , false);
      }
    },
    eventClick(item){
      let self = this;
      if (item.method) this.$store.dispatch(item.method)
      if (item.url) this.$router.push(item.url)
      self.active = false;
    },
    setLocale(locale){
      console.log(locale);
      import(`@/langs/${locale}.json`).then((msg) => {
        this.$i18n.setLocaleMessage(locale , msg)
        this.$i18n.locale = locale
      })
    }
  }

}
</script>

<style lang="scss" >

@import 'src/assets/css/drop-down.scss';
</style>