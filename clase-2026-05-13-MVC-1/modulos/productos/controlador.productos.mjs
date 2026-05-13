//interio de construccion

import * as modelo from './modelo.productos.mjs'
// modelo es un espacio de nombres

export function obtenerTodos(req, res) {
    //la manera de importa todo
    const datosProductos = modelo.obtenerTodos()

    res.json(datosProductos)

}
export function obtenerUno(req, res) {
    const idProducto = Number(req.params.id)
    const datosProductos = modelo.otenerUno(idProducto)
    //si hay o no productos y responder en consecuencia
    if (datosProductos.length > 0) {
        res.json(datosProductos)

    } else {
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }

}