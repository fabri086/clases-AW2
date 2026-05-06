import { response } from "express"
import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProductoPorId(req, res) {
    //logica, generar un filtro
    const id_producto = Number(req.params.id)// el "Number" verifica si es un numero
    //Filtramos
    // const id_producto = Number(req.params.id)-> 125abc -> 125
    const productosFiltrados = productos.filter((producto) => {
        return id_producto === Number(producto.id) // -> esto es verdadero o falso
    })

    //Logica verificado si hay productos
    if (productosFiltrados.length > 0) {

        res.json(productosFiltrados)
    } else {
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
}
export function altoProducto(req, res) {

    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado alto'
    }
    res.json(respuesta)

}
export function eliminarProducto(req, res) {

    //logica, generar un filtro
    const id_producto = Number(req.params.id)// el "Number" verifica si es un numero
    // const id_producto = Number(req.params.id)-> 125abc -> 125
    //Filtramos


    const productosFiltrados = productos.filter((producto) => {
        return id_producto !== Number(producto.id) // -> esto es verdadero o falso
    })

    productos.length = 0 //----> ponemos en 0
    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminada'
    }
    res.json(respuesta)
}

