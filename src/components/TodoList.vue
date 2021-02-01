<template>
  <div>
    <div v-if="!todos">
      loading...
    </div>
    <div v-else-if="todos.length === 0">
      there are no to-dos yet. go ahead and add one!
    </div>
    <div v-else>
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
        >
          <input type="checkbox" v-bind:checked="todo.isDone">
          {{ todo.name }}
          <span v-if="todo.isDone">
            <button>remove to-do</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const todolist = [
  {id: 1, isDone: true, name: "do the dishes"},
  {id: 2, isDone: false, name: "buy a new charger for smartwatch"},
  {id: 3, isDone: false, name: "review pull request"},
  {id: 4, isDone: false, name: "get things done"}
]

export default {
  name: "TodoList",
  data() {
    return {
      todos: todolist
    }
  }
}

</script>

<style scoped>

</style>
