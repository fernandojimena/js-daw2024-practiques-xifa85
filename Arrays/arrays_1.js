// 01
const paises = ["España", "Francia", "Alemania", "Italia"];

for(let contry of paises){
    console.log(contry);
}
console.log("---------------------------");

delete paises[0];

for(let contry of paises){
    if(contry != undefined){
    console.log(contry);
    }
}