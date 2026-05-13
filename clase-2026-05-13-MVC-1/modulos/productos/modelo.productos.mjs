
import productos from "../../productos.mjs"


export function obtenerTodos() {
    /*Haria una consulta a una BD*/
    return productos.datos
}

export function otenerUno(id) {
    /*Filtrar por ID*/
    const productoFiltrar = productos.datos.filter((productos) => {
        return Number(productos.id) === id
    })
    return productoFiltrar
    /* const id_producto = Number(req.params.id)
     const productosFiltrar = productos.datos.fiter((productos))*/

}