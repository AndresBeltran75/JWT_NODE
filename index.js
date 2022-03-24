const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/token', require('./rutas/status.js') );

app.listen(process.env.PUERTO || 80, () =>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PUERTO }`);
});