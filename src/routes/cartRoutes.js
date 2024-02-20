const express = require( 'express' )  ;


const { getCart , addProductInCart , updateProductInCart , deleteProductInCart } = require( '../controllers/cartRoutesController' )  ;

const { auth } = require( '../controllers/auth' )  ;


const cartRouter = express.Router()  ;


cartRouter.post( '/' , auth , getCart )  ;

cartRouter.post( '/add' , auth , addProductInCart )  ;

cartRouter.patch( '/update/:id' , auth , updateProductInCart )  ;

cartRouter.delete( '/delete/:id' , auth , deleteProductInCart )  ;


module.exports = { cartRouter }  ;