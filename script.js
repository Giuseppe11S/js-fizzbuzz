
/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// Generare tutti i numeri da 1 a 100
// Operatore % se il risultato è 0, è un multiplo del numero scelto.
// Condizioni per trovare i multipli di 3 && 5 ed 3 e 5 singolarmente 

// Genera numeri 1 a 100
for(let i = 1; i <= 100; i++){
  // Stampa sia i multipli di 3 che i multipli di 4
  if ( i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  }
  // Stampa i multpli di 5 e rimanda Buzz
  else if (i % 5 === 0){
    console.log('Buzz');
  }
  //Saampa i multipli di 3 e rimanda Fizz
  else if (i % 3 === 0){
    console.log('Fizz');
  }
  // Stampa i numeri rimanenti 
  else {
    console.log(i);
  }
};