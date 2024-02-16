const mongoose = require( 'mongoose' )  ;


const userSchema = mongoose.Schema(
{
    firstname : { type : String , required : true },
    lastname : { type : String , required : true },
    email : { type: String , required : true },
    DOB : { type: String , required : true },
    password : { type : String , required : true }
},
{
    versionKey : false
}
)

const UserModel = mongoose.model( "user" , userSchema )  ;


module.exports = { UserModel } ;