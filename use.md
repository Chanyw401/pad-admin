## 工具

```
options：参数与官网一致

this.$tool.msg(options) //消息提示
this.$tool.confirm(options) //弹窗确认
```

```

export const menuRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      showTag: true
    },
    children: [
      {
        path: "project-manage",
        name: "ProjectManage",
        component: () => import("@/views/admin/project-manage.vue"),
        meta: {
          title: "项目管理",
          icon: 'icon-paper'
        }
      },
      {
        path: "users",
        name: "Users",
        component: () => import("@/views/sys/users.vue"),
        meta: {
          title: "用户管理",
          icon: 'icon-user',
          affix:true
        }
      },
      {
        path: "page1",
        name: "Page1",
        component: () => import("@/views/admin/page1.vue"),
        meta: {
          title: "页面1",
          parentIcon: 'icon-book'
        }
      },
      {
        path: "page2",
        name: "Page2",
        component: () => import("@/views/admin/page2.vue"),
        meta: {
          title: "页面2"
        }
      },
      {
        path: "menu-manage",
        name: "MenuManage",
        component: NosAuthority.MenuManage,
        meta: {
          title: "菜单管理",
          icon:'icon-menu'
        }
      }
    ]
  }
];

export const roleRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      // userType: [0, 1],
      // roles: ['经理', '董事长']
    },
    children: [
      {
        path: "judges-manage",
        name: "JudgesManage",
        component: () => import("@/views/admin/judges-manage.vue"),
        meta: {
          title: "评委管理",
          activeMenu: '/project-manage',
          activeTag: '/project-manage',
          activeTagName: '项目管理'
        }
      },
      {
        path: "work-manage",
        name: "WorkManage",
        component: () => import("@/views/admin/work-manage.vue"),
        meta: {
          title: "作品管理",
          activeMenu: '/project-manage',
          activeTag: '/project-manage',
          activeTagName: '项目管理',
          // userType: [0, 1],
          // roles: ['经理']
        }
      },
    ]
  },
  {
    path: "/score-statistics",
    name: "ScoreStatistics",
    component: () => import("@/views/admin/score-statistics.vue"),
    meta: {
      title: "评分统计",
      // userType: [0, 1],
      // roles: ['职员', '项目经理']
    }
  },
  {
    path: "/upload-work",
    name: "UploadWork",
    component: () => import("@/views/student/upload-work.vue"),
    meta: {
      title: "作品上传",
      // userType: [2],
      // roles: ['职员', '项目经理']
    }
  },
  {
    path: "/scheme-review",
    name: "SchemeReview",
    component: () => import("@/views/judge/scheme-review.vue"),
    meta: {
      title: "方案评审",
      // userType: [3],
      // roles: ['职员', '项目经理']
    }
  },
  { path: "*", redirect: "/login" }
];

```