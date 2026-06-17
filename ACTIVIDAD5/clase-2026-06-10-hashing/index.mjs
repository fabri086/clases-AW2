/*Nueva tema llamado hashing que es la seguridad */
import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';

const PUERTO = 3000;

////////////////

////////////////
const app = express();

app.use(express.json())//<---- formato JSON -> convierte en Objeto dentro del body

app.use(express.urlencoded({ extended: true }))//<-- sirve para dar un formato urlencoded -> convierte en un objeto dentro de body

app.use(cookieParser('claveSecreta'))

//Admin CRUD
app.use('/admin', chequearCookie, express.static('./front/front-admin'))

//login
app.use('/login', express.static('./front/front-login'))

//Autenticar
app.post('/autenticar', (req, res) => {
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
    const resultado = await pool.query(`
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

    if (resultado.rowCount > 0) {
        return res.json({
            mensaje: `El usuario ${usuario} se ha registrado con exito`
        })
    }
    return res.status(500).json({
        mensaje: 'El registro no puedo realizar'
    })
})

///////////////////////

//Cookies y Login


//para el admin
function chequearCookie(req, res, next) {
    const sesionId = req.signedCookies['sesionId']
    if (sesionId === 'minumerodesesion') {
        return next()
    }
    return res.redirect('/login')
}

app.post('/autenticacion', async (req, res) => {
    const { usuario, pass } = req.body
    //Consultara a la BD si el usuario existe, que seria "fabri" y clave "123456"
    if (usuario != 'fabri' || pass != '123456') {
        return res.redirect('/login')
    }
    res.cookie('sesionId', 'minumerodesesion', {
        signed: true,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 1000 * 15
    })
    res.redirect('/admin')
})


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});