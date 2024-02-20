const mongoose = require( 'mongoose' )  ;


const cartSchema = mongoose.Schema(
{
    firstname : { type : String , required : true },
    image : { type : String , required : true },
    title : { type : String , required : true },
    prize : { type: String , required : true },
    category: { type: String, required : true },
    productcode : { type: String , required : true },
    email : { type: String , required : true }
},
{
    versionKey : false
}
)

const CartModel = mongoose.model( "cart" , cartSchema )  ;


module.exports = { CartModel } ;