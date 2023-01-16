let rutaBicicletas = "./bicicletas.json"
let fs = require('fs');

let biciJSON = fs.readFileSync(rutaBicicletas,"utf-8")
let biciArray = JSON.parse(biciJSON)

module.exports = biciArray
