let peliculas = require('./peliculas')

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i])
}

let fs = require('fs')
//let mensaje = fs.readFileSync(__dirname + '/mensaje.txt','utf-8')  //exportacion local 
let mensaje = fs.readFileSync('.././mensaje.txt','utf-8') //expo global viajo por los directorios 
console.log(mensaje)

