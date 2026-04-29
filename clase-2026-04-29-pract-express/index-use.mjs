/*Repaso de express*/
//vamos aimporta express

import express from "express"

const PUERTO = 3000

const app = express()

//Middleware

function Middleware1(req, res, next) {
    console.log('middleware 1')
    next()
}
//La ruta del use sirve como prefijo /----
app.use(Middleware1)

app.get('/', (req, res) => {
    console.log('ejecucion del CALLBACK final')
    res.send('HOLA')
})

app.get('/saludo', Middleware1, (req, res) => {
    console.log('ejecucion del callback final con saludo')
    res.send('Hola ruta /saludo')
})

app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

