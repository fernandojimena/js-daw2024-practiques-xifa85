// Tipo de objeto
class Ordenador {
    constructor (marca, modelo, memoria = 4, capacidad = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas
        }
        toString () {
            return 'Marca: '+this.marca+
            '- Modelo: '+this.modelo+
            '- Memoria: '+this.memoria+'GB'+
            '- Capacidad: '+this.capacidad+'GB'+
            '- Pulgadas: '+this.pulgadas+' Pulgadas';
    }
}

class Portatil extends Ordenador {
    constructor (marca, modelo, memoria = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, memoria, capacidad, pulgadas);
        this.autonomia = autonomia
        }
        toString () {
            return super.toString()+ '- Autonomia: '+this.autonomia+' hs';
        }
}

let ordenadorGamer = new Ordenador('Amd','Gamer',32);
console.log(ordenadorGamer.toString());
console.log("-------")

let ordenadorOffice = new Ordenador('Intel','Office');
console.log(ordenadorOffice.toString());
console.log("-------")

let portatil = new Portatil('Lenovo','Thinkpad');
console.log(portatil.toString());