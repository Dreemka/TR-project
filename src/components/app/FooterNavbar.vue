<template>
  <div class="footer-nav">
    <div class="wrapper">
      <div class="copyright" v-if="!actives">
        <span>2022&#169; Transporter
          <br />
        Все права защищены</span>

        <a href="">Противодействие мошейничеству корупции и хищениям</a>
      </div>
    </div>
    <div class="t-rr-s-locale-wrapper">
      <a href="#" @click="setLocale('en')">EN</a>
      <a href="#" @click="setLocale('ru')">RU</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavbar",
  props: {
    actives : {
      type: Boolean,
    }
  },
  components: {
  },
  methods: {
    setLocale(locale){
      console.log(locale);
      import(`@/langs/${locale}.json`).then((msg) => {
        this.$i18n.setLocaleMessage(locale , msg)
        this.$i18n.locale = locale
      })
    }
  },
}
</script>

<style lang="scss">
@import '/src/assets/css/variables.scss';
@import '/src/assets/css/footer-navbar.scss';
</style>