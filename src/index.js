const express = require( 'express' )  ;

const cors = require( 'cors' )  ;

const dotenv = require( 'dotenv' )  ;


const { connection } = require( './configs/db' )  ;

const { userRouter } = require( './routes/userRoutes' )  ;

const { auth } = require( './controllers/auth' )  ;

const { adminRouter } = require( './routes/adminRoutes' )  ;


dotenv.config() ;

const port = process.env.port  ;

const app = express()  ;


app.use( cors() )  ;

app.use( express.json() )  ;

app.use( '/users' , userRouter )  ;

app.use( '/admin' , adminRouter )  ;



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