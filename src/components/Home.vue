<template>
  <div>
    <h2>your minimalist to-do list</h2>
    <TodoList v-bind:fullList="todos"/>
    <router-link
      to="/add"
    >
      new to-do
    </router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

const todolist = [
  {id: 1, isDone: true, name: "do the dishes"},
  {id: 2, isDone: false, name: "buy a new charger for smartwatch"},
  {id: 3, isDone: false, name: "review pull request"},
  {id: 4, isDone: false, name: "get things done"}
]

export default {
  name: "Home.vue",
  components: {TodoList},
  data() {
    return {
      todos: todolist
    }
  }
}
</script>

<style scoped>

</style>
