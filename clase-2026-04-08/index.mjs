//console.log('hola node')
//vamos a leer un archivo txt
import fsp from 'node:fs/promises'

//fsp (five sistem promise)
try{
 const contenido = await fsp.readFile('./archivo.txt', 'utf8')
 //console.log(contenido.toString())
 console.log(contenido)
}catch(e){
console.log(e)
}