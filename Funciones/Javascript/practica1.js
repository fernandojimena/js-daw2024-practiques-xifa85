
    const iniciarApp = () => {
    // Array para almacenar las palabras ingresadas
    const palabras = [];
    let input;

    // Solicita palabras al usuario hasta que deje el popup vacío o cancele
    while (true) {
        input = prompt("Ingrese una palabra:");
        // Condicion de salida
        if (!input) break;
        palabras.push(input.trim()); 
    }

    // se elimina duplicados con el metodo set y se ordena
    const palabrasUnicas = [...new Set(palabras)]
        .sort((a, b) => b.localeCompare(a, 'es', { sensitivity: 'base' })).reverse();

    // Mostrar resultados
    document.getElementById("resultado").innerHTML = `<h2>Palabras únicas en orden inverso:</h2><p>${palabrasUnicas.join(', ')}</p>`;
};