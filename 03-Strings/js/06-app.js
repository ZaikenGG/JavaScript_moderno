const producto = "Monitor 20 Pulgadas";

// .repetear te va a permitir repetir una cadena de texto

const texto = " en Promocion".repeat(2);

console.log(texto);//en Promocion
console.log(`${producto} ${texto}!!!`);// Monitor 20 Pulgadas en Promocion en Promocion!!!

//Split, dividir un string
//Split hace que divide cada letra ejemplo: Erick ===> E, r, i, c, k

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(""));

const hobbies = "Leer, caminar, musica, programar";
console.log(hobbies.split(","));


const tweet = "Aprendiendo JavaScript moderno #JSModernoConJuan";
console.log(tweet.split("#"));// Aprendiendo JavaScript moderno / JSModernoConJuan
