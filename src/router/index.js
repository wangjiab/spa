import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
Vue.use(Router)

//组件
const Hello = resolve => require(['@/components/Hello'], resolve);
const wjb = resolve => require(['@/components/wjb'], resolve);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: "/wjb",
          name: "wjb",
          component: wjb
        }
      ]
    },

  ]
})
