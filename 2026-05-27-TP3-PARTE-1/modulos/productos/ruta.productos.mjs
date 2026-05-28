import { Router } from "express"
import * as controlador from './controlador.producto.mjs'

const rutasProductos = new Router()

rutasProductos.get('/api/v1/rotiseria', controlador.obtenerTodos)

export default rutasProductos