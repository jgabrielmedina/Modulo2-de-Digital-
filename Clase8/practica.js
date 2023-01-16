//MICRODESAFIO 1

let cursosOfrecido = [["html", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["node", 15000]]

let cursoElejido = ["JAVASCRIPT", "REACT", "HTML"]


function MontoAPagar(cursosOfrecido, cursoElejido) {

    let monto = 0

    for (let i = 0; i < cursosOfrecido.length; i++) {

        if(cursoElejido.includes(cursosOfrecido[i][0].toUpperCase())){
            monto += cursosOfrecido[i][1]
        }

    }

    return monto

}

function Ingresante (datos, cursosOfrecido, cursoElejido) {

    let montoTotal = MontoAPagar(cursosOfrecido, cursoElejido)
    
    console.log(datos, montoTotal)
    return datos, montoTotal
 
}


Ingresante("Jose Medina", cursosOfrecido, cursoElejido)