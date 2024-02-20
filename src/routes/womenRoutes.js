const express = require( 'express' )  ;


const { getWomenProducts } = require( '../controllers/womenRoutesController' )  ;


const womenRouter = express.Router()  ;


womenRouter.get( '/' , getWomenProducts )  ;


module.exports = { womenRouter }  ;