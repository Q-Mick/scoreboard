let operation = ""
let board = 0 // 0 home 1 = away

let homeScore = 0
let awayScore = 0
function DrawScore(board,newScore){
 
  if(board == 0){
    newScore = homeScore
    document.getElementById('sc-home-elem').textContent = newScore
   return
  }
  newScore = awayScore
  document.getElementById('sc-away-elem').textContent = newScore
}

function changeScore(operation){
  switch (operation){
    case "plus-home":
      console.log(operation)
      homeScore++
      DrawScore(0, homeScore)
      break;

      case "minus-home":
      console.log(operation)
      homeScore--
      DrawScore(0, homeScore)
      break;

      case "plus-away":
      console.log(operation)
      awayScore++
      DrawScore(1, awayScore)
      break;

      case "minus-away":
      console.log(operation)
      awayScore--
      DrawScore(1, awayScore)
      break;

      case "reset":
        awayScore = 0
        homeScore = 0
        DrawScore(0,awayScore)
        DrawScore(1,homeScore)
        break;
  }
 
}