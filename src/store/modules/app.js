const state = {
  showLogin: false,
  systemTitle: '',
  menuBar: {
    opened: localStorage.getItem('menuBarStatus') ? !!+localStorage.getItem('menuBarStatus') : true,
    withoutAnimation: true
  },
  noNos: false
}

const mutations = {
  setShowLogin(state, status) {
    state.showLogin = status;
  },
  setSystemTitle(state, name) {
    state.systemTitle = name;
  },
  TOGGLE_MENU: state => {
    state.menuBar.opened = !state.menuBar.opened
    state.menuBar.withoutAnimation = false
    if (state.menuBar.opened) {
      localStorage.setItem('menuBarStatus', 1)
    } else {
      localStorage.setItem('menuBarStatus', 0)
    }
  },
}

const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
