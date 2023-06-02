import axios from "@/utils/request.js";
import { constantRoutes, indexRouter, roleRouter, menuRouter } from "@/router"

let menuIcon;
const getIcon = (routes) => {
  let iconObj = {};
  routes.forEach((route) => {
    if (route.path != '/' && route.path != '*' && route.meta && route.meta.icon) {
      iconObj[route.path] = route.meta.icon;
    }
    if (route.meta && route.meta.parentIcon) {
      iconObj[route.path + '-parent'] = route.meta.parentIcon;
    }
    if (route.children) {
      const childIcon = getIcon(route.children);
      iconObj = { ...iconObj, ...childIcon }
    }
  });
  return iconObj;
}

let menuUrls = [];
const dealMenu = (menus, bindIcon) => {
  menus.forEach(menu => {
    if (bindIcon) {
      if (menu.child && menu.child.length) {
        menu.child.forEach(item => {
          if (menuIcon[item.url + '-parent']) {
            menu.icon = menuIcon[item.url + '-parent'];
          }
        });
      } else {
        menu.icon = menuIcon[menu.url] || menu.icon || '';
      }
    } else {
      menu.icon = 'icon-right-small';
    }
    if (menu.child && menu.child.length) {
      menu.child = dealMenu(menu.child);
    } else {
      menu.path = '/' + menu.url;
      menuUrls.push(menu.url);
    }
  });
  return menus;
}

const hasPermission = (route, userType, roles) => {
  if (userType === undefined) {
    userType = userType || '';
  }
  roles = roles || [];
  if (route.meta) {
    if ((route.meta.userType && route.meta.userType.length) || (route.meta.roles && route.meta.roles.length)) {
      let has = false;
      if (route.meta.userType && route.meta.userType.length && userType !== '') {
        has = route.meta.userType.some(type => type == userType);
      }
      if (!has && route.meta.roles && route.meta.roles.length && roles.length) {
        has = roles.some(role => route.meta.roles.includes(role));
      }
      return has;
    } else {
      return true;
    }
  } else {
    return true;
  }
}

const filterRoleRoute = (roleRoutes, userType, roles) => {
  let routes = [];
  roleRoutes.forEach(route => {
    const obj = { ...route };
    if (hasPermission(obj, userType, roles)) {
      if (obj.children) {
        obj.children = filterRoleRoute(obj.children, userType, roles);
      }
      routes.push(obj);
    }
  });
  return routes;
}

const getMenuRoute = (menuRoutes) => {
  let routes = [];
  menuRoutes.forEach(route => {
    const obj = { ...route };
    if (obj.path == '/' || obj.path == '*' || menuUrls.includes(obj.path)) {
      if (obj.children) {
        obj.children = getMenuRoute(obj.children);
      }
      routes.push(obj);
    }
  });
  return routes;
}

const state = {
  menu: [],
  routes: [],
  addRoutes: [],
}

const mutations = {
  SETMENU(state, menu) {
    state.menu = menu;
  },
  setUserType(state, type) {
    state.userType = type;
  },
  SETROUTES(state, routes) {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
}

const actions = {
  generateRoutes({ commit }, userInfo) {
    return new Promise(resolve => {
      let roleRoutes = filterRoleRoute(roleRouter || [], userInfo.userType, userInfo.roleList);
      let indexRoute = filterRoleRoute(indexRouter, userInfo.userType, userInfo.roleList);
      axios.post('/admin/menu/nav').then(res => {
        // res = JSON.parse('{"menus":[{"id":11,"pid":0,"name":"首页","url":"index","perms":null,"type":0,"icon":null,"child":[],"orderNum":null},{"id":11,"pid":0,"name":"项目管理","url":"project-manage","perms":null,"type":0,"icon":null,"child":[],"orderNum":null},{"id":12,"pid":0,"name":"用户管理","url":"users","perms":null,"type":0,"icon":null,"child":[],"orderNum":null},{"id":12,"pid":0,"name":"菜单管理","url":"menu-manage","perms":null,"type":0,"icon":null,"child":[],"orderNum":null},{"id":112,"pid":0,"name":"主菜单","url":"","perms":null,"type":0,"icon":null,"child":[{"id":113,"pid":112,"name":"页面1","url":"page1","perms":null,"type":0,"icon":null,"child":[],"orderNum":null},{"id":122,"pid":0,"name":"页面2","url":"page2","perms":null,"type":0,"icon":null,"child":[],"orderNum":null}],"orderNum":null}]}');
        // res.menus = [];
        if (!res.menus.length || res.menus[0].name != '首页') {
          res.menus.splice(0, 0, {
            "id": 11, "pid": 0, "name": "首页", "url": "index", "perms": null, "type": 0, "icon": null, "child": [], "orderNum": null
          });
        }
        menuIcon = getIcon(menuRouter.concat(indexRouter));
        commit('SETMENU', dealMenu(res.menus, true));
        let menuRoutes = getMenuRoute(menuRouter);
        let routes = indexRoute.concat(menuRoutes.concat(roleRoutes));
        commit('SETROUTES', routes);
        resolve(routes);
      });
    });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
