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
        return
    }
    if (to.meta.noLogin) {
        next();
        return
    }
    const hasInfo = store.getters.hasInfo;
    if (hasInfo) {
        next();
        return
    }

                const asyncRoutes = await store.dispatch('permission/generateRoutes')
                router.addRoutes(asyncRoutes)
                next({...to, replace: true})
});