import express from 'express'

/* dentro de los corchetes: {obtenerProductos, obtenerProductoPorId, eliminarProducto,altoProducto}
 de import van las funciones, sirve para comunicar las appi:

 * GET /api/v1/productos

 * GET /api/v1/productos/:id

 * POST /api/v1/productos
 
 * DELETE /api/v1/productos/:id
  */
import {
  obtenerProductos,
  obtenerProductoPorId,
  eliminarProducto,
  altoProducto,
  modificarProducto
} from './funciones.mjs'


const PUERTO = 3000


const app = express()
app.use(express.json()) //--> avisar a express que voy a mandar datos del tipo JSON por el cuerpo

// Configuracion de una API REST

// GET /api/v1/productos
app.get('/api/v1/productos', obtenerProductos)

// GET /api/v1/productos/:id
app.get('/api/v1/productos/:id', obtenerProductoPorId)

// POST /api/v1/productos ----> damos alta un registro
app.post('/api/v1/productos', altoProducto)

// PUT /api/v1/productos/:id ----> modificar un registro
app.put('/api/v1/productos/:id', modificarProducto)

// DELETE /api/v1/productos/:id ----> eliminar un registro
app.delete('/api/v1/productos/:id', eliminarProducto)

app.listen(PUERTO)