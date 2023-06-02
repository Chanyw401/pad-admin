import Vue from "vue";
import VueRouter from "vue-router";
import NosUi from 'nos-ui'
let Layout = NosUi.Layout

Vue.use(VueRouter);

/**
 * 任一满足即可
 * userType:[number/string]  //userType: 0 超级管理员 1管理员 2老师 3学生
 * roles:[string]   //后台配置的角色列表：name
 *
 * showTag:Boolen   //是否显示顶部标签，优先级：child > parent
 *
 * activeMenu: fullPath,  //高亮菜单的完整路径
 * activeTag: fullPath, //高亮顶部标签的完整路径
 * activeTagName: string, //高亮顶部标签的显示名称（应与菜单名一致）
 *
 * affix:Boolen //是否固定展示标签(必须写在layout组件路由上)
 * parentIcon:string //父菜单的图标
 */

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: NosUi.Redirect
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/view-pdf",
    name: "ViewPdf",
    component: () => import("@/views/view-pdf/view-pdf.vue"),
    meta: {
      title: "PDF",
      noLogin: true
    }
  }
];

export const indexRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index.vue'),
        name: 'Index',
        meta: {
          title: '首页',
          icon: 'icon-home',
          affix: true,
          // userType: [0, 1]
        }
      },
    ]
  }
]

export const menuRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      showTag: true
    },
    children: [
    ]
  }
];

export const roleRouter = [
  { path: "*", redirect: "/login" }
];

const createRouter = () => new VueRouter({
  routes: constantRoutes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
