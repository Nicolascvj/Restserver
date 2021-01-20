const mogoose =require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');


let Schema= mogoose.Schema;


let rolesValidos = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let usuarioSchema=new Schema({
nombre:{
    type: String,
    required:[true,'El nombre esrequerido']
},
email:{
    type: String,
    
    required:[true,'El e-mail es necesario'],
    unique:true,

},
password:{
    type:String,
    required:[true,'El password es obligatorio']
},
img:{
    type:String,
    required:false
},
role:{
    type:String,
    default:'USER_ROLE',
    enum: rolesValidos
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

usuarioSchema.plugin(uniqueValidator,{message:'{PATH} debe ser unico'});

usuarioSchema.methods.toJSON=function(){
    let user=this;
    let userObject=user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports=mogoose.model('Usuario',usuarioSchema);