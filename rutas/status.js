const { Router } = require('express');
const { nuevoToken, validarToken } = require('../controladores/token');
const router = Router();

router.get('/status', ( request, response ) =>{
    response.status(200).json({
        estado: "OK",
        msg: "Funciona!"
    });
});

router.post('/nuevo', nuevoToken);

router.post('/validarToken', validarToken);

module.exports = router;