// Ejercicio 01
const paises = ["España", "Francia", "Alemania", "Italia"];

// recorrer con for of
for(let contry of paises){
    console.log(contry);
}

console.log("---------------------------");

delete paises[0];

// recorrer con for of
for(let contry of paises){
    if(contry != undefined){
    console.log(contry);
    }
}