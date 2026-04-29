/*Repaso de express*/
//vamos aimporta express

import express from "express"

const PUERTO = 3000

const app = express()

//Middleware

function Middleware1(req,res,next){
    console.log('middleware 1')
    const existeUsuario = true
    if(existeUsuario){
        console.log('usuario existe -> pasa')
        return next()
    }
    console.log('usuario NO existe -> NO pasa')
    res.status(403).send('Usuario no registrado')
    
    
    //si olvidas el next lo va a pasar
    //next() //<-- seguir la fila
}


app.get('/',Middleware1, (req,res)=>{
    console.log('ejecucion del CALLBACK final')
    res.send('HOLA')
})


app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

