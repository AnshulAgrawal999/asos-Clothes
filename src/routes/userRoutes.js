const express = require( 'express' )  ;


const { registerUser , loginUser , logoutUser , refreshToken } = require( '../controllers/userRoutesController' )  ;


const userRouter = express.Router()  ;


userRouter.post( '/register' , registerUser )  ;

userRouter.post( '/login' , loginUser )  ;

userRouter.post( '/logout' , logoutUser )   ;

userRouter.get( '/refreshtoken' , refreshToken )  ;



module.exports = { userRouter }  ;