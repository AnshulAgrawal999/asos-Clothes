const dotenv = require( 'dotenv' )  ;


dotenv.config() ;


const loginAdmin = ( req , res )=>{

    const { email , password } = req.body  ;

    if( process.env.adminEmail === email && process.env.adminPassword === password )
    {
        res.send( { 'msg' : 'login successfull' } )  ;
    }
    else
    {
        res.send( { 'msg' : 'Incorrect email or password' } )  ;
    }
} 

const logoutAdmin = ( req , res ) => {

    res.send( { 'msg' : 'logout successfull' } )  ;
} 


module.exports = { loginAdmin , logoutAdmin }  ;