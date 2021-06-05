class Player{

constructor(){

}

getpcount(){
  var  playercountref=database.ref("playercount")
    playercountref.on("value",function(data){
    pcount=data.val()
    })
}

updatepcount(count){
database.ref('/').update({
    playercount:count
})


}

 updatename(name){

    var rightpos="player"+pcount
    database.ref(rightpos).set({
    name:name
})
 }
















}