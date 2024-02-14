const express = require( 'express' )  ;

const userRouter = express.Router()  ;

const { registerUser , loginUser , logoutUser } = require( '../controllers/userRoutesController' )  ;

userRouter.post( '/register' , registerUser )  ;

userRouter.post( '/login' , loginUser )  ;

userRouter.get( '/logout' , logoutUser )   ;

module.exports = { userRouter }  ;