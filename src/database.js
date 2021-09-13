//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require('mysql')
const {promisify} = require('util')

const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
})

conexion.connect( (error)=> {
    if(error){
        console.log('El error de conexión es: '+error)
        return
    }
    console.log('¡Conectado a la base de datos MySQL!')
})

conexion.query = promisify(conexion.query);
module.exports = conexion;