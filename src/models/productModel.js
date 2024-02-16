const mongoose = require( 'mongoose' )  ;


const productSchema = mongoose.Schema(
{
    image : { type : String , required : true },
    title : { type : String , required : true },
    prize : { type: String , required : true },
    productcode : { type: String , required : true }
}
)

const ProductModel = mongoose.model( "product" , productSchema )  ;


module.exports = { ProductModel } ;