const { ProductModel } = require( '../models/productModel' )  ;

const getWomenProducts = async ( req , res ) => {

    try {

        const products = await ProductModel.find( { 'category' : 'women' } )  ;

        res.status(200).send( products )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    } 
    
} 

module.exports = { getWomenProducts }  ;