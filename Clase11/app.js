let importarFigura = require('./collectibles')

let hotToys = importarFigura("Hot Toys")
let bandai = importarFigura("Bandai")
let starWars = importarFigura("StarWars")

let unifiedCollectibles = [...hotToys,...bandai,...starWars]


let collectibles = {

    figuras: unifiedCollectibles,

    listFigures:function(figuras){
        this.figuras.forEach(function(datos){
            console.log(datos)
            return datos 
        })
    },

    figuresByBrand:function(marca){

        let arrayFiltrado = this.figuras.filter(function(figura){if(marca == figura.marca){return figura} })
        
        console.table(arrayFiltrado)
    }

}
  /* console.log(collectibles.listFigures())  */
collectibles.figuresByBrand("Hot Toys")