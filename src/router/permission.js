import router from './index'
import store from '@/store'
import NosUi from 'nos-ui';
let Tool = NosUi.Tool;

router.beforeEach(async (to, from, next) => {
    if (to.query.token) {
        Tool.setToken(to.query.token);
    }
    if (to.path == '/login') {
        next();
    } else {
        if (to.meta.noLogin) {
            next();
        } else {
            const hasInfo = store.getters.hasInfo;
            if (hasInfo) {
                next();
            } else {
                try {
                    store.dispatch('user/getUserInfo').then(async userInfo => {
                        const asyncRoutes = await store.dispatch('permission/generateRoutes', userInfo)
                        router.addRoutes(asyncRoutes)
                        next({ ...to, replace: true })
                    }).catch(() => {
                        if (parent.layui) {
                            top.location.href = Tool.getServeUrl() + "/page/sys/login.html";
                        } else {
                            next(`/login?redirect=${to.path}`);
                        }
                    });
                } catch (error) {
                    if (parent.layui) {
                        top.location.href = Tool.getServeUrl() + "/page/sys/login.html";
                    } else {
                        await store.dispatch('user/logingOut');
                        next(`/login?redirect=${to.path}`);
                    }
                }
            }
        }
    }
});