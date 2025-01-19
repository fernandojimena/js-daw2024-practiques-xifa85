const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('delay'); 
  let user = document.getElementById('userNumber'); 
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    clearFields(); 
    procesarFetch(numsecs.value, user.value); 
  });
});

// FUNCION CLEARFIELD
function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

// FUNCION PROCESARFETCH
async function procesarFetch(numsecs, user) {
  try {
    // PARTE 1
    // controla que el usuario ingrese de 1 a 12
    if (user < 1 || user > 12) {
      throw new Error('Número de usuario no válido. Debe estar entre 1 y 12.');
    }
    // Solicitud get con el delay ingresado por el usuario
    const userResponse = await fetch(`${BASE_URL}${user}?delay=${numsecs}`);
    // si la respuesta no es correcta crea el error
    if (!userResponse.ok) {
      throw new Error(`Error ${userResponse.status}: Usuario no encontrado`);
    }
    // Almacena en variables los datos del usuario
    const userData = await userResponse.json();
    const userInfo = userData.data;

    // Rellenar los campos de ID y EMAIL con los datos obtenidos
    document.getElementById('userId').textContent = userInfo.id;
    document.getElementById('userEmail').textContent = userInfo.email;

    // PARTE 2
    // Solicitud POST
    const postResponse = await fetch(POSTMAN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: userInfo })
    });
    if (!postResponse.ok) {
      throw new Error('Error al enviar el usuario con POST');
    }
    // Extraer la respuesta del POST
    const postData = await postResponse.json();
    // Name -> first_name
    document.getElementById('userName').textContent = postData.json.data.first_name;

    // PARTE 3
    // Status -> código de respuesta 200
    document.getElementById('status').textContent = '200 OK';

  } catch (error) {
    // En caso de error
    console.error('Ha ocurrido un error:', error);
    document.getElementById('status').textContent = error.message;
  }
}