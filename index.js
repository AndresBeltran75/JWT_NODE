const express = require('express');
require('dotenv').config();
const app = express();

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/token', require('./rutas/status.js') );

app.listen(process.env.PUERTO, () =>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PUERTO }`);
});