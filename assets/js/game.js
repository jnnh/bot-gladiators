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
};
var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i=0; i<enemyNames.length; i++){
        if (playerHealth>0){
             window.alert ("Welcome to Robot Gladiators! Round: " + ( i + 1 ) );
             var pickedEnemyName = enemyNames[i];
            enemyHealth = 20;
            fight (pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length-1){
                var shopConfirm = window.confirm("Would you like to enter the shop?");
                if (shopConfirm){
                shop();
                }
            }
         }
        else {
            window.alert("You have lost your robot in battle. Game Over!");
            break;
        }
    }
    endGame();
};
var endGame = function (){
    if (playerHealth > 0){
    window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    var playAgain = window.confirm("Would you like to play again?");
    if (playAgain){
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function(){
    var shopOptions = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptions){
        case "refill":
        case "REFILL":
            if (playerMoney >= 7){
                window.alert("refilling player's health by 20 for 7 dollars,");
                playerHealth= playerHealth + 20;
                playerMoney= playerMoney - 7;
            }
            else{
                window.alert("You do not have enough money. Leaving shop now.");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars,");
                playerAttack= playerAttack + 6;
                playerMoney= playerMoney - 7;
            }
            else{
                window.alert("You do not have enough money. Leaving shop now.");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("Invalid entry. try again");
            shop();
            break;
    }
};
startGame();