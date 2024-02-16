const express = require( 'express' )  ;


const { auth } = require( '../controllers/auth' )  ;


const menRouter = express.Router()  ;


menRouter.get( '/' , auth , ( req , res ) => {

    res.send( { 'msg' : 'this is the men page' } )  ;
    
} )  ;


module.exports = { menRouter }  ;