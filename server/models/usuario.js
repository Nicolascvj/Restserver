const mogoose =require('mongoose');

let Schema= mogoose.Schema;

let usuarioSchema=new Schema({
nombre:{
    type: String,
    required:[true,'El nombre esrequerido']
},
email:{
    type: String,
    required:[true,'El e-mail es necesario']
},
password:{
    type:String,
    required:[true,'E; password es obligatorio']
},
img:{
    type:String,
    required:false
},
role:{
    type:String,
    default:'USER_ROLE'
},
estado:{
    type:Boolean,
    default:true
},
google:{
    type:Boolean,
    default:false
}
});

module.exports=mogoose.model('Usuario',usuarioSchema);