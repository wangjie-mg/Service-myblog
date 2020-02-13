const User = require('../lib/user').User;
function add(req,res){
  const a=JSON.parse(Object.keys(req.body)[0]);
  const user = new User({
      name:a.name,
      password: a.password,
      gender: a.gender,
      dio:a.dio,
      ava:Math.floor(Math.random() * 4), 
      avc:Math.floor(Math.random() * 4)
  });
  user.save((err, docs) => {
  if (err) {
    res.send({ 'code': 1, 'errorMsg': '新增失败' });
  } else {
    res.send({ "code": 0, 'message': '新增成功' });
  }
  });
}

module.exports = add;