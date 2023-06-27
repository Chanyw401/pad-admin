/**
 * @author yjf.fly
 */
const getServeUrl = () => {
  if (process.env.NODE_ENV == "production") {
    return process.env.VUE_APP_SERVE_URL || window.location.origin;
  } else {
    return "http://nos-robot.aieraonline.cn";
  }
};

export default {
  getServeUrl
};
