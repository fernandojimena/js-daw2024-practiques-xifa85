// Función para contar las palabras y mostrar el resultado
const contarPalabras = () => {
    // Llama a la función común de main.js
    const palabras = pedirPalabras(); 

    // Crear el mapa de recuento de palabras
    const mapaRecuento = new Map();

    palabras.forEach(palabra => {
        mapaRecuento.set(palabra, (mapaRecuento.get(palabra) || 0) + 1);
    });
    mostrarResultado(mapaRecuento);
};