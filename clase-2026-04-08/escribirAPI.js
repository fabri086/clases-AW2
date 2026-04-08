//
import fsp from "node:fs/promises"
import path from "node:path"


try{
 //hacemos una peticion con FETCH -> con promesa
 const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 //Extraemos del cuerpo de la peticion de los datos
 //que hace json(): una promesa 
 const Productos = await respuesta.json()

 //creamos la ruta
  //const ruta = path.join('./api.txt') envia una copia de los datos del archivo(file) a api.txt
 const ruta = path.join('./api.json') //para que cargue tenes que agregar esto contenido
 //del const contenido = JSON.stringify(Productos) hay agregas(Productos,null,4)

 //guardamos los datos de archivos
const contenido = JSON.stringify(Productos,null,4) //<-- pasa de js a forma JSON -> texto

await fsp.writeFile(ruta, contenido)

 //van a leer el contendio del archivo api.json
 //imprimir por consola

 //console.log(Productos)
}catch(e){
    console.log(e)
}