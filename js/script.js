function getMoveName(argMoveId){
  if(argMoveId == 1)  {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    return 'score';
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
    return 'score';
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
    return 'score';
  }
  else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
    return 'score';
  }
  else if (playerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch!');
  }
  else {
    printMessage('Ja wygrywam!');
    return 'score';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else {
  computerMove = 'nożyce';
}
*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput== '2') {
  playerMove = 'papier';
}
else {
  playerInput = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}
else if (playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch!');
}
else if (computerMove == playerMove) {
  printMessage('Remis!');
}
else {
  printMessage('Ja wygrywam!');
}
*/

let score = displayResult(argComputerMove, argPlayerMove);
