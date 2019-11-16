class Jugador {
    constructor(nombre, ocupacion, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }

    toString(){
        console.log("Información de cada jugador: " + "Nombre: "  + this.nombre + " Ocupación: " + this.ocupacion + " Vida: " + this.puntosVida + " Facción: " + this.faccion);
    }
}

let jugador1 = new Jugador("Manolo", "Dentista", "Mercenario 1");
let jugador2 = new Jugador("Rubén", "Chuchero", "Mercenario 2");

let lista = new Array(jugador1, jugador2);

lista.toString();