<template>
  <form @submit.prevent="onSubmit(value)">
    <input type="text" v-model="value">
    <UiButton :title="title" type="submit"></UiButton>
  </form>
</template>

<script>
import UiButton from '@/components/ui/Button'

export default {
  methods : {
    onSubmit(value){
      if (value.trim()){
        const newTodo = {
          id : Date.now(),
          title: value,
          completed: false
        }
        this.$emit('add-todo' , newTodo)
        this.value = ""
      }
    }
  },
  components: {
    UiButton
  },
  data(){
    return {
      title : 'Добавить',
      value : '',
    }
  }
}
</script>