
//Temporalizador
function temp(milisegundos){
    return new Promise((respuesta, respuestaNegativa) =>{
        const tiempo = setTimeout(() => {
            respuesta("Tiempo concluido");
        }, milisegundos);

        const tiempoNoCumplido = setTimeout(() => {
            clearTimeout(tiempo);
            respuestaNegativa("El tiempo no va bien");
        }, milisegundos *2);
    });
}

//Invoca el temporalizador
function iniciarTemp() {
    const resultado = document.getElementById("resultado");
    temp(5000)
    .then((mensaje) => {
        resultado.innerText = mensaje;
    })
    .catch((mensaje) => {
        resultado.innerText=mensaje;
    });
}


window.onload = iniciarTemp;