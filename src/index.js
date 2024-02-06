const express = require( 'express' )  ;

const app = express()  ;

const dotenv = require( 'dotenv' )  ;

const { connection } = require( './configs/db' )  ;

dotenv.config() ;

const port = process.env.port  ;


app.use( express.json() )  ;



app.get( '/' , ( req , res ) => {
    res.send( { 'msg' : 'this is the home page' } )  ;
} )  ;



app.listen( port , async ()=>{

    try {
        console.log( `server is running on http://localhost:${port}` )  ;
        
        await connection  ;

        console.log( 'server is connected to DB' )  ;

    } catch (error) {
        
        console.log( { error } )  ;
    }
 
} )  ;