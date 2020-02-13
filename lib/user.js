const mongoose = require('./db.js').mongooseuser;

// 创建一个模型
const UserSchema = mongoose.Schema({
  name: { type: String }, 
  password: { type: String}, 
  gender: { type: String },
  dio:{type:String},
  ava:{type:String},
  avc:{type:String}
});
const writeSchme = mongoose.Schema({
  auther:{type:String},
  name:{type:String},
  about:{type:String},
  writetype:{type:String},
  writetitle:{type:Array},
  write:{type:Object },
  numa:{type:Number},
  numb:{type:Number},
  numc:[
    {
      lname:String,
      lava:String,
      lavc:String,
      lvalue:String,
    }
  ],
  ava:{type:String},
  avc:{type:String}
});
// 导出model模块
const User = mongoose.model('User', UserSchema);
const Write = mongoose.model('write',writeSchme);
exports.User =User;
exports.Write = Write;