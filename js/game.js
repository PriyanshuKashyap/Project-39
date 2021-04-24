class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form();
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     //console.log(index);
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     //console.log(index);
                     players[index - 1].x = x;
                     
                     players[index - 1].y = y;
                     //console.log(index);
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                     //Issue #1
                     /*if (player1.isTouching(fruits) || player2.isTouching(fruits)) {
                         fruits.destroy();
                     }*/

                     if (fruits.isTouching(player1) || fruits.isTouching(player2)) {
                         fruits.destroy();
                     }
                  }
                /*console.log(players[index - 1]);
                console.log(index);
                console.log(index - 1);
                console.log(players);*/
         
         
        
         

    }
    
    end(){
       console.log("Game Ended");
    }
}
//Editing Required: The project has not been completed and this file requires further proofreading and editing
//Unresolved or difficult resolved issues(1): The scope of the variable "fruits" unexpectedly modifies when programming for destroying fruits on baskets(player sprites). 
//Error reasoning: Reasoning is not strong or proves the error strongly.
//Uncaught Error: overlap can only be checked between sprites or groups
//Uncaught TypeError: Cannot read property 'touches' of undefined
/*at p5._updateTouchCoords (p5.js:59561)
  at p5._updateNextTouchCoords (p5.play.js:265)
  at p5._onmousedown (p5.play.js:302)*/
  