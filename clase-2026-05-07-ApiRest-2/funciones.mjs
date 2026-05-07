import { response } from "express"

//importamos a nuestro archivo "productos.mjs" para que traiga
import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos.datos)
}

export function obtenerProductoPorId(req, res) {
    //logica, generar un filtro
    const id_producto = Number(req.params.id)// el "Number" verifica si es un numero
    //Filtramos
    // const id_producto = Number(req.params.id)-> 125abc -> 125
    const productosFiltrados = productos.datos.filter((producto) => {
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
    const proximoId = Number(productos.ultimo_id) + 1

    //Agregar propiedad id
    nuevoProducto.id = proximoId
    //Actualizamos la referencia
    productos.ultimo_id = proximoId

    productos.datos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado alto'
    }
    res.json(respuesta)

}

export function modificarProducto(req, res) {
    const id_producto = Number(req.params.id)
    const productoAModificar = req.body


    productos.datos.forEach((producto,indice) => {
        // obteniendo el indice con indexOf()
        //const indice = productos.datos.indexOf(producto)
        //
        if (id_producto === Number(producto.id)) {
            productoAModificar.id = id_producto
            productos.datos[indice] = productoAModificar

        }
    })
    const respuesta = {
        mensaje: 'Producto modificado con id' + id_producto
    }
    res.json(respuesta)

}

export function eliminarProducto(req, res) {

    //logica, generar un filtro
    const id_producto = Number(req.params.id)// el "Number" verifica si es un numero
    // const id_producto = Number(req.params.id)-> 125abc -> 125
    //Filtramos


    const productosFiltrados = productos.datos.filter((producto) => {
        return id_producto !== Number(producto.id) // -> esto es verdadero o falso
    })

    productos.datos.length = 0 //----> ponemos en 0
    productos.datos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminada'
    }
    res.json(respuesta)
}

