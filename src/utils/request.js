import axios from "axios";
// import { MessageBox } from "element-ui";
import NosUi from 'nos-ui';
let tool = NosUi.Tool;
import NB from './NB.js';
// import store from "../store/index.js";
// import router from "../router";

const service = axios.create({
  baseURL: NB.getServeUrl(),
  withCredentials: true
});

service.interceptors.request.use(
  config => {
    // console.log(config);
    config.headers = {
      ...config.headers,
      ...tool.getRequestHeader(),
    };
    if (!config.formData) {
      config.data = {
          data: config.data || {}
      };
    }
    if (config.loading) {
      if (window.loadingInstance) {
        window.loadingInstance.close();
      }
      // Loading.service().close();
      tool.loading();
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.config.loading) {
      // Loading.service().close();
      window.loadingInstance.close();
    }
    if (response.config.noResponse) {
      return response.data;
    }
    if (response.data.code != 200) {
      if (!response.config.noTip) {
        tool.msg({
          type: "error",
          message: response.data.message
        });
      }
      return Promise.reject(response.data);
    }
    // else {
    //   if (response.code != 200) {
    //     if (response.code == '401' || response.code == '403') {
    //       if (!response.config.noShowLogin) {
    //           router.push({
    //             path: '/login?redirect=' + encodeURIComponent(router.currentRoute.fullPath)
    //           });
    //       } else {
    //         tool.msg({
    //           type: "error",
    //           message: response.data.responseBody.message
    //         });
    //       }
    //     } else if (response.data.responseBody.code == '408') {
    //       MessageBox.alert('当前账号异地登录，请重新登录!', '提示', {
    //         confirmButtonText: '确定',
    //         callback: () => {
    //             router.push({
    //               path: '/login?redirect=' + encodeURIComponent(router.currentRoute.fullPath)
    //             });
    //         }
    //       });
    //     } else {
    //       if (!response.config.noTip) {
    //         tool.msg({
    //           type: "error",
    //           message: response.data.responseBody.message
    //         });
    //       }
    //     }
    //     return Promise.reject(response.data.responseBody);
    //   }
    // }
    let data = response.data.data;
    tool.dealJSONData(data);
    return data;
  },
  error => {
    if (window.loadingInstance) {
      window.loadingInstance.close();
    }
    // Loading.service().close();
    if (!error.config.noTip) {
      tool.msg({
        type: "error",
        message: "请求失败！"
      });
    }
    return Promise.reject({ code: 1030, message: '请求失败！' });
  }
);

export default service;
