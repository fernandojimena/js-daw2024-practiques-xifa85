// GETCOOKIE
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// SETCOOKIE
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// DELETE COOKIE
function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// CONTADOR
function visitas() {
    var viewer = parseInt(getCookie('viewer')) || 0;
    viewer++;

    // Límite de 10
    if (viewer > 10) {
        viewer = 0;
        deleteCookie('viewer');
        alert('Máximo de 10 visitas superado');
    } else {
        // Inserta el nuevo valor de viewer en la cookie
        setCookie('viewer', viewer, 30);
    }

    // Mostrar número de visitas
    document.getElementById("contador").innerText = viewer;
}

window.onload = visitas;