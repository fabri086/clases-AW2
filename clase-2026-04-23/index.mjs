// vamos a ver como funciona express
import express from 'express'

const PUERTO = 3000
const productos = [
    {
        id: 1,
        nombre: "camiseta",
        precio: 20000000
    },
    {
        id: 2,
        nombre: "pantalon",
        precio: 500000000

    }
]
const app = express()
app.use(express.json())

//hacemos una instancia servidor express 1º
//const app = express()


//3º
const callback = (req, res) => {
    res.status(200)
    res.end('hola como estas el estado de GET')

}
app.get('/', callback)

app.get('/productos', (req, res) => {
    // const productos = [
    //     {
    //         nombre: "camiseta",
    //         precio: 20000000
    //     }, 
    //     {
    //         nombre: "pantalon",
    //         precio: 500000000

    //     }
    // ]

    res.end(JSON.stringify(productos))
    //res.set('content-type','application/json')
    //res.end('[{"nombre":"camiseta", "precio": 20000000 }]')


})

app.get('/productos/:id', (req, res) => {
    
    //en const id = req.params.id <--tienes q poner el nombre igual en get
    
    const id = parseInt(req.params.id)
    console.log(id)
    //filtrar
    const arreglofiltrado = productos.filter((producto)=>{
        return producto.id == id
    })

    res.json(arreglofiltrado)



})

app.post('/productos', (req, res) => {
    //Agregamos al objeto req o peticion una propiedad llamada "body"
    //console.log(req.body)
    //res.send('Productos creados')

    //cuidado con el nombre q pongas
    const producto = req.body
    productos.push(producto)
    res.status(201).json({ mensaje: 'productos creados' })


})

//abrimos un puerto 2º
app.listen(PUERTO, () => {
    console.log('servidor corriendo en ')
})