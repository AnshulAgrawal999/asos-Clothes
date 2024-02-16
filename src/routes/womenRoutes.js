const express = require( 'express' )  ;


const { auth } = require( '../controllers/auth' )  ;

const { ProductModel } = require( '../models/productModel' )  ;


const womenRouter = express.Router()  ;


womenRouter.get( '/' , auth , async ( req , res ) => {

    try {

        const products = await ProductModel.find( )  ;

        res.status(200).send( products )  ;

    } catch (error) {
        res.status(400).send( {error} )  ;
    } 
    
} )  ;


module.exports = { womenRouter }  ;