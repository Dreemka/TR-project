<template>
  <div>

      <li>
        <span :class="{done: todo.completed}">
          <input type="checkbox" v-on:change="todo.completed = !todo.completed">
          <strong>{{todo.id}}</strong>
          {{todo.title}}
        </span>
        <UiButton v-on:click="$emit('remove-todo' , todo.id)"
                  :title="title"></UiButton>

      </li>

  </div>
</template>

<script>
import UiButton from '@/components/ui/Button'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title : 'Удалить',
    }
  },
  components: {
    UiButton
  },
}
</script>
<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}
.done {
  text-decoration: line-through;
}
input {
text-line-through: none;
}
</style>