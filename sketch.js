var bg,bgI;
var plane, planeImg;
var ms1Img,ms2Img,ms3Img,ms4Img,ms5Img;
var missileI;
var s1I,s2I,dia,diaI;
var ufo1I,ufo2I;
 
function preload(){
 
  bgI = loadImage("background.png");
  planeImg = loadImage("plane.png");
  ms1Img = loadImage("ms1.png");
  ms2Img = loadImage("ms2.png");
  ms3Img = loadImage("ms3.png");
  ms4Img = loadImage("ms4.png");
  ms5Img = loadImage("ms5.png");
  missileI = loadImage("missile.png");
  s1I = loadImage("star2.png");
  s2I = loadImage("star3.png");
  diaI = loadImage("diamond.png");
  ufo1I = loadImage("ufo.png");
  ufo2I = loadImage("ufo1.png");

}

function setup() {
  createCanvas(700,700);

  bg = createSprite(350,350,0,0);
  bg.addImage(bgI);
  bg.scale = 2;

  plane = createSprite(0,330,0,0);
  plane.addImage(planeImg);
  plane.scale = 0.25;

}

function draw() {
  background(0);
  edges = createEdgeSprites();
    
  if(keyDown(UP_ARROW)){ 
    plane.y = plane.y - 5
  }

  if(keyDown(DOWN_ARROW)){
    plane.y = plane.y + 5
  }

  if(keyDown("space")){
    missile();
  }

  plane.collide(edges)
  monsters();  
  monsters1();
  diamond();
  stars();
  ufos();

  drawSprites();

}

function monsters(){
    
  if(frameCount % 240 === 0){
    var ms = createSprite(750,0,10,10);
    ms.velocityX = -4;
    ms.y = Math.round(random(25,600));

    var rand = Math.round(random(1,3));
    switch(rand) {

      case 1: ms.addImage(ms3Img);
      ms.scale = 0.3;
      break;

      case 2: ms.addImage(ms4Img);
      ms.scale = 0.3;
      break;

      case 3: ms.addImage(ms5Img);
      ms.scale = 0.3;
      break;

    }}}

function monsters1(){
    
  if(frameCount % 190 === 0){
    var ms1 = createSprite(750,0,10,10);
    ms1.velocityX = -4;
    ms1.y = Math.round(random(25,600));
  
    var rand = Math.round(random(1,2));
    switch(rand) {

      case 1: ms1.addImage(ms1Img);
      ms1.scale = 0.3;
      break;

      case 2: ms1.addImage(ms2Img);
      ms1.scale = 0.3;
      break;

    }}}

function missile(){
  var missile = createSprite(80,0,0,0);
    missile.addImage(missileI);
    missile.scale = 0.1;
    missile.y = plane.y;
    missile.lifetime = 300;
    missile.velocityX = 3;
    missile.visible = true;
  }

function diamond() {
  if(frameCount % 230 === 0){
    var dia = createSprite(750,0,0,0);
    dia.y = Math.round(random(20,600));
    dia.addImage(diaI);
    dia.scale = 0.12;
    dia.lifetime = 300;
    dia.velocityX = -4;
   
  }}

function stars(){
    
  if(frameCount % 260 === 0){
    var st = createSprite(750,0,10,10);
      st.velocityX = -4;
      st.y = Math.round(random(25,600));
      
      var rand = Math.round(random(1,2));
      switch(rand) {
  
        case 1: st.addImage(s1I);
        st.scale = 0.09;
        break;
  
        case 2: st.addImage(s2I);
        st.scale = 0.2;
        break;
      }}}

function ufos(){
    
  if(frameCount % 240 === 0){
    var ufo = createSprite(750,0,10,10);
      ufo.velocityX = -4;
      ufo.y = Math.round(random(25,700));
          
      var rand = Math.round(random(1,2));
      switch(rand) {
      
        case 1: ufo.addImage(ufo1I);
        ufo.scale = 0.2;
        break;
      
        case 2: ufo.addImage(ufo2I);
        ufo.scale = 0.2;
        break;
      }}}   