<template>
  <div class="footer-nav">
    <div class="wrapper">
      <div class="copyright" v-if="!actives">
        <span>2022 &#169; {{ project }}
          <br/>
        {{ $t('all_rights_reserved') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavbar",
  props: {
    actives: {
      type: Boolean,
    }
  },
  data: () => {

    const p = process.env.VUE_APP_PROJECT || 'transporter';

    const project = p === 'transporter' ? 'Transporter' : 'RuBim';

    return {
      project: project,
    }
  },
  components: {},
  methods: {
    setLocale(locale) {
      import(`@/langs/${locale}.json`).then((msg) => {
        this.$i18n.setLocaleMessage(locale, msg)
        this.$i18n.locale = locale
      })
    }
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/footer-navbar.scss';
</style>