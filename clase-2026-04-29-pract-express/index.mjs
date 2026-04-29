/*Repaso de express*/
//vamos aimporta express
import express from "express"
import path from 'node:path'

const PUERTO = 3000

const app = express()

//Middleware
//Levantamos un servidor estática
console.log(path.resolve('front'))
app.use(express.static(path.resolve('front')))

app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

