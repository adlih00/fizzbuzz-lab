// -Inicio- //
for (let i = 1; i <= (1000); i++ ) { 
    if ((i%5 === 0) && (i%3 === 0) ){
        //Si el numero i es divisible entre 5 y 3, entonces...
        console.log("FizzBuzz"); 
    }else if ((i%5 === 0)) {
     // Si el numero i es divisible solo entre 5, entonces...
        console.log("Buzz"); 
    }else if ((i%3 === 0)) {
     // Si el numero i es divisible solo entre 5, entonces...
        console.log("Fizz"); 
    }else {
     // Sino cumple ninguna de las anteriores, entonces... 
        console.log(` ${i}`);
    }   
}
// -Fin- //
