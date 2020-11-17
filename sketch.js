//Create variables here
var s=0 
var database
var dog,dogImg1,dogImg2

function preload(){
dogImg1=loadImage("images/dogImg.png")
dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database()
  database.ref("score").on("value",(data)=>{
    s=data.val()
  })
  dog=createSprite(420,425)
  dog.addImage("DogImg",dogImg1)
  dog.addImage("DogImg2",dogImg2)
  dog.scale=0.2
  
}


function draw() {  
  background("green")
  
  
  fill("white")
  text("score"+s,400,350,)
  drawSprites();
  //add styles here

}
function keyPressed(){
  if(keyCode== DOWN_ARROW){
    console.log("up")
    dog.changeImage("DogImg2",dogImg2)
    s=s+100
    database.ref("/").update({
      score:s
      
    })
  }
  else if(keyCode==UP_ARROW) {
    console.log("dpwn")
    dog.changeImage("DogImg",dogImg1)
    s=s+100
    database.ref("/").update({
      score:s

    })
  }
  

 
 


}
