const User = require('../lib/user.js').User;
function find(req, res){
const a = JSON.parse(Object.keys(req.body)[0]),
name = a.name,
msg= a.msg,
obj={};
if (name !== '' && msg!=="all") {
obj['name'] = name;
}
User.find(obj, (err, docs) => {
if (err) {
res.send({ 'code': 1, 'errorMsg': '查询失败' });
} else {
res.send(docs);
}
});
}
module.exports = find;
