/* constructor
verificamos que sea tipo numero
verificamos que lo que da es un numero 
operador ternario si da positiva la comprovacion colocamos el valor del parametro x sino un 0
*/
function Punto (x, y) {
    //Propiedades
    this.x = (typeof x === 'number' && !isNaN(x)) ? x : 0;
    this.y = (typeof y === 'number' && !isNaN(y)) ? y : 0;

    //Metodo cambiar
    this.cambiar = function(nx,ny) {
        this.x = (typeof nx === 'number' && !isNaN(nx)) ? nx : 0;
        this.y = (typeof ny === 'number' && !isNaN(ny)) ? ny : 0;
    };

    //Metodo copiar
    this.copiar = function() {
        return new Punto (this.x, this.y);
    };

    //Metodo suma
    this.sumar = function (p2) {
        if (typeof p2.x === 'number' && typeof p2.y === 'number') {
            return new Punto (this.x + p2.x, this.y +p2.y);
        }
        // retorno si el valor no es valido
        return null;
    };
}


// Validaciones
let p1 = new Punto(10,32);
console.log('P1-X: ' + p1.x + '\n' + 'P1-Y: ' + p1.y);

// Metodos Cambiar Copiar Sumar
p1.cambiar(20,62);
console.log('cambio-P1-X: ' + p1.x + '\n' + 'cambio-P1-Y: ' + p1.y);

let p2 = p1.copiar();
console.log('copia-P2-X: ' + p2.x + '\n' + 'copia-P2-Y: ' + p2.y);

let p3 = p2.sumar(new Punto(10,10));
console.log('P3-X: ' + p3.x + '\n' + 'P3-Y: ' + p3.y);