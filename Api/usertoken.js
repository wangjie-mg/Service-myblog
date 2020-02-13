const jwt = require('jsonwebtoken');
const User = require('../lib/user.js').User;

function usersession(req,res){
  let token = req.headers.authorization;
  var decoded = jwt.decode(token);
  let flag = false ;
  
  // 验证token合法性 对token进行解码，解码方式要和加密方式一样
  jwt.verify(token,'abcd',function(err,decode){
      if(err){
          res.json({
              msg:'当前用户未登录',
              code:flase
            });
      }else {
            flag = true;
      }
  })
      if(flag){
        const obj={'name' : decoded.name};
        User.findOne(obj, (err, docs) => {
        if (err) {
          res.send({ 'code': 0, 'errorMsg': '查询失败' });
        } else {      
          console.log(docs)
          res.json({
            name:docs.name,
            gender:docs.gender,
            dio:docs.dio,
            ava:docs.ava,
            avc:docs.avc,
            code:1
          })
        }
        })
      }
}

module.exports = usersession;