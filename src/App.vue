<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
    <AddTodo/>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
    AddTodo
  }
}
</script>

<style>

</style>
