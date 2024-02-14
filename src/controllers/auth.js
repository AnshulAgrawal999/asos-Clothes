const jwt = require( 'jsonwebtoken' )  ;

const { BlackListModel } = require( '../models/blackList' )  ;

const dotenv = require( 'dotenv' )  ;

dotenv.config()  ;

const auth = async ( req , res , next ) => {

    const accessToken = req.headers.authorization  ;

    const item = await BlackListModel.findOne( { accessToken } )  ;

    if ( !item )
    {
        jwt.verify( accessToken , process.env.accessSecretKey , function(err, decoded) 
        {
            if ( !err )
            {
                req.body.email = decoded.email  ;

                next()  ;
            }
            else
            {
                res.send( { "error" : err } )  ;
            }
        });
    }
    else
    {
        res.send( { "msg" : "Your are not logged in" } )  ;
    }      
} 

module.exports = { auth }  ;