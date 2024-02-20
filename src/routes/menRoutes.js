const express = require( 'express' )  ;



const { getMenProducts } = require( '../controllers/menRoutesController' )  ;


const menRouter = express.Router()  ;


menRouter.get( '/' , getMenProducts )  ;


module.exports = { menRouter }  ;