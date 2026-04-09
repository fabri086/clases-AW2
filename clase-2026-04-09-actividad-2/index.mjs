/*1º hici un import de fsp y path
    import fsp from "node:fs/promises"
    import path from "node:path"
*/
import fsp from "node:fs/promises"
import path from "node:path"


//1º armamos un try, catch
//2º luego agregamos dentro del try
try{
    //hacemos una peticion de fetch con promese
    const repuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    
    //hacemos un mapa
    const users = await repuesta.json() //para buscar la ruta del contenido
    
    /*const el nombre que lo llamaste= users.map(user =>(
        {
            id:user.id,
            nombre: user.name,
            correo: user.email
        }
    )) asi se crea el mapa*/

    const datos= users.map(user =>(
        {
            id:user.id,
            nombre: user.name,
            correo: user.email
        }
    ))
    //luego agregas un console.log(el nombre que lo llamaste)

    console.log(datos)
    //extraemos la peticion de los datos

    /*haces un const nuevo y metemos el 1º const
    const "-----" = "-------".json()
    el json() es promese
    */
    

    //1º creamos la ruta para que cargue los datos del contenido
    //2º const ruta = path.json('./note.json'). Lo que haces eniva una copia de los datos
    const ruta = path.join('./note.json')

    //3º para que descargue tenes que agregar esto
    const contendio = JSON.stringify(datos,null,3)

    await fsp.writeFile(ruta,contendio)

    
}catch(fallo){
    console.log(fallo)
}