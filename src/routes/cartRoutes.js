const express = require( 'express' )  ;


const { getCart , addProductInCart , updateProductInCart , deleteProductInCart } = require( '../controllers/cartRoutesController' )  ;


const cartRouter = express.Router()  ;


cartRouter.post( '/' , getCart )  ;

cartRouter.post( '/add' , addProductInCart )  ;

cartRouter.patch( '/update/:id' , updateProductInCart )  ;

cartRouter.delete( '/delete/:id' , deleteProductInCart )  ;


module.exports = { cartRouter }  ;