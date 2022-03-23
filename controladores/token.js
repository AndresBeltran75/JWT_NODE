const { request ,response } = require('express');
const { generarToken, verificarToken } = require('../utilidades/UtilJwt');

const nuevoToken = async( req = request, res = response ) =>{
    const { user, pass } = req.body;
    const tokenNew = await generarToken( user, pass );
    res.status(200).json({
        ok: true,
        token: tokenNew
    });
}

const validarToken = async ( req = request, res = response) =>{
    const tokenValidar = req.header('authorization');
    if( tokenValidar ){
        try {
            const token = await verificarToken( tokenValidar.substring(7) );
            res.status(200).json({
                ok: true,
                token
            });
        } catch (error) {
            res.status(200).json({
                ok: true,
                msg: 'El token ingresado expiro o no es válido'
            });
        }
    }else{
        res.status(400).json({
            ok: false,
            msg: 'No se ha suministrado un token para realizar está petición'
        })
    }


}

module.exports = {
    nuevoToken,
    validarToken
};