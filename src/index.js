const express = require( 'express' )  ;

const cors = require( 'cors' )  ;

const dotenv = require( 'dotenv' )  ;


const { connection } = require( './configs/db' )  ;

const { userRouter } = require( './routes/userRoutes' )  ;

const { adminRouter } = require( './routes/adminRoutes' )  ;

const { menRouter }  = require( './routes/menRoutes' )  ;

const { womenRouter }  = require( './routes/womenRoutes' )  ;



dotenv.config() ;

const port = process.env.port  ;

const app = express()  ;


app.use( cors() )  ;

app.use( express.json() )  ;


app.use( '/user' , userRouter )  ;

app.use( '/admin' , adminRouter )  ;

app.use( '/men' , menRouter )  ;

app.use( '/women' , womenRouter )  ;


app.get( '/' , ( req , res ) => {

    res.send( { 'msg' : 'this is the asos home page' } )  ;
    
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