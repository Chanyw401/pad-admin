import router from './index'
import store from '@/store'


router.beforeEach(async (to, from, next) => {
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

                            next(`/login?redirect=${to.path}`);

                    });
                } catch (error) {
                        await store.dispatch('user/logingOut');
                        next(`/login?redirect=${to.path}`);
                }
            }
        }
    }
});