// 0, 1 are not prime.
// 2 is the only even number that is prime. All others are not prime.


function checkIfPrime(number){
  if(number>1){
    for(n=2; n<number; n++){
      if(number % n === 0 && number !== 1){
        document.getElementById('results').innerHTML = `Your number, ${number}, is not prime.`
        return;
      } 
    }
    document.getElementById('results').innerHTML = `Your number, ${number}, is prime.`
    return; 
  } document.getElementById('results').innerHTML = `Your number, ${number}, is either ONE or less.`
}

function handleForm(e){
  let numInput = document.getElementById('numInput').value;

  e.preventDefault();
  if(numInput === ""){
    document.getElementById('results').innerHTML = `Please enter a number.`
  } else {
    checkIfPrime(numInput.trim());
  }
}

