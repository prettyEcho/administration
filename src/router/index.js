import Vue from 'vue'
import Router from 'vue-router'
import Element from '../components/element'
import Form from '../components/form'
import Table from '../components/table'
import Panel from '../components/panel'
import Nav from '../components/nav'
import Login from '../components/login'
import Icons from '../components/icons'
import Grids from '../components/grids'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Element
    },
    {
      path: '/elements',
      name: 'elements',
      component: Element
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/panel',
      name: 'panel',
      component: Panel
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    },
    {
      path: '/grids',
      name: 'grids',
      component: Grids
    }
  ]
})
