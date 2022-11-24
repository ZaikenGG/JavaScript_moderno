// La forma que puedes literar sobre los valores de un objeto

// objeto literal
const automobvil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for( let [caracteristicas, valor] of Object.entries(automobvil)) {
    console.log(caracteristicas); // modelo, year, motor
    console.log(valor);// camaro, 1969, 6.0
}