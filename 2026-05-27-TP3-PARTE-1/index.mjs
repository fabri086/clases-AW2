import expres from 'express'
import './inicial.env.mjs'
import rutasProductos from './modulos/productos/ruta.productos.mjs' //esto es un middlware

//console.log(process.env)


const PUERTO = process.env.PUERTO || 3000

const app = expres()
app.use(express.json())

app.use(rutasProductos)


app.listen(PUERTO)