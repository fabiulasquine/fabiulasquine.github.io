//Ator
let yAtor = 366;
let xAtor = 100;
let colidiu = false;
let placar = 0;
let placar2 = 0;

let yAtor2 = 366;
let xAtor2 = 350;


function mostraPlacar2(){
  if(yAtor2 < 15){
     placar2 +=1;
    voltaAtorParaPosicaoInicial2();
    somPonto.play();
     }
  textAlign(CENTER);
  textSize(25);
  fill(color(53, 252, 3));
  text(placar2, 350,30);
}

function verificaColisao2(){
//collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
   // Pergunta se colidiu, recebe reposta.
    colidiu = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros[i],altura,xAtor2,yAtor2,5);
  if(colidiu){
  console.log("Colidiu");
  voltaAtorParaPosicaoInicial2();
    somColidiu.play();
    if(placar2 > 0) // Só tira ponto se for maior que 0.
     placar2 -=1; // Perde ponto!
  }
  }
}

function voltaAtorParaPosicaoInicial2(){
yAtor2=366;
}

function mostraAtor2(){
    image(imagemDoAtor,xAtor2,yAtor2,30,30);
  }
  
   function movimentaAtor2(){
if (keyIsDown(87)) {
  if(yAtor2 > 5)
  yAtor2 -= 3;
  }
   
  if (keyIsDown(83)) {
    if(yAtor2 < 366)
    yAtor2 += 3; 
    }
 }
function mostraPlacar(){
  if(yAtor < 15){
     placar +=1;
    voltaAtorParaPosicaoInicial();
    somPonto.play();
     }
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 190,30);
}

function verificaColisao(){
//collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
   // Pergunta se colidiu, recebe reposta.
    colidiu = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros[i],altura,xAtor,yAtor,5);
  if(colidiu){
  console.log("Colidiu");
  voltaAtorParaPosicaoInicial();
    somColidiu.play();
    if(placar > 0) // Só tira ponto se for maior que 0.
     placar -=1; // Perde ponto!
  }
  }
}

function voltaAtorParaPosicaoInicial(){
yAtor=366;
}
function mostraAtor(){
    image(imagemDoAtor,xAtor,yAtor,30,30);
  }
  
  
  function movimentaAtor(){
if (keyIsDown(UP_ARROW)) {
  //Se a seta para cima for pressionada
  //E o yAtor maior que 5, ent]ao sobe.
  if(yAtor > 5)
  yAtor -= 3;
  }
   

  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor < 366)
    yAtor += 3;
    
  }
}