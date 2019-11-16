let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

function recibirArray(puntuaciones){
    let array = puntuaciones.filter(item => item.puntuacion > 100).sort((a,b) => b.puntuacion - a.puntuacion);
    return array;
}

console.log(recibirArray(puntuaciones));

//let array = puntuaciones.filter(function(item){
    //return item.puntuacion > 100;
//});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter