let i = 0; // Inicializar el while

while (i < 10) { // condicion

    if (i % 15 === 0) {
        console.log(`${i} FizzBuzz`);
      } else if (i % 3 === 0) { 
        console.log(`${i} Fizz`);
      } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
      }
      
    i++ // Incremento
}