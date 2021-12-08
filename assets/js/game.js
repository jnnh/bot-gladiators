var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    while (playerHealth>0 && enemyHealth>0){
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight.");
            playerMoney= playerMoney - 10;
            break;
        }
    }
    else if (promptFight == "FIGHT" || promptFight == "fight") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining health.");
      if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!")
          playerMoney= playerMoney + 20
          break;
      }
      else {
          window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
      }
      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining health.");
      if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
      }
      else {
          window.alert(playerName + " still has " + playerHealth + " health remaining.");
      }
    }
    else {
        window.alert("entry not valid. try again");
    }
}
}
var endGame = function (){
    if (playerHealth > 0){
    window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    var playAgain = console.confirm("Would you like to play again?");
    if (playAgain){
        startGame()
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
var startGame = function () {
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    for (var i=0; i<enemyNames.length; i++){
        debugger;
        if (playerHealth>0){
             window.alert ("Welcome to Robot Gladiators! Round: " + ( i + 1 ) );
             var pickedEnemyName = enemyNames[i];
            enemyHealth = 20;
            fight (pickedEnemyName);
         }
        else {
            window.alert("You have lost your robot in battle. Game Over!");
            break;
    }
    endGame();
}
}
startGame();