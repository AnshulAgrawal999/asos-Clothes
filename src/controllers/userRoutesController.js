const { UserModel } = require( '../models/userModel' )  ;

const bcrypt = require( 'bcrypt' ) ;

const jwt  = require( 'jsonwebtoken' )  ;

const { BlackListModel } = require( '../models/blackList' )  ;

const dotenv = require( 'dotenv' )  ;

dotenv.config()  ;

const registerUser = async ( req , res ) => {

    try {

        const { email , password } = req.body  ;

        const user = await UserModel.findOne( { email } )  ;

        if( !user )
        {   
            if ( password.length > 7 && (/\d/.test(password) )) 
            {
                bcrypt.hash( password , 5 , async function(err, hash) {
                    if( err )
                    {
                        res.send( { "error" : err } )  ;
                    }
                    else
                    {
                        const newuser = new UserModel( req.body )  ;

                        newuser.password = hash  ;

                        await newuser.save()  ;

                        res.status(200).send( { "msg" : "The new user has been registered", newuser } )  ;
                    }
                })  ;
            }
            else
            {
                res.send( { "msg" : "password should be at least 8 characters long and contain one number" } )  ;
            }
        }
        else
        {
            res.send( { "msg" : "Email is already registered, go to login" } )  ;
        }

        
    } catch (error) {
        res.status(400).send( { "error" : error } )  ;
    }
}

const loginUser = async ( req , res )=>{

    try {
        const { email , password  } = req.body  ;

        const user = await UserModel.findOne( { email } )  ;

        if( user )
        {
            bcrypt.compare( password , user.password , function(err, result) {
                if( err )
                {
                    res.send( { "error" : err } )  ;
                }

                if( result )
                {
                    const accessToken = jwt.sign( { email } , process.env.secretKey , { expiresIn: '30m' } )  ;

                    const refreshToken = jwt.sign( { email } , process.env.secretKey , { expiresIn: '1d' } )  ;

                    res.status(200).send( {"msg":"Login successful!", accessToken , refreshToken } )  ;
                }
                else
                {
                    res.send( { "msg" : "Password is incorrect" } )  ;
                }
            });
        }
        else
        {
            res.send( { "msg" : "Email is incorrect" } )  ;
        }

    } catch (error) {
        res.status(400).send( { "error" : error } )  ;
    }
} 

const logoutUser = async ( req , res ) => {
    try {
        const token = req.headers.authorization  ;

        const item = new BlackListModel( { token } )  ;

        await item.save()  ;

        res.status(200).send( {"msg":"User has been logged out" }  )  ;
        
    } catch (error) {
        res.status(400).send( { "error" : error } )  ;
    }
} 

const refreshtoken = ( req , res ) => {

    try {
        const refreshToken = req.headers.authorization  ;
  
        jwt.verify( refreshToken , process.env.secretKey , ( err , decoded ) => {
            
            if ( err ) {
                return res.send( { "error" : err } )  ;
            }
        
            const newaccessToken = jwt.sign( { email } , process.env.secretKey , { expiresIn: '30m' } )   ;

            res.status(200).send({ "newaccessToken" : newaccessToken })  ;
        });

    } catch (error) {
        res.status(400).send( { "error" : error } )  ;
    }
}



module.exports = { registerUser , loginUser , logoutUser , refreshtoken }  ;