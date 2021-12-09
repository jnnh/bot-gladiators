var randomNumber = function(min,max){
    var value = Math.floor(Math.random() * (max-min+1)+min);
    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money= 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money. Leaving shop now");
        }
    },
    upgradeAttack: function(){
        if (this.money >=7) {
            this.attack += 6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money. Leaving shop now");
        }
    }
};

var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10,14)
    },
    {
        name:"Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
    ];

var fight = function(enemy){
    while (playerInfo.health>0 && enemy.health>0){
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip this fight.");
            playerInfo.money= Math.max(0,playerInfo.money - 10);
            break;
        }
    }
    else if (promptFight == "FIGHT" || promptFight == "fight") {
      var damage = randomNumber (playerInfo.attack-3,playerInfo.attack);
      enemy.health = Math.max(0,enemy.health - damage);
      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " remaining health.");
      if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!")
          playerInfo.money= playerInfo.money + 20
          break;
      }
      else {
          window.alert(enemy.name + " still has " + enemy.health + " health remaining.");
      }
      var damage = randomNumber (enemy.attack, enemy.attack - 3);
      playerInfo.health = Math.max (0,playerInfo.health - damage);
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " remaining health.");
      if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
      }
      else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
      }
    }
    else {
        window.alert("entry not valid. try again");
    }
}
};
var startGame = function () {
    playerInfo.reset();
    for (var i=0; i<enemyInfo.length; i++){
        if (playerInfo.health>0){
             window.alert ("Welcome to Robot Gladiators! Round: " + ( i + 1 ) );
             var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber (40,60);
            fight (pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length-1){
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
    if (playerInfo.health > 0){
    window.alert("Great job, you've survived the game! you now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth()
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack()
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