import express from 'express'
//fijate siempre el numero que creaste ya que es ese el hostlocal
const NUEVOPUERTO = 3000

async function middleware1(req, res, next) {
    console.log('middleware 1')
    const codigo = parseInt(req.params.codigo)

    const respuestaApi = await fetch('http://localhost:4321/usuario')
    const datosapi = await respuestaApi.json()
    console.log(datosapi)
    
    //const igualCodigo = true
    if (codigo === datosapi.codigo ) {
        console.log('El código es correcto')
        return next()
    }
    console.log('El código es incorrecto')
    res.status(400).json({mensaje:"codigo incorrecto"})

}

const app = express()
app.get('/:codigo', middleware1, (req, res) => {
res.status(200).json({mensaje:"codigo correcto"})
})

app.listen(NUEVOPUERTO)