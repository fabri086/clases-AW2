import * as modelo from './modelo.productos.mjs'

export async function obtenerTodos(req, res) {
    //arreglo
    const productos = await modelo.obtenerTodos()
    if (productos.length === 0) {
        return res.status(404).json({ mensaje: 'Registro no encontrados' })
    }


    //respuesta al cliente
    res.json(productos)
}

export async function crearUno(req, res) {
    const datosproductos = req.body
    /// <------------------------------------
    // futuro esto va en la capa servicio <--- logica negocio
    //verificar datos que ingresar del cliente:
    //si es un numero-cadena-... /si no esta vacia
    const productos = await modelo.crearUno(datosproductos)

    if (productos.length === 0) {
        return res.status(400).json({ mensaje: 'No se puede dar de alta el registro' })
    }
    //respuesta al cliente
    res.json({ mensaje: 'Rotiseria no dado de alta', producto: productos })
}