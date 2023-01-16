let biciArray = require('./datosbici')

let dhBicis = {
    bicicletas: biciArray,


    buscarBici: function (identificador) {
        let biciBuscada = this.bicicletas.filter(function (bici) { return bici.id === identificador })
        if (biciBuscada.length > 0) {
            return biciBuscada[0]
        } else {
            return null
        }
    },

    venderBici: function (identificador) {

            if(dhBicis.buscarBici(identificador)==null){
                return "la bici no fue encontrada"
            }
            else if ((dhBicis.buscarBici(identificador).vendida == "si")){
                return 'la bici ya fue vendida'
            } else {
                dhBicis.buscarBici(identificador).vendida = "si"
                return dhBicis.buscarBici(identificador)
            }
        
    },

    biciParaLaVenta: function(){
        let biciEnVenta = this.bicicletas.filter(function(bici){ return bici.vendida == "no"})
        return biciEnVenta

    },

    totalDeVentas: function(){
        let sumaVentas = this.bicicletas.reduce(function(acumuladora, bici){
            if(bici.vendida=="si"){
                acumuladora = acumuladora + bici.precio
            }
            return acumuladora
            },0)

        return sumaVentas

    }
}








console.log(dhBicis.totalDeVentas())

/* a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
la bicicleta y devuelva la bici que corresponde. En caso de no
encontrarla, deberá retornar null. Estamos optimizando nuestro código,
por lo que deberíamos utilizar el método filter. */

/* function buscarBici (id){
 
    return id 
} */

