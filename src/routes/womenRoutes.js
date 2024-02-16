const express = require( 'express' )  ;


const { auth } = require( '../controllers/auth' )  ;


const womenRouter = express.Router()  ;


womenRouter.get( '/' , auth , ( req , res ) => {

    res.send( { 'msg' : 'this is the women page' } )  ;
    
} )  ;


module.exports = { womenRouter }  ;