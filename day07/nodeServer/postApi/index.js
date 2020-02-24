const Ut = require("../utensil");
const readFile = Ut.readFile;
const writeFile = Ut.writeFile;

module.exports = app => {
  app.post("*", (req, res) => {
    // post参数用req.body获取
    switch (req.path) {
      // 注册接口
      case "/registry":
        var username = req.body.username;
        var password = req.body.password;
        if (
          username &&
          username.length >= 2 &&
          password &&
          password.length >= 6
        ) {
          // 生成id
          let token = Buffer.from(
            JSON.stringify({
              u: username,
              p: "cn" + password + parseInt(Math.random() * 1000)
            }),
            "ascii"
          ).toString("base64");
          let uid = token.substr(1, 10).toLocaleUpperCase();
          readFile("user/index.json", data => {
            // 先查找，如果有用户就不能创建，没有就插入
            const item = data.find(item => item.username === username);
            if (item) {
              return res.json({ code: 0, msg: "对不起，该用户已存在" });
            } else {
              data.push({
                uid,
                token,
                username,
                password,
                loginState: false
              });
              // 插入到数据库文件中
              writeFile("user/index.json", data, state => {
                if (state) {
                  return res.json({ code: 1, msg: "创建成功！" });
                } else {
                  return res.json({ code: 0, msg: "写入数据库失败！" });
                }
              });
            }
          });
        } else {
          res.json({ code: 0, msg: "账户不小于2位，密码不小于6位" });
        }
        break;
      // 登陆接口
      case "/login":
        var username = req.body.username;
        var password = req.body.password;
        // 后端经过简单验证之后，对比数据库的信息校验用户数据
        readFile("user/index.json", data => {
          let item = data.find(item => item.username === username);
          let index = data.findIndex(item => item.username === username);
          if (item) {
            // 判断密码是否一致
            if (item.password === password) {
              item.loginState = true;
              data[index] = item;
              let { password, ...reset } = item;
              writeFile("user/index.json", data, state => {
                if (state) {
                  res.json({ code: 1, msg: "登陆成功！", data: reset });
                } else {
                  res.json({ code: 0, msg: "数据库写入失败！" });
                }
              });
            } else {
              res.json({ code: 0, msg: "密码不对！" });
            }
          } else {
            res.json({ code: 0, msg: "没有该账户！" });
          }
        });
        break;
      default:
        next();
    }
  });
};
