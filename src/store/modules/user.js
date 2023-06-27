import axios from "@/utils/request.js";
import { resetRouter } from '@/router'

const state = {
    userName: "",
    userType: 0,
    schoolName: "",
    roles: [],
    hasInfo: false
}

const mutations = {
    setUserName: (state, name) => {
        state.userName = name;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    SET_USERTYPE: (state, type) => {
        state.userType = type
    },
    SET_HASINFO: (state, hasInfo) => {
        state.hasInfo = hasInfo
    },
    setSchoolName: (state, name) => {
        state.schoolName = name;
    }
}

const actions = {
    getUserInfo({ commit }) {
        return new Promise((resolve, reject) => {
            axios.post("/admin/me", {}, {
                loading: false
            }).then(info => {
                // info.userType = parseInt(Math.random() * 3);
                // info.roleList = [['职员', '项目经理'],['经理', '董事长'], ['经理'] ][parseInt(Math.random() * 2)];
                commit('SET_HASINFO', true);
                commit('setUserName', info.userName);
                commit('setSchoolName', info.schoolName || '');
                commit('SET_USERTYPE', info.userType === undefined ? '' : info.userType);
                commit('SET_ROLES', info.roleList);
                resolve(info);
            }).catch(error => {
                reject(error);
            });
        })
    },
    login({ commit }, { data, option }) {
        return new Promise((resolve, reject) => {
            axios.post('/passport/login', data, {
                loading: true,
                ...option
            }).then((res) => {
                commit('SET_HASINFO', false);
                commit('setUserName', '');
                commit('SET_USERTYPE', '');
                commit('SET_ROLES', '');
                resolve(res);
            }).catch((error) => {
                console.log(error)
                reject(error);
            });
        });
    },
    logingOut({ commit, dispatch }) {
        return new Promise((resolve) => {
            commit('SET_HASINFO', false);
            commit('setUserName', '');
            commit('SET_USERTYPE', '');
            commit('SET_ROLES', '');
            resetRouter();

            dispatch('tagsView/delAllViews', null, { root: true })
            resolve();
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}