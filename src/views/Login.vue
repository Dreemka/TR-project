<template>
<div class="container unselectable" @click.self="test($event)" @mousedown="test2($event)">
  <div class="login-wrapper" >
    <img alt="Contrust logo" src="../assets/logo.svg">
    <form @submit.prevent="onSubmit(email , password , isChecked)">
      <br>
      <Input mask="Email" icon="contrust-Mail_outline" v-model.trim="email" />

<!--      <small class="helper-text invalid"-->
<!--             v-if="$v.email.$dirty && !$v.email.required"-->
<!--      >Поле Email не должно быть пустым</small>-->
<!--      <small class="helper-text invalid"-->
<!--             v-else-if="$v.email.$dirty && !$v.email.email"-->
<!--      >Введите корректный Email</small>-->
      <Input mask="Password" icon="contrust-Safety" v-model.trim="password" />


      <!-- <input type="text"
             v-model.trim="email"
             placeholder="Email"
             :class="{invalid: $v.email.$dirty && !$v.email.required || $v.email.$dirty && !$v.email.email }"> -->

      <!-- <small class="helper-text invalid"
             v-if="$v.email.$dirty && !$v.email.required"
      >Поле Email не должно быть пустым</small>
      <small class="helper-text invalid"
             v-else-if="$v.email.$dirty && !$v.email.email"
      >Введите корректный Email</small> -->

      <!-- <input
          type="password"
          v-model.trim="password"
          placeholder="Password"
          :class="{invalid: $v.password.$dirty && !$v.password.required || $v.password.$dirty && !$v.password.minLength }"> -->
<!--      <small class="helper-text invalid"-->
<!--             v-if="$v.password.$dirty && !$v.password.required"-->
<!--      >Введите пароль</small>-->
<!--      <small class="helper-text invalid"-->
<!--             v-else-if="$v.password.$dirty && !$v.password.minLength"-->
<!--      >Password должен быть {{$v.password.$params.minLength.min}} символов, сейчас он {{ password.length }}</small>-->
      <div class="m-2">
      <a href="">Забыли пароль?</a>
      <UiCheckbox :title="title_checkbox"
                  @new-model="isChecked = !isChecked"
                  v-model="isChecked" ></UiCheckbox>
      </div>
      <UiButton :title="title"
                icon="contrust-home_outline"></UiButton>
    </form>
  </div>
</div>
</template>

<script>
import UiButton from '@/components/ui/Button'
import UiCheckbox from '@/components/ui/Checkbox'
import {email , required , minLength} from 'vuelidate/lib/validators'
import messages from "@/plugins/utils/messages"
import Input from "@/components/ui/Input";


export default {
  name: "Login",
  validations: {
    email: {email , required},
    password: {required , minLength: minLength(8)},
  },
  components: {
    UiButton , UiCheckbox , Input ,
  },
  methods: {
    async onSubmit(email , password , isChecked){
        const formData = {
          email: email,
          password: password,
          remember : isChecked
        }
        await this.$store.dispatch('login', formData)
              .then(() => this.$router.push('/'))
              .catch(err => {
                console.log(err)
                this.$router.push('/login')
              })
    },
    test(e){
      
      if(this.elRemember === e.target) console.log(e.target)
    },
    test2(e){
      this.elRemember = e.target

    }
  },
  data() {
    return {
      title : 'Войти',
      title_checkbox : 'Оставаться в сети',
      email : '',
      password : '',
      isChecked : false,
    }
  },
  mounted() {
    if (messages[this.$route.query.message]){
      this.$message(messages[this.$route.query.message])
    }
  },
}
</script>

<style lang="scss" scoped>
// @import '~materialize-css/dist/css/materialize.min.css';
@import 'src/assets/css/variables.scss';
@import 'src/assets/css/login-page.scss';
</style>