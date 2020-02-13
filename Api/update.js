const User = require('../lib/user').User;

function up(req, res){
  const a=JSON.parse(Object.keys(req.body)[0]),
  name = a.name,
 password = a.pssword,
 gender = a.gender,
 dio = a.dio;
const updateStr = {
  name: name,
  password : password,
  gender : gender,
  dio : dio
};
const ids = {
  name: a.findname
};
User.update(ids, updateStr, (err) => {
  if (err) {
    res.send({ 'code': 1, 'errorMsg': '更新失败' });
  } else {
    res.send({ 'code': 0, 'errorMsg': '更新成功' });
  }
});
}

module.exports = up;