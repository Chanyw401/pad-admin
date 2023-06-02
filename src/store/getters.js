const getters = {
  menuBar: state => state.app.menuBar,
  size: state => state.app.size,
  device: state => state.app.device,
  showLogin: state => state.app.showLogin,
  systemTitle: state => state.app.systemTitle,
  noNos: state => state.app.noNos,

  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  errorLogs: state => state.errorLog.logs,

  routes: state => state.permission.routes,
  menu: state => state.permission.menu,

  userName: state => state.user.userName,
  schoolName: state => state.user.schoolName,
  userType: state => state.user.userType,
  roles: state => state.user.roles,
  hasInfo: state => state.user.hasInfo
}
export default getters
