// Función común para pedir palabras al usuario
const pedirPalabras = () => {
    const palabras = [];
    let input;

    // Pedir palabras hasta que se deje el popup en blanco o se cancele
    while (true) {
        input = prompt("Ingrese una palabra (deje en blanco para terminar):");
        // condicion de salida
        if (!input) break;  
        palabras.push(input.trim()); 
    }

    return palabras;
};

// Función común para mostrar el resultado en pantalla
const mostrarResultado = (mapaRecuento) => {
    const resultadoDiv = document.getElementById("resultado");
    let resultadoHTML = "<h2>Recuento de Palabras:</h2>";

    // Generar el contenido HTML con cada palabra y su recuento
    mapaRecuento.forEach((valor, clave) => {
        resultadoHTML += `<p>${clave}: ${valor}</p>`;
    });

    resultadoDiv.innerHTML = resultadoHTML;
};