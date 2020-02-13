const jwt = require('jsonwebtoken');
const write = require('../lib/user.js').Write;

function writeadd(req,res){
    const a=JSON.parse(Object.keys(req.body)[0]);
    const token = req.headers.authorization;
    const decoded = jwt.decode(token);
    const str = a.write.substring(0,200);    
    write.create({
      auther:decoded.name,
      name:a.name,
      about:str,
      writetype:a.writetype,
      writetitle:a.writetitle,
      write:a.write,
      numa:0,
      numb:0,
      numc:[],
      ava:a.ava,
      avc:a.avc,
  },function(err,docs){
    if (err) {
      res.send({ 'code': 1, 'errorMsg': '新增失败' });
    } else {
      res.send({ "code": 0, 'message': '新增成功' ,id:docs._id});
    }
  })
}

module.exports = writeadd;