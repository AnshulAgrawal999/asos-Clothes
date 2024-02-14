const express = require( 'express' )  ;

const { connection } = require( './configs/db' )  ;

const port = process.env.port  ;

const dotenv = require( 'dotenv' )  ;

const { userRouter } = require( './routes/userRoutes' )  ;

const { auth } = require( './controllers/auth' )  ;

const cors = require( 'cors' )  ;

const app = express()  ;

dotenv.config() ;

app.use( cors() )  ;

app.use( express.json() )  ;

app.use( '/users' , userRouter )  ;


app.get( '/' , ( req , res ) => {

    res.send( { 'msg' : 'this is the asos home page' } )  ;
    
} )  ;

app.get( '/men' , auth , ( req , res ) => {

    res.send( { 'msg' : 'this is the men page' } )  ;
    
} )  ;

app.get( '/women' , auth , ( req , res ) => {

    res.send( { 'msg' : 'this is the women page' } )  ;
    
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