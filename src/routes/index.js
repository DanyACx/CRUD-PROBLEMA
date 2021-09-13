const express = require('express');
const router = express.Router();

const persona = require('../controllers/personaController');

module.exports = app => {

    

    router.post('/crearPersona', persona.crearPersona);
    router.get('/', persona.listarPersonas);
    router.get('/actualizarPersona/:idPersona', persona.actualizarPersona);  // cambia para editar: router.put('/actualizarPersona', persona.actualizarPersona); 
    router.get('/eliminarPersona/:idPersona', persona.eliminarPersona); // cuando se asocia con EJS cambia de DELETE a GET

    app.use(router);
}