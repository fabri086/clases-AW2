import pool from "../../bd/conexion.bd.mjs";

//la 1º funcion es obtener todo

export async function obtenerTodos() {
    const resultados = await pool.query('SELECT * FROM menu')
    return resultados.rows // arreglo de registro
}

export async function crearUno(datos){

    const {nombre,precio} = datos

    const resultado = await pool.query('INSERT INTO menu(nombre, precio) VALUES ($1, $2) ',
        [
            nombre,
            precio
        ]
    )
    return resultado.rows
}