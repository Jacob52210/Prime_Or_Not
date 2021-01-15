// 0, 1 are not prime.
// 2 is the only even number that is prime. All others are not prime.


function checkIfPrime(number){
  if(number>1){
    for(n=2; n<number; n++){
      if(number % n === 0 && number !== 1){
        console.log(`Your number, ${number}, is not prime.`);
        return;
      } 
    }
    
    console.log(`Your number, ${number}, is prime.`);
    return; 
  }  console.log(`Your number, ${number}, is either one or less.`);
}

function handleForm(e){
  let numInput = document.getElementById('numInput').value;

  e.preventDefault();
  if(numInput === ""){
    console.log("Please enter a number.");
  } else {
    checkIfPrime(numInput.trim());
  }
}

