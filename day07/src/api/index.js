import axios from "axios";
import { Message } from "element-ui";
const Axios = axios.create({
  baseURL: "http://localhost:3000/"
});

// axios请求本地数据
const getData = () => {
  return axios.get("/api/homeApi.json").then(res => {
    return res.data;
  });
};
getData().then(res => {
  console.log("wo de ");
  console.log(res);
});
// 处理返回值方法
const resetData = res => {
  if (res.status === 200) {
    if (res.data.code === 1) {
      // 成功
      return res.data;
    } else {
      // 接口返回值里的不成功
      Message.error({
        offset: 100, // 距离顶部距离
        message: res.data.msg || "操作失败！"
      });
      return false;
    }
  } else {
    // ajax请求出问题，网络原因
    Message.error("网络错误，稍后重试！");
    return false;
  }
};
// 登陆
export const loginApi = userData => {
  return Axios.post("login", userData).then(res => {
    return resetData(res);
  });
};
