//creamos unos modulos para http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async (peticion, respuesta) => {
    //console.log(peticion.url)

    if (peticion.method === 'GET') {
        if (peticion.url === '/usuarios') {


            try {
                const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
                const datposApi = await respuestaApi.text()
                await fsp.writeFile(path.join('./datosapi.json'), datposApi)
                respuesta.statusCode = 200
                return respuesta.end('datos guardados', 'utf-8')

            } catch (error) {
                respuesta.statusCode = 500
                return respuesta.end(`Error en el servidor: ${error}`)

            }


        }
        //if (peticion.url === '/mostrar-datos')
    }
    //falback
    respuesta.statusCode = 404
    respuesta.end('ruta equivocado')

})
//aqui app.listen
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})