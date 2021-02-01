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

export default {
  name: "TodoList",
  props: {
    fullList: {
      type: Array,
      required: true,
      default: (() => {
        return []
      })
    }
  },
  data() {
    return {
      todos: this.props.fullList
    }
  }
}

</script>

<style scoped>

</style>
