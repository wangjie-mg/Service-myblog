const User = require('../lib/user').User;
function signup(req,res){
    const a=JSON.parse(Object.keys(req.body)[0]);
    const name = a.name,
        password = a.password,
        gender = a.gender,
        dio = a.dio;
    const regUser = new User({
      name: name,
      password: password,
      gender:gender,
      dio:dio,
      ava:Math.floor(Math.random() * 15), 
      avc:Math.floor(Math.random() * 15)
    });
    // 先到数据库判断该用户名是否已经注册过
    User.findOne({name: name}, (err1, doc1) => {
      if (err1) {
        return res.send({ 'code': 1, 'errorMsg': '网络异常错误' });
      } else if (doc1) {
        return res.send({ 'code': 1, 'errorMsg': '用户名已经存在' });
      } else {
        // 用户注册保存用户
        regUser.save((err2, docs2) => {
          if (err2) {
            return res.send({code: 1, errorMsg: err2 || '注册失败'});
          } else {
            return res.send({code: 0, msg: '注册成功'});
          }
        });
      }
    });
}

module.exports = signup;