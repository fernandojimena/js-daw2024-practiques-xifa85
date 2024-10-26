// Ejercicio 07
const loteria = new Set();

// Llena el array hasta el valor 50
while (loteria.size < 50) { 
    const combinacion = new Set();
    // cada combinacion debe de ser de 6 digitos
    while (combinacion.size < 6) {
        const aleatorio = Math.floor(Math.random() * 49) + 1;
        combinacion.add(aleatorio);
    }

    // Convierte la combinación en un formato string para almacenar como combinación única en `loteria`
    loteria.add(Array.from(combinacion).sort((a, b) => a - b).join(","));
    
}

// Imprimir cada combinación
loteria.forEach(comb => console.log(comb));