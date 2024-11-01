// 1.1
// Crea una función tradicional que reciba un número y retorne su cuadrado.
// Luego, usa esa función para mostrar el cuadrado de 5 en la consola.

function funcionCuadrada (number) {
    return number*number;
}
console.log('el cuadrado de 5 es: '+funcionCuadrada(5));



// 1.2
// Crea una función anónima autoinvocada que defina una variable llamada
// contador y la incremente en cada invocación. Luego, intenta acceder a la
// variable contador fuera de la función y observa lo que sucede.

const contador = (function(){let contador = 0; return function(){contador++;console.log(contador);}}());



// 1.3
// Crea una función autoinvocada que reciba dos parámetros: una cadena de
// texto y un número. Dentro de la función, concatena la cadena con el
// número y muestra el resultado en consola.

const mix = (function(string, number){ n = number.toString(); c = string.concat(n);  console.log(c); return c; }('hola ',32));



// 1.4
// Crea una función flecha que sirva para devolver verdadero si un número es
// par o falso si no lo es. Asigna esa función a una variable y prueba la función
// para ver que responde correctamente.

const parImpar = (n) => n % 2 === 0;
console.log(parImpar(2));
console.log(parImpar(7));

