import Home from './components/Home'
import AddTodo from './components/AddTodo'

export const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/add',
    component: AddTodo
  },
  {
    path: '',
    redirect: '/home'
  }
]
