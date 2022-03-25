const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/token', require('./rutas/status.js') );

let port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${ port }`);
});