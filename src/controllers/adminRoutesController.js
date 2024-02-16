const dotenv = require( 'dotenv' )  ;


dotenv.config() ;


const loginAdmin = async ( req , res )=>{

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
                    const accessToken = jwt.sign( { email } , process.env.accessSecretKey , { expiresIn: '30m' } )  ;

                    const refreshToken = jwt.sign( { email } , process.env.refreshSecretKey , { expiresIn: '1d' } )  ;

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

const logoutAdmin = async ( req , res ) => {
    try {
        const accessToken = req.body.accessToken  ;

        const refreshToken = req.body.refreshToken  ;

        await BlackListModel.insertMany( [ { "token" : accessToken } , { "token" : refreshToken } ] )  ;

        res.status(200).send( {"msg":"User has been logged out" }  )  ;
        
    } catch (error) {
        res.status(400).send( { "error" : error } )  ;
    }
} 


module.exports = { loginAdmin , logoutAdmin }  ;