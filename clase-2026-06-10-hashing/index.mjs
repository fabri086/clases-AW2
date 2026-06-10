/*Nueva tema llamado hashing que es la seguridad */
import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json())//<---- formato JSON -> convierte en Objeto dentro del body
app.use(express.urlencoded({ extended: true }))//<-- sirve para dar un formato urlencoded -> convierte en un objeto dentro de body

//exponemos los 2 fronts

//Admin CRUD
app.use('/admin', express.static('./front/front-admin'))

//login
app.use('/login', express.static('./front/front-login'))

//Autenticar
app.post('/autenticar',(req,res)=>{
    //Actividad 5
    //Generar el id con nanoid
    
})

//Registrar
app.post('/registrar', async (req, res) => {
    //1- capturamos los datos
    //req.body //<-- tanto como json y urlencoded se guardan aqui
    console.log(req.body)
    const { usuario, pass } = req.body

    //2- Control
    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    //3 - Encriptasion clave

    const salt = await bcrypt.genSalt(10); //<-- previene el ataque arcoiris de fuerza bruta
    const hash = await bcrypt.hash(pass, salt);
    console.log(hash)

    //4 - Guardamos en BD
    //try/catch
    const resultado= await pool.query(`
    INSERT INTO usuarios
        (username,password_hash)
    VALUES
        ($1, $2)
    RETURNING
        id, username
    `, //< ---guarda con la coma
    [
        usuario,
        hash
    ]
)
console.log(resultado)

if(resultado.rowCount > 0){
    return res.json({
        mensaje:`El usuario ${usuario} se ha registrado con exito`
    })
}
    res.status(500),json({
        mensaje: 'El registro no puedo realizar'
    })
})


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});