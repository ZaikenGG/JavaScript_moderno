const aprendiendo = function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript')



// si solo es una linea
const aprendiendo3 = (tecnologia) => `Aprendiendo ${tecnologia}`

console.log(aprendiendo3('JavaScript')); 



//si usas arrow funcion los parantecis no son opcionales, lo puedes quitar
const aprendiendo4 = tecnologia => `Aprendiendo ${tecnologia}`

console.log(aprendiendo3('JavaScript')); 


// y si quieres pasar dos parametros ahi si ya es con uso de parentecis 
const aprendiendo5 = (tecnologia, tegnologia2) => `Aprendiendo ${tecnologia} y ${tegnologia2}`

console.log(aprendiendo3('JavaScript', 'Node.js')); 