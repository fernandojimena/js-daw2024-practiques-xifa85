// 2.1
// Crea un bucle que recorra un array de números y calcule la suma de todos ellos
// de forma iterativa y recursiva. ¿Qué solución crees que es mejor?

const numeros = [1,2,33,53,24]; 
let sumaDeNumeros = 0;
for(let n of numeros) {
    sumaDeNumeros+= n;
}
console.log(sumaDeNumeros);



// 2.2
// Tienes un array de objetos que representan productos. Usa forEach() para
// incrementar en un 10% el precio de cada producto.
const productos = [ 
    { nombre: "Camiseta", precio: 20 }, 
    { nombre: "Pantalón", precio: 30 }, 
    { nombre: "Zapatos", precio: 50 } ];
console.log(productos);

productos.forEach(element => {
    element.precio *= 1.10;
});

console.log(productos);



// 2.3
// Usa una combinación de los métodos map(), reduce() y filter() para procesar
// un array de objetos. Tienes un array de personas con sus nombres y edades,
// filtra a las personas mayores de 18, multiplica su edad por 2, y luego suma
// todas las edades.

const personas = [ 
    { nombre: "Juan", edad: 17 }, 
    { nombre: "Ana", edad: 22 }, 
    { nombre: "Pedro", edad: 19 }, 
    { nombre: "Laura", edad: 16 } ];