var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    if (promptFight == "FIGHT" || promptFight == "fight") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining health.");
      if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!")
      }
      else {
          window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
      }
      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining health.");
      if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
      }
      else {
          window.alert(playerName + " still has " + playerHealth + " health remaining.");
      }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip this fight.");
    }
    else {
        window.alert("entry not valid. try again");
    }
}
fight();