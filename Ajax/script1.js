function usuarioRandom() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // cargo los datos del json en variables
            const user = data.results[0];
            const photo = user.picture.large;
            const name = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const address = `${user.location.street.name}, ${user.location.city}`;
            const state = user.location.state;

            // cargo los datos de las variables en los elementos html
            document.getElementById('Foto').src = photo;
            document.getElementById('Nombre').textContent = name;
            document.getElementById('Email').textContent = `Email: ${email}`;
            document.getElementById('Direccion').textContent = `Dirección: ${address}`;
            document.getElementById('Estado').textContent = `Estado: ${state}`;
        })
        .catch(error => {
            console.error('Error al obtener los datos del usuario:', error);
        });
}

// evento boton
document.getElementById('Btn').addEventListener('click', usuarioRandom);

// nuevo usuario con cada F5 de la web
window.onload = usuarioRandom;
