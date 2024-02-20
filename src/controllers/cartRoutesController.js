const { CartModel } = require( '../models/cartModel' )  ;


const getCart = async ( req , res ) => {
    try {

        const { email } = req.body  ;

        const products = await CartModel.find( { email } )  ;

        res.status(200).send( products )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    } 
}

const addProductInCart = async ( req , res )=>{

    try {
        
        const product = new CartModel( req.body )  ;

        await product.save()  ;

        res.status(201).send( { "msg":"Product added" , product } )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    }
}

const updateProductInCart = async ( req , res )=>{

    try {

        const id = req.params.id  ; 

        await CartModel.updateOne( { 'email' : req.body.email , '_id' : id } , req.body )  ;

        res.status(201).send( {"msg":"Product has been updated"} )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    }
}

const deleteProductInCart = async ( req , res )=>{
    
    try {
        const id = req.params.id  ; 

        await CartModel.deleteOne( { 'email' : req.body.email , '_id' : id } )  ;

        res.status(200).send( {"msg":"Product has been deleted"} )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    }
} 


module.exports = { getCart , addProductInCart , updateProductInCart , deleteProductInCart }  ;