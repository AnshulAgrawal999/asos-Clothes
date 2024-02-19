const express = require( 'express' )  ;


const { auth } = require( '../controllers/auth' )  ;

const { getMenProducts } = require( '../controllers/menRoutesController' )  ;


const menRouter = express.Router()  ;


menRouter.get( '/' , auth , getMenProducts )  ;


module.exports = { menRouter }  ;