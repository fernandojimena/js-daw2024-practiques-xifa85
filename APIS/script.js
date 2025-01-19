function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cuentaAtras() {
    let tiempo = 5;
    const contador = document.getElementById('contador');
    while (tiempo > 0) {
        contador.textContent = tiempo;
        await timeout(1000); // retraso de 1 segundo
        tiempo--;
    }
    contador.textContent = 0;
    
    notific();
}

function notific() {
    const notification = document.getElementById('notificacion');
    notification.style.display = 'block';
}

function irVideo() {
    window.location.href = "video.html";
}

// se lanza la funcion cuenta Atras
cuentaAtras();