var gameState=0
var database,pcount,canvas

var game,player,form
function setup(){
    canvas=createCanvas(500,500);
    database=firebase.database();
   
}

function draw(){
    background("white");
     game=new Game()
    game.getstate()
    game.start()
}

