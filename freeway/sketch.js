

function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  if(!(placar >= 10 || placar2 >= 10))
  jogo();
else
  mostraVencedor();
}
  //fim do draw
  
  function mostraVencedor(){
if(placar >=10){
  textAlign(CENTER);
  noStroke();
  fill(114, 66, 245)//roxo
  textSize(30);
  text("Lado Esquerdo é Campeão!",300,200);
  }else{
  if(placar2 >=10){
  textAlign(CENTER);
  noStroke();
  fill(245, 66, 129)//rosa
  textSize(30);
  text("Lado Direito é Campeão!",300,200);
  }
  }
}


function jogo(){
mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarro();
  verificaColisao();
  mostraPlacar();
  mostraAtor2();
  movimentaAtor2();
  verificaColisao2();
  mostraPlacar2();
  mostraVencedor();
}