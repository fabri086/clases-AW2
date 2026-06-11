import jwt from 'jsonwebtoken'

//vamos a usar 2 
//sign -> firmar
//verify -> verificar

const datosPayload = {
    usuario: 'fabri',
    rol: 0
}

jwt.sign(datosPayload, 'frasesupersecreta', { expiresIn: '1h' }, (error, token) => {
    if (error) return console.log(error)
    
        console.log(token)
})