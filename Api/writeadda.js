const write = require('../lib/user.js').Write;

function writeadda(req,res){
    const a=JSON.parse(Object.keys(req.body)[0]);
    const ids={
        "_id":a._id,
    }
    write.updateOne(ids,{
        '$push':{
            numc:{
                lname:a.name,
                lava:a.ava,
                lavc:a.avc,
                lvalue:a.value,
            }
        }
    },function(err,docs){
        if (err) {
          res.send({ 'code': 1, 'errorMsg': '新增失败' });
        } else {
          res.send({ "code": 0, 'message': '新增成功'} );
        }
      })
}

module.exports = writeadda;