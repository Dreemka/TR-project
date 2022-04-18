<template>
<div class="t-rr-s-container unselectable" @click.self="test($event)" @mousedown="test2($event)">
  <div class="t-rr-s-logo-wrapper">
      <Logo />
  </div>
  <div class="t-rr-s-login-wrapper" >
    <form @submit.prevent="onSubmit(login , password)">
      <br>
      <Input 
            mask="login"
            type="text"
            icon="transporter-Mail_outline" 
            v-model.trim="login"
            class="mb-10" />
      <Input 
            mask="Password" 
            icon="transporter-Safety"
            type="password"
            v-model.trim="password"
            class="mb-10" />
      <div class="flex-center-start ui-width-100-pr">
        <UiButton 
                :title="title"
                icon="false"
                :disabled="(!login.includes('@') || password.length < 8)" />
      </div>
    </form>
  </div>
</div>
</template>

<script>
import UiButton from '@/components/ui/Button'
import {login , required , minLength} from 'vuelidate/lib/validators'
import messages from "@/plugins/utils/messages"
import Input from "@/components/ui/Input";
import Logo from '@/components/app/Logo'



export default {
  name: "Login",
  validations: {
    login: {login , required},
    password: {required , minLength: minLength(8)},
  },
  components: {
    UiButton , Input , Logo
  },
  methods: {
    async onSubmit(login , password){
        const formData = {
          login: login,
          password: password,
        }
        await this.$store.dispatch('login', formData)
              .then((response) => {
                console.log(response)
                this.$router.push({ name: 'list' })
              })
              .catch(err => {
                console.log(err.response.data)
                this.$router.push('/login')
              })
    },
    test(e){
      
      if(this.elRemember === e.target) console.log(e.target)
    },
    test2(e){
      this.elRemember = e.target

    },
  },
  data() {
    return {
      title : 'Войти',
      login : '',
      password : '',
    }
  },
  mounted() {
    if (messages[this.$route.query.message]){
      this.$message(messages[this.$route.query.message])
    }
  },
}
</script>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/login-page.scss';
</style>