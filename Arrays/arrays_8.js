// Ejercicio 08
// Array de capacidad 10 con todos sus valores iniciados a 0
const frecuencias = Array(10).fill(0); 

// for de 10mil
for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // ajustamos el indice a 1
    frecuencias [numeroAleatorio - 1]++;
}


console.log("Frecuencias");
frecuencias.forEach((frecuencia, index) => {
    console.log(`Número ${index + 1}: ${frecuencia}`);
});