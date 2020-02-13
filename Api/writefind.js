const User = require('../lib/user.js').Write;

  function find(req, res){
  const a = JSON.parse(Object.keys(req.body)[0]);
  if (a.msg!=="all") {
    User.findById(a._id,(err,doc)=>{
      if(err){
        res.json({'code':1,'errorMsg': '网络错误'});
      }else{
        res.json(doc);
      }
    })
  }else{
    User.find((err, docs) => {
      if (err) {
      res.send({ 'code': 1, 'errorMsg': '查询失败' });
      } else {
        let a=[];
        for(let i=docs.length-1;i>=0;i--){
          a.push({
            _id:docs[i]._id,
            auther:docs[i].auther,
            name: docs[i].name,
            about:docs[i].about,
            writetype:docs[i].writetype,
            writetitle:docs[i].writetitle,
            numa:docs[i].numa,
            numb:docs[i].numb,
            numc:docs[i].numc,
            ava:docs[i].ava,
            avc:docs[i].avc,
          })
        }
        res.json(a);
      }
      })
  }

  


}
  

module.exports = find;