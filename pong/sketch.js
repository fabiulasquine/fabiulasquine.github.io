//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [13, 255, 0];
let velocidadeX = 8;
let velocidadeY = 8;

//Variáveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [242, 255, 0]; //Preto

//Variáveis Raquete do Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [148, 3, 252];//RGB

// váriaveis do jogo
let pontosMeus = 0;
let pontosOponente =0;

let pont;
let raquetada;

function preLoad(){
raquetada = loadSound('raquetada.mp3');
ponto = loadSound('ponto.mp3');
}

//Configuração Inicial
function setup() {
createCanvas(600, 400);
largura = width;
altura = height;
print("Largura: "+largura+" Altura: "+altura);

}
//Desenha - Looping infinito while(1) / Sempre
function draw() {
background(255, 0, 174);//rosa
  //se os pontosMeus não forem maiore3s ou 
  //iguais a 10 ou os pontos do oponente
  //não forem maiores ou igual a 10, então 
  //JOGA!!!
 if(!(pontosMeus >= 10 || pontosOponente >= 10))
  jogo();
else
  mostraVencedor();
//print("yMinhaRaquete: " + yMinhaRaquete);
} //draw - desenha
//não apagar a chave acima!!!!!!!!!!

function mostraVencedor(){
if(pontosMeus >= 10){
  fill(52, 235, 174)//verde agua
  rect(300,0,300,400);//metade direita da tela
  textAlign(CENTER);
  noStroke();
  fill(255, 0, 0)//vermelho
  textSize(30);
  text("Lado Direito é campeão", 300, 200)
}else{
  fill(0, 255, 64)//verde
  rect(0,0,300,400);//metade direita da tela
  textAlign(CENTER);
  noStroke();
  fill(0, 26, 255)//azul
  textSize(30);
  text("Lado Esquerdo é campeão" ,300, 200)
  } 
}

function jogo(){
mostraBolinha();
movimentaBolinha();
verificaColisao();
mostraRaquete();
movimentaMinhaRaquete();
movimentaRaqueteOponente();
verificaColisaoRaquete();
marcaPonto();
mostraPlacar();
}

function mostraPlacar(){
  textSize(30);
  strokeWeight(4);
  stroke(189, 126, 247);
  
  fill(3, 202, 252); //retangolo azul
  rect(425, 12, 60, 30, 10);//retangulo meus pontos
  rect(125,12,60,30,10);// retangulo pontos do oponente
  
  fill(252); //texto branco
  textAlign (CENTER);//Alinhamento centralizado do texto
  text(pontosMeus, 450, 40);
  text(pontosOponente, 150, 40);
}


function marcaPonto(){

  if
    (xBolinha < 10){
      pontosMeus += 1; 
    }
  if(xBolinha > 590){
    pontosOponente += 1;
    ponto.play();
  }

 // print ("Meus pontos:" + pontosMeus + "Oponente" + pontosOponente);

}// não deletar//

function verificaColisaoRaquete(){

if(xBolinha + raio > xMinhaRaquete &&
yBolinha - raio < yMinhaRaquete + alturaRaquete &&
yBolinha + raio > yMinhaRaquete){

if(!(xBolinha < 300 && velocidadeX > 0 ||
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1;
}

}//Minha Raquete

if(xBolinha - raio < xRaqueteOponente + larguraRaquete &&
yBolinha - raio < yRaqueteOponente + alturaRaquete &&
yBolinha + raio > yRaqueteOponente){

if(!(xBolinha < 300 && velocidadeX > 0 ||
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1;
}

}//Raquete do Oponente

} //Não me deleta pelo amor de Deus

function movimentaMinhaRaquete(){

if(keyIsDown(UP_ARROW)){//SETA_PARA_CIMA - 87 W

if(yMinhaRaquete < 0){
yMinhaRaquete = 0; //Corrigindo
}else{
yMinhaRaquete -= 10; //Velocidade da Raquete
}
}

if(keyIsDown(DOWN_ARROW)){//SETA_PARA_BAIXO - 83 S
if(yMinhaRaquete > 300){
yMinhaRaquete = 300; //Corrigindo
}else{
yMinhaRaquete += 10; //Velocidade da Raquete
}
}
}

function movimentaRaqueteOponente(){
if(keyIsDown(87)){//SETA_PARA_CIMA - 87 W

if(yRaqueteOponente < 0){//Em cima
yRaqueteOponente = 0; //Corrigindo
}else{
yRaqueteOponente -= 10; //Velocidade da Raquete
}
}

if(keyIsDown(83)){//SETA_PARA_BAIXO - 83 S
if(yRaqueteOponente > 300){//Embaixo
yRaqueteOponente = 300; //Corrigindo
}else{
yRaqueteOponente += 10; //Velocidade da Raquete
}
}
}



function mostraRaquete(){
//Mostra minha raquete à direita
fill(corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete,
larguraRaquete, alturaRaquete);
//Mostra Raquete do Oponente à esquerda
fill(corRaqueteOponente);//COR
rect(xRaqueteOponente, yRaqueteOponente,
larguraRaquete, alturaRaquete);
}

//Cenário - Bordas da tela
function verificaColisao(){
//Colisão Horizontal com bordas laterais
if (xBolinha + raio > largura || xBolinha - raio < 0){
//velocidadeX = velocidadeX * -1
velocidadeX *= -1;
}
//Colisão Vertical com bordas superior e inferior
if (yBolinha + raio > altura || yBolinha - raio < 0){
velocidadeY *= -1;
}
}

function movimentaBolinha(){
  if(frameCount> 100){
//Velocidade Horizontal
xBolinha += velocidadeX;//Incremento de X
//Velocidade Vertical
yBolinha += velocidadeY;//Incremento de Y
  }//1 - if frameCount
}//2 - Movimenta Bolinha

function mostraBolinha(){
noStroke();
fill(corBolinha);
circle(xBolinha,yBolinha,diametro);
}