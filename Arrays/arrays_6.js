// Ejercicio 06
const personas = new Map();
personas.set('Fernando',29).set('Pablo',44);
console.log(personas);

// Arreglo de la edad (los maps pisan datos pero no claves)
personas.set('Fernando', 39);

console.log("---------------------------");

// recorre y imprime los datos con un for each (tambien se pueden imprimir con console.log)
personas.forEach((edad, nombre) => {
    console.log(`${nombre}: ${edad}`);
});