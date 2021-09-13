ctrl = {};

const personaService = require('../services/personaService');
const RespuestaModel = require("../respuesta/RespuestaModel");

ctrl.crearPersona = async (req, res) => {
    let respuesta = new RespuestaModel();

    try {
            if(await personaService.crearPersona(req.body)){
                respuesta.mensaje = "Persona Creada Correctamente";
                respuesta.status = 200;
                console.log(req.body);
                
            }/* else{
                respuesta.mensaje = "Error en la Persona";
                respuesta.status = 400;
            } */
    } catch (error) {
        console.log(error);
        respuesta.mensaje = "Ocurrio un error en el servidor";
        respuesta.status = 500;
    }

    //res.status(respuesta.status).json(respuesta);//respondemos
    res.redirect('/');
}

ctrl.listarPersonas = async (req, res) => {
    try{
        let listarPersonas = await personaService.listarPersonas();
        console.log(listarPersonas);
       // res.status(200).json({data: listarPersonas});
       res.render('personas', {
        data: listarPersonas
        });
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Salió algo mal"})
    }
}

ctrl.actualizarPersona = async (req, res) => {
    try {                              
        let resActualizar = await personaService.actualizarPersona(req.body);
        if (resActualizar) {
            //res.status(200).json(resActualizar)
            res.status(200).json({mensaje: "Se actualizo persona"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: "Ocurrio un erro en el servidor" })
    }
}

ctrl.eliminarPersona = async (req, res) => {

    try{
        let resEliminar = await personaService.eliminarPersona(req.params.idPersona);

        if(resEliminar){
            //res.status(200).json({mensaje: "Se elimino persona"})
            res.redirect('/');
        }
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Ocurrio un error en el servidro"})
    }
}

module.exports = ctrl;