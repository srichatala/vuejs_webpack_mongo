import Vue from 'vue'
import Router from 'vue-router'
import FormResults from '@/components/FormResults'
import FormSubmit from '@/components/FormSubmit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/presence-finder-results',
      name: 'FormResults',
      component: FormResults
    }
  ]
})

