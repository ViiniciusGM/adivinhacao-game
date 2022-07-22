const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let xAttempts = 1;

function handleTryClick(event){
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');
  document.querySelector(".screen2 h3").innerHTML = `O Numero era: ${randomNumber}`
  
  if(Number(inputNumber.value) == randomNumber){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} Tentativas`
  }

  inputNumber.value = ""

  xAttempts++;
}

function resetClick() {
  screen1.classList.remove('hide');
  screen2.classList.add('hide');
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', resetClick)


