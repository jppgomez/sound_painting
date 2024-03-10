//Ecrã de visualização
let done = false;
let home = true;
let about = false;

//Brush
let softBrush;

//Som
let context,
  laranja,
  vermelho,
  amarelo,
  verde,
  azul_claro,
  azul_escuro,
  roxo,
  rosa;
let panning;

//Arrays - guardar os pontos e respetivas cores
let points = [];
let colors = [];

//Canvas Responsivo
let w = window.innerWidth;
let h = window.innerHeight;

window.onload = function () {
  context = new AudioContext();
};

function preload() {
  //Som
  laranja = loadSound("assets/sounds/laranja_mixagem.mp3");
  amarelo = loadSound("assets/sounds/amarelo_mixagem.mp3");
  verde = loadSound("assets/sounds/verde_mixagem.mp3");
  azul_claro = loadSound("assets/sounds/azul_claro_mixagem.mp3");
  azul_escuro = loadSound("assets/sounds/azul_escuro_mixagem.mp3");
  roxo = loadSound("assets/sounds/roxo_mixagem.mp3");
  rosa = loadSound("assets/sounds/rosa_mixagem.mp3");
  vermelho = loadSound("assets/sounds/vermelho_mixagem.mp3");

  //Pincel
  Brush = loadImage("assets/images/brush2.png");
}

function setup() {
  let canvas = createCanvas(w - 60, h - 150);
  canvas.id("v_canvas");
  colorMode(HSB);
  background(7);
}

function draw() {
  if (home === true) {
    //Home Screen
    show("start_button", "block");
    show("about_button", "block");
    hide("v_canvas");
    hide("restart_button");
    hide("home_button");
    hide("save_button");

    if (about == true) {
      show("about_text", "flex");
      hide("title");
    } else {
      show("title", "flex");
      hide("about_text");
    }
  } else {
    //Tela

    //Esconder elementos home
    hide("start_button");
    hide("about_button");
    hide("title");
    hide("about_text");

    //canvas
    show("v_canvas", "block");

    //Modo de Desenho
    if (done == false) {
      background(7);
      canvas_texture(2000);
      frameRate(30);

      //Botões
      show("done_button", "inline-block");
      hide("restart_button");
      hide("home_button");
      hide("save_button");

      //Som
      if (mouseIsPressed === true) {
        panning = map(mouseX, 0, w, -1.0, 1.0);
        laranja.pan(panning);
        amarelo.pan(panning);
        verde.pan(panning);
        azul_claro.pan(panning);
        azul_escuro.pan(panning);
        roxo.pan(panning);
        rosa.pan(panning);
        vermelho.pan(panning);

        if (mouseY < h - 150) {
          laranja.setVolume(0.5);
          amarelo.setVolume(0.5);
          verde.setVolume(0.5);
          azul_claro.setVolume(0.5);
          azul_escuro.setVolume(0.5);
          roxo.setVolume(0.5);
          rosa.setVolume(0.5);
          vermelho.setVolume(0.5);
        }

        console.log(mouseY);
      } else {
        laranja.setVolume(0);
        amarelo.setVolume(0);
        verde.setVolume(0);
        azul_claro.setVolume(0);
        azul_escuro.setVolume(0);
        roxo.setVolume(0);
        rosa.setVolume(0);
        vermelho.setVolume(0);
      }

      //Desenhar com o Hue a mudar ao longo do tempo
      drawBrush(frameCount % 1600);

      //Pontos
      if (mouseX != pmouseX || mouseY != pmouseY) {
        points.push([mouseX, mouseY]); //Guardar os pontos
      }

      //background(7);
    } else {
      //Esconder Clues
      hide("vermelho");
      hide("laranja");
      hide("amarelo");
      hide("verde");
      hide("azul_claro");
      hide("azul_escuro");
      hide("roxo");
      hide("rosa");

      //Modo de Display
      background(7);
      canvas_texture(2000);

      if (points.length > 0) {
        if (points[0][1] < 0) {
          //Limpar Arrays
          points.shift();
          colors.shift();
        }
      }

      //Botões
      hide("done_button");
      show("restart_button", "inline-block");
      show("home_button", "inline-block");
      show("save_button", "inline-block");

      if (points.length > 0) {
        for (let i = 0; i < points.length; i++) {
          //Ir buscar os pontos e cores respetivas para desenhar o final
          //stroke(colors[i], 70, 100, 255);
          //strokeWeight(10);
          tint(colors[i], 40, 88, 255);
          if (i == 0) {
          } else {
            /*line(
              points[i][0],
              points[i][1],
              points[i - 1][0],
              points[i - 1][1]
            );*/
            image(Brush, points[i][0], points[i][1], 45, 45);
          }
        }
      }
    }
  }
}

//Função de desenho
function drawBrush(hue) {
  //definir a cor de acordo com o hue dado
  let color;
  if (hue >= 1 && hue <= 200) {
    vermelho.pause();
    if (!laranja.isPlaying()) laranja.loop();

    //Cor
    color = 30;

    //Clue Visual
    show_clue(
      "laranja",
      "vermelho",
      "amarelo",
      "verde",
      "azul_claro",
      "azul_escuro",
      "roxo",
      "rosa"
    );
  } else if (hue >= 201 && hue <= 400) {
    laranja.pause();
    if (!amarelo.isPlaying()) amarelo.loop();

    //Cor
    color = 60;

    //Clue Visual
    show_clue(
      "amarelo",
      "vermelho",
      "laranja",
      "verde",
      "azul_claro",
      "azul_escuro",
      "roxo",
      "rosa"
    );
  } else if (hue >= 401 && hue <= 600) {
    amarelo.pause();
    if (!verde.isPlaying()) verde.loop();

    //Cor
    color = 105;

    //Clue Visual
    show_clue(
      "verde",
      "vermelho",
      "laranja",
      "amarelo",
      "azul_claro",
      "azul_escuro",
      "roxo",
      "rosa"
    );
  } else if (hue >= 601 && hue <= 800) {
    verde.pause();
    if (!azul_claro.isPlaying()) azul_claro.loop();

    //Cor
    color = 195;

    //Clue Visual
    show_clue(
      "azul_claro",
      "vermelho",
      "laranja",
      "amarelo",
      "verde",
      "azul_escuro",
      "roxo",
      "rosa"
    );
  } else if (hue >= 801 && hue <= 1000) {
    azul_claro.pause();
    if (!azul_escuro.isPlaying()) azul_escuro.loop();

    //Cor
    color = 225;

    //Clue Visual
    show_clue(
      "azul_escuro",
      "vermelho",
      "laranja",
      "amarelo",
      "verde",
      "azul_claro",
      "roxo",
      "rosa"
    );
  } else if (hue >= 1001 && hue <= 1200) {
    azul_escuro.pause();
    if (!roxo.isPlaying()) roxo.loop();

    //Cor
    color = 285;

    //Clue Visual
    show_clue(
      "roxo",
      "vermelho",
      "laranja",
      "amarelo",
      "verde",
      "azul_claro",
      "azul_escuro",
      "rosa"
    );
  } else if (hue >= 1201 && hue <= 1400) {
    roxo.pause();
    if (!rosa.isPlaying()) rosa.loop();

    //Cor
    color = 330;

    //Clue Visual
    show_clue(
      "rosa",
      "vermelho",
      "laranja",
      "amarelo",
      "verde",
      "azul_claro",
      "azul_escuro",
      "roxo"
    );
  } else if (hue >= 1401 || hue <= 0) {
    rosa.pause();
    if (!vermelho.isPlaying()) vermelho.loop();

    //Cor
    color = 0;

    //Clue Visual
    show_clue(
      "vermelho",
      "laranja",
      "amarelo",
      "verde",
      "azul_claro",
      "azul_escuro",
      "roxo",
      "rosa"
    );
  }

  stroke(50);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);

  if (mouseX != pmouseX || mouseY != pmouseY) {
    colors.push(color); //guardar a cor de cada ponto
  }
}

//Textura
function canvas_texture(num) {
  for (let i = 0; i < num; i++) {
    //Primeiro ponto
    let x1 = random() * w;
    let y1 = random() * h;

    //ângulo
    let theta = random() * 2 * Math.PI;

    //Segundo ponto
    let segmentLength = random() * 2 + 2;
    let x2 = cos(theta) * segmentLength + x1;
    let y2 = sin(theta) * segmentLength + y1;

    stroke(80);
    strokeWeight(0.1);
    line(x1, y1, x2, y2);
  }
}

//Botões

//Home > Canvas
document.getElementById("start_button").addEventListener("click", function () {
  home = false;
  context.resume().then(() => {});
});

//About
document.getElementById("about_button").addEventListener("click", function () {
  about = !about;
});

//Canvas > Home
document.getElementById("home_button").addEventListener("click", function () {
  home = true;
  done = false;
  about = false;
  points = [];
  colors = [];
});

//Parar de desenhar
document.getElementById("done_button").addEventListener("click", function () {
  done = true;
  console.log(done);

  vermelho.pause();
  laranja.pause();
  amarelo.pause();
  verde.pause();
  azul_claro.pause();
  azul_escuro.pause();
  roxo.pause();
  rosa.pause();
});

//Recomeçar
document
  .getElementById("restart_button")
  .addEventListener("click", function () {
    done = false;
    points = [];
    colors = [];
    //laranja.loop();
  });

//Guardar a pintura
document.getElementById("save_button").addEventListener("click", function () {
  saveCanvas("My_Sound_Painting.png");
});

//Controlar a Visibilidade de Elementos
function hide(element_id) {
  var x = document.getElementById(element_id);
  x.style.display = "none";
}

function show(element_id, element_display) {
  var x = document.getElementById(element_id);
  let display = element_display;
  x.style.display = display;
}

function show_clue(
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8
) {
  let main = document.getElementById(color1);
  let col1 = document.getElementById(color2);
  let col2 = document.getElementById(color3);
  let col3 = document.getElementById(color4);
  let col4 = document.getElementById(color5);
  let col5 = document.getElementById(color6);
  let col6 = document.getElementById(color7);
  let col7 = document.getElementById(color8);

  main.style.display = "inline-block";
  col1.style.display = "none";
  col2.style.display = "none";
  col3.style.display = "none";
  col4.style.display = "none";
  col5.style.display = "none";
  col6.style.display = "none";
  col7.style.display = "none";
}
