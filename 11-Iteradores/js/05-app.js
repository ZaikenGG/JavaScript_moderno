let i = 100; //inicio

do {
    if (i % 15 === 0) {
        console.log(`${i} FizzBuzz`);
      } else if (i % 3 === 0) { 
        console.log(`${i} Fizz`);
      } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
      }
  i++; // incremento
} while (1 < 10); // condicion
