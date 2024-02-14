const mongoose = require( 'mongoose' ) ;

const blackListSchema = mongoose.Schema(
{
    token :{ type:String , required : true } 
},
{
    versionKey : false
}
)  ;

const BlackListModel = mongoose.model( 'token' , blackListSchema )  ;

module.exports = { BlackListModel }  ;

