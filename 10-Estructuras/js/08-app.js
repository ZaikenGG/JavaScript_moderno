const autenticado = true;

// buena practica
if (autenticado) {
    console.log('El usuario esta autenticado');
}





//buena prectica y se usa mas en la realidad
const puntaje = 500

// Los return solo funcionan dentro de una funcion

function revisarPuntaje(){

    if(puntaje > 400){
        console.log('Exelente');
        return;  // el return dice bueno ya no te ejecutes el resto del codigo
    }
    

    if(puntaje > 350){
        console.log('Buen puntaje... Felicidades');
        return; // el return dice bueno ya no te ejecutes el resto del codigo
    }

} 

revisarPuntaje()