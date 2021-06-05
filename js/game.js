class Game{
constructor(){

}
getstate(){
  var gamestateref= database.ref("gamestate")
   gamestateref.on("value",function(data){
     gameState=data.val();


   })
}

updatestate(state){
database.ref('/').update({
  gamestate:state

})

}

start(){

  if(gameState===0){
    player=new Player();
    player.getpcount()
    form=new Form()
    form.display();
  }

}


}
















