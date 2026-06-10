import express from 'express'
import multer from 'multer'
import {nanoid} from 'nanoid'
import mime from 'mime-types'
//path
const PUERTO = 3000

const app = express()


//ejecutamos multer()

const alamacenamiento = multer.diskStorage({
    //-----------------------------------------
    //Destino de almacenamiento donde lo va a guardar
  destination: function (req, file, cb) {
    // Chequeos

    cb(null, './archivos')
  },
  //-------------------------------------------
  //Gestion del nombre
  filename: function (req, file, cb) {

    // Obtengo la extension desde el mime type
    // const extension = mime.extension(file.mimetype)
    //creo el nombre del archivo con un identificador unico con nanoid
    const nombreImagen = nanoid() + '.' + mime.extension(file.mimetype) // genera un UID
    cb(null, nombreImagen)
  }
})

//documentacion -> https://github.com/expressjs/multer
const subirArchivo = multer({
    storage: alamacenamiento
})
//aca va solo el nombre del campo, si coincide con el nombre no lo va encontrar
//lo que va el "single" solo el atributo del index.html

const gestionArchivos = subirArchivo.single('imagen') //<-- devuelve una funcion

//use por defecto utiliza la ruta raiz /, pero la utiliza como prefijo
app.use('/admin', express.static('./front-admin'))

//Sube el archivo que subiste
app.use('/archivos', express.static('./archivos'))

//la ruta y metodo 
// fijate bien que los nombre son igual al front-admin

app.post('/subir-archivo', (req, res) => {

    gestionArchivos(req, res, (error) => {
        //si hay error respondemos
        if (error) return res.status(500).json({ mensaje: 'Error en el servidor' })
        // si no hay error
        //req.body <--- app.use(express.json())
        console.log(req.file)
        //---
        res.json({ mensaje: 'ruta subida de archivo al formulario' })
    })

})

app.listen(PUERTO)