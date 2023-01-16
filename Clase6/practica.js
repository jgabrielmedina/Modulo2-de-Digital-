
/*MICRODESAFIO 1

let electrodomésticos = ['heladera', 'lavarropa', 'Smart TV', 'Horno', 'Cocina', 'Licuadora']

//Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
let aleatorio = Math.floor(Math.random() * (electrodomésticos.length - 1));
console.log(electrodomésticos[aleatorio])

//Extraer el primer elemento del array y agregarlo al final del mismo.

electrodomésticos.push(electrodomésticos.shift())

//Agregar al final del array dos (2) nuevos productos.
electrodomésticos.push('Ventilador')
electrodomésticos.push('Plancha')

//Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(electrodomésticos.length)

// Buscar un elemento del array y crear una condición responsable de establecer si
//existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
//Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
//no existe”.

if (electrodomésticos.includes('Horno')) {
    console.log('Producto encontrado')
} else {
    console.log('el producto encontrado no existe')
}

// Unificar todos los elementos del array en una cadena de texto (string), separando los
//elementos por espacios en blanco.
 

let string = electrodomésticos.join(' ')

console.log(string)

//Determinar la cantidad de elementos que posee la cadena de texto obtenida.

console.log(string.length)

// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
//función adecuada para ello. 

let stringReplace = string.replace('heladera', 'frezzer');
console.log(stringReplace)

// Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
//de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
//una coma. 

let nuevoArray = stringReplace.split(" ")
console.log(nuevoArray)


*/

/*MICRODESAFIO 2 


// 2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de
//día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
//‘Elvis’,‘Thor: amor y trueno’. 

let array = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "top gun maverick", "Elvis", "Thor: amor y trueno"]


// 3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
//amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
//película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
//una función, la cual recibirá por parámetro la película indicada y deberá retornar la
//misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
//.toUperCase(). Con ese valor recibido, deberás colocarla primera en la estructura
//creada. 

function taquillera (pelicula) {

    let masVista = pelicula.toUpperCase();
    console.log( masVista);
}

taquillera(array[6])

// Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
//para las siguientes películas próximas a estrenar:
//○ Counter-Strike
//○ NOP
//○ Vértigo
//○ Nick
//○ Avatar.
//Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
//cuenta que cada elemento debe estar separado por una coma.
//

let string = "Counter-Strike NOP Vértigo Nick Avatar"

let newArray = string.split(' ')
console.log(newArray)


// Una vez creada la estructura, una de las programadoras del equipo indica que la
//primera película incorporada a la estructura no es una película sino un video juego.
//Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura. 

newArray.shift()
console.log(newArray)

// 4. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
//ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las
//películas, para ello te recomendamos que investigues lo que hace el método
//.concat(). 

function fusion (array1, array2){
   
    let array3 = array1.concat(array2);
    console.log(array3)
    return array3 
    
}

fusion(array,newArray)

*/
