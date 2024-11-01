// Ejercicio 02
const letras = new Array();

// insert al principio
letras.unshift("A","B","C");

// insert al final
letras.push("D","E");

// delete primer elemento
letras.shift();

// delete ultimo elemento
letras.pop();

// recorro con for of
for ( let lts of letras){
    console.log(lts);
}
