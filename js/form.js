class Form{

constructor(){

}

display(){
var title=createElement('h2')
title.html("CAR RACING GAME")
title.position(225,10)

var input=createInput("name")
input.position(220,70)

var button=createButton("Submit")
button.position(250,150)

var greeting=createElement('h3')

greeting.position(250,180)



button.mousePressed(function(){

  input.hide()
  button.hide()
  

  var name=input.value()
   
   pcount=pcount+1;
   player.updatename(name)
  player.updatepcount(pcount)

 

greeting.html("welcome "+name)
})
}




















}