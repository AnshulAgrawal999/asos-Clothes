const express = require( 'express' )  ;


const { auth } = require( '../controllers/auth' )  ;

const { getWomenProducts } = require( '../controllers/womenRoutesController' )  ;


const womenRouter = express.Router()  ;


womenRouter.get( '/' , auth , getWomenProducts )  ;


module.exports = { womenRouter }  ;