import Vue from 'vue'
import Router from 'vue-router'
// import hello from '@/views/hello/router'
import index from '@/views/index/router'
import cosplay from '@/views/cosplay/router'
import shouban from '@/views/shouban/router'
import qingxiaoshuo from '@/views/qingxiaoshuo/router'
import manhua from '@/views/manhua/router'
import login from '@/views/login/router'
import register from '@/views/register/router'
import admin from '@/views/admin/router'
const NotFound = () => ({
  component: import ('@/components/NotFound')
})
const ShopPage = () => ({
  component: import ('@/components/ShopPage')
})



Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    
    ...index,
    ...login,
    ...register,
    ...cosplay,
    ...manhua,
    ...shouban,
    ...qingxiaoshuo,
    ...admin,
    {
      path:'/ShopPage',
      name:'ShopPage',
      component:ShopPage
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    },
  ]
})
