let autosImportados = require("./autos")

/* console.log(autosImportados) me fijo que lo haya requerido correctamente*/

const concesionaria = {

    autos: autosImportados,

    buscarAuto: function (patente) {

        let autoByPatente

        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].patente == patente) {
                autoByPatente = this.autos[i]
            }

        }
        if (autoByPatente) {
            return autoByPatente
        } else {
            return null
        }
    },

    venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente)
        if (autoVendido == null) { return "no se encontro el auto" }
        autoVendido.vendido = true
        return /* "el auto vendido fue:"+ */autoVendido
    },

    autosParaLaVenta: function () {
        let autosEnVenta = this.autos.filter(function (autos) { return autos.vendido == false })
        return autosEnVenta
    },

    autosNuevos: function () {
        let autosParaVender = this.autosParaLaVenta()
        let autosNuevos = autosParaVender.filter(function (auto) { return auto.km < 100 })
        return autosNuevos
    },

    listaDeVentas: function () {
        let valores = this.autos.filter(function (autos) { if (autos.vendido == true) { return autos.vendido } })
        let precios = valores.map(function (autos) { return autos.precio })

        return precios

    },

    totalDeVentas: function () {
        let preciosXauto = this.listaDeVentas()
        if (preciosXauto.length > 0) {
            let total = preciosXauto.reduce(function (acum, num) {
                return acum + num
            })
            return total

        } else {
            return 0
        }
    },

    puedeComprar: function (auto, persona) {


        if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)) {
            return true
        } else {
            return false
        }
    },

    autosQuePuedeComprar: function (persona) {
     
        let primerFuncion = this.autosParaLaVenta();
        let segundaFuncion = this.puedeComprar
        
        
        let autosFiltrados = primerFuncion.filter(function(autito){
            return segundaFuncion(autito,persona) == true
        })
        
        return autosFiltrados
    }
}



console.log(concesionaria.autosQuePuedeComprar(
    {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 7200,
        capacidadDePagoTotal: 100000000
    }
))


