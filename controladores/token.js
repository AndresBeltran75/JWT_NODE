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
    const tokenValidar = req.header('authorization').substring(7);
    try {
        const token = await verificarToken( tokenValidar );
        res.status(200).json({
            ok: true,
            token
        });
    } catch (error) {
        res.status(200).json({
            ok: true,
            msg: 'Token expirado o no válido'
        });
    }

}

module.exports = {
    nuevoToken,
    validarToken
};