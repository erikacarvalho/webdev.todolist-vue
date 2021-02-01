<template>
  <div>
    <h2>your minimalist to-do list</h2>
    <TodoList/>
    <router-link
      to="/add"
    >
      new to-do
    </router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "Home.vue",
  components: {TodoList},
}
</script>

<style scoped>

</style>
