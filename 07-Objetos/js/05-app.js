const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m',
    },
    fabricacion:{
        pais: 'China'
    }
}

console.log(producto.informacion.peso); // 1kg
console.log(producto.informacion.medida); // 1m

//Entrar en el sitaxis de pais 
console.log(producto.fabricacion.pais);// China