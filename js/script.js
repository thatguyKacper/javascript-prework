{
  const playGame = function (playerInput){
    clearMessages()

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
    }

    const displayResult = function (argComputerMove, argPlayerMove){

      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
      }
      else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
      }
      else {
        printMessage('Ja wygrywam!');
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
          argComputerMove = getMoveName(randomNumber),
          argPlayerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    displayResult(argComputerMove, argPlayerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1)
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2)
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
