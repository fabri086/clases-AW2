
import pool from "./conexion.bd.mjs"


export async function obtenerTodos() {
    /* Haria una consulta a una BD */
    /*Hace una promesa "pool.query()" */
    const resultado = await pool.query(`SELECT * FROM productos`)
    console.log(resultado)
    // Tener un criterio de datos a pasar entre capas
    /*return [] <--antes */
    return resultado.rows //<--despues
}

export async function obtenerUno(id) {
    const resultado = await pool.query('SELECT * FROM productos WHERE id=$1', [id])
    return resultado.rows
}
export async function eliminarUno(id) {
    const resultado = await pool.query('DELETE FROM productos WHERE id=$1', [id])
    console.log(resultado)
    return resultado.rows
}