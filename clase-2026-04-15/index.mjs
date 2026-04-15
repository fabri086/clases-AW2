// modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'
const app = http.createServer(async (peticion, respuesta) => {//<--esta funcion va ejecutar solamente cuando haya una peticion o Request
    //console.log('peticion recibida')//<--esto fue primero


    if (peticion.mrthod === 'GET') {
        //console.log(peticion.url)//<-- que ruta quiere
        if (peticion.url === '/') {
            respuesta.statusCode = 200 //<--muestra el estado en Network
            return respuesta.end('Estas en la raiz')

        }

        if (peticion.url === '/suma') {
            //si o si tiene que poner la barra
            const resultado = (5 + 3).toString()
            respuesta.statusCode = 200
            return respuesta.end(resultado)
        }

    }
    if (peticion.method === 'POST') {

        //  if(peticion.url === '/proceso-formulario'){

        //     console.log('post')

        //     return respuesta.end('se hizo una petcion con ver')
        //  }

        if (peticion.url === '/guardar-datos') {
            const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
            const datposApi = await respuestaApi.text()

            try {
                await fsp.writeFile(path.join('./datosapi.txt'), datposApi)
                respuesta.statusCode = 201
                return respuesta.end('datos guardados')

            } catch(error){
                respuesta.statusCode = 500
                return respuesta.end(`Error en el servidor: ${error}`)

            }
            

        }
    }



    //falback
    respuesta.statusCode = 404
    respuesta.end('estas en la ruta')


    // respuesta.end('Hola servidor') //<--el end es lo ultimo que tiene que aparecer, todas las configuraciones
    //tiene que estar antes del end si o si
    //y no se puede ejucutar dos veces
})

app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')//<--Deberia crear un sitio
})