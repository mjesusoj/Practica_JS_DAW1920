class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador){
        super.consumir();
    }


    
    /*
    consumir(jugador) {
        if (jugador.puntosVida > 0){
            if (jugador.puntosVida + this.poder > 100){
                jugador.puntosVida = 100;
            }else{
                jugador.puntosVida = jugador.puntosVida + this.poder;   
            }
        }
        
        console.log("El jugador " + ricardo.nombre + " ha consumido la planta " + this.nombre + " y tiene " + jugador.puntosVida + " y obtiene el beneficio de: " + this.poder + " puntos de vida ");
    }
    */
}