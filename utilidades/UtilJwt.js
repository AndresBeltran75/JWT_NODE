const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

const generarToken = ( usuario, password ) =>{
    return new Promise( ( resolve, reject ) =>{
        const datosToken = { usuario, password };

        jwt.sign( datosToken, process.env.CLAVE_TOKEN,{
                expiresIn: 60*2
            }, ( error, token ) =>{
                if( error ){
                    console.log( error );
                    reject( 'Error al genera el token' );
                }

                resolve( token );
            }
        );

    });
}

const verificarToken = ( token ) =>{
    jwt.verify( token, process.env.CLAVE_TOKEN);
    return token;
}

module.exports = {
    generarToken,
    verificarToken
}