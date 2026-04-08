
try{
 //hacemos una peticion con FETCH 
 const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 //Extraemos del cuerpo de la peticion de los datos
 //que hace json(): una promesa 
 const Productos = await respuesta.json()
 console.log(Productos)
}catch(e){
    console.log(e)
}