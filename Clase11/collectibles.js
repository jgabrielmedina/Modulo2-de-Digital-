let fs = require('fs');

function importar(marca) {

    switch (marca) {
        case "Hot Toys":
            ruta = "./dhColleccionables/datos/figuras1.json"
            break;
        case "Bandai":
            ruta = "./dhColleccionables/datos/figuras2.json"
            break;
        case "StarWars":
            ruta = "./dhColleccionables/datos/figuras3.json"
            break;
        default:
            return "no tenemos la marca"
            break;
    }

   
    let figura = ruta
    let figuraJSON = fs.readFileSync(figura, "utf-8")
    let figuraArray = JSON.parse(figuraJSON)
   
    return figuraArray

}

module.exports = importar

