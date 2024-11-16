//Agregamos el metodo aritmetica al prototipo array
Array.prototype.aritmetica = function (){
    //verifica la propiedad length no sea 0 (cadena vacia)
    if(this.length === 0) {
        return null;
    }
    
    const suma = this.reduce((acumulador, valorActual) => acumulador+valorActual, 0);
    //suma todo y lo divide por la cantidad de elementos
    return suma / this.length;
}

let a1 = [10,20,30,100];
console.log('Media 1: '+ a1.aritmetica());

let a2 = [999,44,56,22];
console.log('Media 2: '+ a2.aritmetica());

let a3 = [74,31,23,55];
console.log('Media 3: '+ a3.aritmetica());




