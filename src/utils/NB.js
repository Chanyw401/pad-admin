/**
 * @author yjf.fly
 */
const getServeUrl = () => {
  if (process.env.NODE_ENV == "production") {
    return process.env.VUE_APP_SERVE_URL || window.location.origin;
  } else {
    // return "http://192.168.2.34:9098";
    // return "http://ccf-scheme.aieraonline.cn";
    // return "http://192.168.2.79:9098";
    // return "http://192.168.2.47:8011";
    return "http://freight.aieraonline.cn";
  }
};

export default {
  getServeUrl
};
