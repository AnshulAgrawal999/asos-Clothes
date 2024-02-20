const { ProductModel } = require( '../models/productModel' )  ;

const getMenProducts = async ( req , res ) => {

    try {

        const products = await ProductModel.find( { 'category' : 'men' } )  ;

        res.status(200).send( products )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    } 
    
} 

module.exports = { getMenProducts }  ;