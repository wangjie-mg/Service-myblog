const jwt = require("jsonwebtoken");
const User = require('../lib/user.js').User;

function login(req, res) {
  const a=JSON.parse(Object.keys(req.body)[0]);
  const name = a.name;
  const password = a.password;
  User.findOne({"name":name,"password":password}, (err, doc) => {
    console.log(doc);
    if (doc) {
      const qwe = jwt.sign({"name":name,"admin": true},'abcd',{
        expiresIn:"48h"
      })
      return res.json({ 
        code: 0,
        msg: '登录成功',
        token: qwe
     });
    } else {
      console.log("失败");
      return res.send({ 'code': 1, errorMsg: err || '用户名或密码错误' });
    }
  });
  
}
module.exports=login;