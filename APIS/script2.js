const video = document.getElementById('video-player');
const info = document.getElementById('video-info');

// reproduccion o pausa
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// duracion del video
video.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 

    // Calcular minutos y segundos
    const minutes = Math.floor(video.duration / 60);
    const seconds = Math.floor(video.duration % 60);

    info.textContent = `Duración: ${minutes}m ${seconds}s`;
});