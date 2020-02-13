const User = require('../lib/user').User;

function remove(req,res){
  const a=JSON.parse(Object.keys(req.body)[0]);
  const name = a.name;
  const whereid = { 'name': name };
  User.remove(whereid, (err, docs) => {
    if (err) {
      res.send({ 'code': 1, 'errorMsg': '删除失败' });
    } else {
      res.send(docs);
    }
  });
}

module.exports = remove;