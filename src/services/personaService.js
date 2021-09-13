const personaService = {};
const conexion = require('../database');

personaService.crearPersona = async (CrearPersonaModel) => {

    const nombre = CrearPersonaModel.nombre;
    const edad = CrearPersonaModel.edad;
    const curso = CrearPersonaModel.curso;
    
    await conexion.query('INSERT INTO persona SET ?', {nombre:nombre, edad:edad, curso:curso});

    return true;
}

personaService.listarPersonas = async () => {

    return await conexion.query('SELECT * FROM persona');
    
}

personaService.actualizarPersona = async (ActualizarPersonaModel) => {

    console.log("datos a guardar ", ActualizarPersonaModel);

    let idPersona = ActualizarPersonaModel.idPersona;
    let nombre = ActualizarPersonaModel.nombre;
    let edad = ActualizarPersonaModel.edad;
    let curso = ActualizarPersonaModel.curso;

    await conexion.query('UPDATE persona SET ? WHERE idPersona = ?',[{nombre:nombre, edad:edad, curso:curso}, idPersona]);
        
    return true;
}

personaService.eliminarPersona = async (idPersona) => {
    
    await conexion.query('DELETE FROM persona WHERE idPersona = ?',[idPersona]);

    return true;
}

module.exports = personaService;