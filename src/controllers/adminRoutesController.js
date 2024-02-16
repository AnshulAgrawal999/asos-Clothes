const dotenv = require( 'dotenv' )  ;


dotenv.config() ;


const loginAdmin = ( req , res )=>{

    res.send( { 'msg' : 'login successfull' } )  ;
   
} 

const logoutAdmin = ( req , res ) => {

    res.send( { 'msg' : 'logout successfull'} )  ;
    
} 


module.exports = { loginAdmin , logoutAdmin }  ;