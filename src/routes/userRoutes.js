const express = require( 'express' )  ;

const userRouter = express.Router()  ;

const { registerUser , loginUser , logoutUser , refreshToken } = require( '../controllers/userRoutesController' )  ;

userRouter.post( '/register' , registerUser )  ;

userRouter.post( '/login' , loginUser )  ;

userRouter.post( '/logout' , logoutUser )   ;

userRouter.get( '/refreshtoken' , refreshToken )  ;

module.exports = { userRouter }  ;