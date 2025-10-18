var variavel_global={
    contando_enter:0,
    cancelarmenu: null,
    cancelarjogo: null,
    cancelarjogo2: null,
    teclado:null
};
var quadrado_preto = {
    canvas: document.getElementById("menu"),
    ctx: null,
    x: 0,
    y: 0,
    altura: 0,
    largura: 0,
    cor: "black",
    crescer: function(){
        this.ctx = this.canvas.getContext("2d");        
        this.ctx.beginPath();
        this.ctx.fillStyle = this.cor;
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
        this.ctx.closePath();
    }
};
var letras = {
    canvas: document.getElementById("menu"),
    ctx: null,
    x: 0,
    y: 0,
    contar: 0,
    contar2:0,
    fonte: "15px monospace",
    posicao:"center",
    cor: "white",
    aparecer: function(texto){
        this.ctx = this.canvas.getContext("2d");
        this.ctx.beginPath();
        this.ctx.fillStyle = this.cor;
        this.ctx.font = this.fonte;
        this.ctx.textAlign = this.posicao;
        this.ctx.fillText(texto,this.x,this.y);
        this.ctx.closePath();
    },
    x2: 0,
    y2: 0,
    fonte2: "13px monospace",
    posicao2:"center",
    cor2: "white",
    aparecer2: function(texto){
        this.ctx = this.canvas.getContext("2d");
        this.ctx.beginPath();
        this.ctx.fillStyle = this.cor2;
        this.ctx.font = this.fonte2;
        this.ctx.textAlign = this.posicao2;
        this.ctx.fillText(texto,this.x2,this.y2);
        this.ctx.closePath();
    }
};
var fundo_img = {
    canvas: document.getElementById("jogo"),
    ctx: document.getElementById("jogo").getContext("2d"),
    x: 0,
    contar: 0,
    contar2: 0,
    contar3: 0,
    contar4: 0,
    cor: "white",   
    img: new Image(),
    img2 : new Image(),
    vini: new Image(),
    vitoria: new Image(),
    diego: new Image(),
    imagem: function() {
            this.img.src = "IMAGENS/menu.png";
            this.img2.src = "IMAGENS/logo.png";
            this.ctx.drawImage(this.img, this.x, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = this.cor;
            this.ctx.fillRect(this.canvas.width*0.2, this.canvas.width*0.04, this.canvas.width*0.6, this.canvas.height*0.45);
            this.ctx.drawImage(this.img2, this.canvas.width*0.2, 0, this.canvas.width*0.6, this.canvas.height*0.6);
    },
    largura_original:document.getElementById("jogo").height*0.4,
    altura_original: document.getElementById("jogo").width*0.2,
    largura1: document.getElementById("jogo").height*0.4,
    altura1: document.getElementById("jogo").width*0.2,
    largura2: document.getElementById("jogo").height*0.4,
    altura2: document.getElementById("jogo").width*0.2,
    largura3: document.getElementById("jogo").height*0.4,
    altura3: document.getElementById("jogo").width*0.2,
    escolha: 1,
    imagem2: function() {
            this.ctx.beginPath();
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            this.img.src = "IMAGENS/menu.png";
            if (this.contar3==10){

                if(this.contar4==10){
                    this.contar3=0
                    this.contar4=0
                }   
                else
                    {
                    this.contar4+=1
                    this.vini.src = "IMAGENS/personagem/vini2.png";
                    this.vitoria.src = "IMAGENS/personagem/vitoria2.png";
                    this.diego.src = "IMAGENS/personagem/diego2.png";
                }
            }
            else
            {

                this.contar3+=1
                this.vini.src = "IMAGENS/personagem/vini.png";
                this.vitoria.src = "IMAGENS/personagem/vitoria.png";
                this.diego.src = "IMAGENS/personagem/diego.png";
            }
            this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.vini, this.canvas.width*0.1, this.canvas.height*0.5, this.altura1, this.largura1);
            this.ctx.drawImage(this.vitoria, this.canvas.width*0.4, this.canvas.height*0.5, this.altura2, this.largura2);
            this.ctx.drawImage(this.diego, this.canvas.width*0.7, this.canvas.height*0.5, this.altura3, this.largura3);
            this.ctx.fillStyle = letras.cor;
            this.ctx.font = letras.fonte;
            this.ctx.textAlign = letras.posicao;
            this.ctx.fillText("ESCOLHA SEU HEROI",letras.x,letras.y);
            this.ctx.closePath()
            
    }
};
var fundofase1 ={
escolha: null,
canvas: document.getElementById("fase1"),
fundo: new Image(),
x:document.getElementById("fase1").width*0,
y:document.getElementById("fase1").height*-1.0,
x_origin:document.getElementById("fase1").width*0,
y_origin:document.getElementById("fase1").height*-1.0,


iniciar: function(){
this.fundo.src="IMAGENS/fase1.png"
var ctx = this.canvas.getContext("2d");
ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
ctx.beginPath()
ctx.drawImage(this.fundo,this.x,this.y,this.canvas.width*2.5,this.canvas.height*2.5)
ctx.closePath()
}};
var atributos_personagem ={
    personagem: document.getElementById("personagem"),
    animacao: 0
}

document.addEventListener('keydown',function(evento2){
    tecla = evento2.key;
    variavel_global.teclado = tecla
    if(variavel_global.contando_enter>=3){
    if(tecla == 'ArrowLeft') {
        if(fundofase1.x>=fundofase1.x_origin){
            fundofase1.x==fundofase1.x_origin;
        }else{fundofase1.x += 5

        } 
       
    }
    else if(tecla == 'ArrowRight'){
        if(fundofase1.x*-1>=fundofase1.canvas.width+140){
            fundofase1.x =(fundofase1.canvas.width+140)*-1;
            
        }
        fundofase1.x -= 5
         
    }
    else if(tecla == 'ArrowUp'){
        if(fundofase1.y==fundofase1.y_origin){
            fundofase1.y+=20;

        }else{
            fundofase1.y=fundofase1.y_origin;
        }
    }
    else if(tecla == 'ArrowDown'){}
    else{


    }
}
})





function jogo(){
     abertura()
}

function abertura() {
        document.addEventListener('keydown', function(enter) {
    if (enter.key === "Enter") {
        variavel_global.contando_enter+=1
        letras.canvas.style.opacity = 0;
        letras.canvas.remove();

        
        if(variavel_global.contando_enter==2){
            document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    if(tecla == 'ArrowLeft') {if(fundo_img.escolha==1){fundo_img.escolha = 3}else if(fundo_img.escolha==3){fundo_img.escolha = 2}else if(fundo_img.escolha == 2){fundo_img.escolha=1} }
    if(tecla == 'ArrowRight'){if(fundo_img.escolha==3){fundo_img.escolha = 1}else if(fundo_img.escolha==1){fundo_img.escolha = 2}else if(fundo_img.escolha == 2){fundo_img.escolha=3} } 
})
            animacaojogo2()

        }
    }
});

    animacaomenu()
    animacaojogo()
    

    
}

function animacaomenu(){
    if(quadrado_preto.x==0){
        quadrado_preto.x = quadrado_preto.canvas.width * 0.5
        quadrado_preto.y = quadrado_preto.canvas.height * 0.5
    }
    quadrado_preto.largura += 2;
    quadrado_preto.altura += 2;
    quadrado_preto.x -=  1
    quadrado_preto.y -= 1
    quadrado_preto.crescer();
    if(quadrado_preto.altura >= quadrado_preto.canvas.width){
        animacao2menu()
        cancelAnimationFrame(variavel_global.cancelarmenu);
    }else{
    variavel_global.cancelarmenu =requestAnimationFrame(animacaomenu);
 }
}
function animacao2menu(){
    letras.ctx = letras.canvas.getContext("2d");
    letras.canvas.style.backgroundColor="black";
    letras.ctx.clearRect(0,0,letras.canvas.width,letras.canvas.height);
    letras.x = letras.canvas.width * 0.5
    letras.y = letras.canvas.height * 0.2   
    letras.aparecer("Seja bem vindo");   
   

    if(letras.y2==0){
        letras.x2 = letras.canvas.width * 0.5
        letras.y2 = letras.canvas.height * 0.5
    }
    else if (letras.contar==10){
            if(letras.contar2==10){
                letras.contar=0
                letras.contar2=0
            }else{
                letras.contar2+=1
                letras.y2 +=0.5
            }
     
    }else{

            letras.contar+=1
            letras.y2 -=0.5
              
    }
    letras.aparecer2("Precione Enter para entrar");
   requestAnimationFrame(animacao2menu);  
}

function animacaojogo(){
if (fundo_img.contar==50){
            if(fundo_img.contar2==50){
                fundo_img.contar=0
                fundo_img.contar2=0
            }else{
                fundo_img.contar2+=1
                fundo_img.x +=0.1
            }}
else{

            fundo_img.contar+=1
            fundo_img.x -=0.1
            
        
    }
fundo_img.imagem();
if(variavel_global.contando_enter==2){
    cancelAnimationFrame(variavel_global.cancelarjogo)

} else{
    variavel_global.cancelarjogo=requestAnimationFrame(animacaojogo);}
}
function animacaojogo2(){
if(fundo_img.escolha==1){
    fundo_img.altura1 =fundo_img.altura_original*1.2;
    fundo_img.largura1 =fundo_img.largura_original*1.2;
    fundo_img.altura2  = fundo_img.altura_original;
    fundo_img.largura2 = fundo_img.largura_original;
    fundo_img.altura3 = fundo_img.altura_original;
    fundo_img.largura3 = fundo_img.largura_original;
}else if(fundo_img.escolha==2){
    fundo_img.altura2 =fundo_img.altura_original*1.2;
    fundo_img.largura2 =fundo_img.largura_original*1.2;
    fundo_img.altura1  = fundo_img.altura_original;
    fundo_img.largura1 = fundo_img.largura_original;
    fundo_img.altura3 = fundo_img.altura_original;
    fundo_img.largura3 = fundo_img.largura_original;
}
else if(fundo_img.escolha==3){
    fundo_img.altura3 =fundo_img.altura_original*1.2;
    fundo_img.largura3 =fundo_img.largura_original*1.2;
    fundo_img.altura2  = fundo_img.altura_original;
    fundo_img.largura2 = fundo_img.largura_original;
    fundo_img.altura1 = fundo_img.altura_original;
    fundo_img.largura1 = fundo_img.largura_original;
}
    
fundo_img.imagem2();
if(variavel_global.contando_enter==3){
    cancelAnimationFrame(variavel_global.cancelarjogo2);
    fundo_img.canvas.remove();
    fundofase1.escolha = fundo_img.escolha; 
    variavel_global.contando_enter+=1;
    if(fundofase1.escolha==1){
        atributos_personagem.personagem.src="IMAGENS/personagem/vini2.png";

    }else if(fundofase1.escolha==2){
        atributos_personagem.personagem.src="IMAGENS/personagem/vitoria2.png";
        
    }else if(fundofase1.escolha==3){
        atributos_personagem.personagem.src="IMAGENS/personagem/diego2.png";
        
    }
    atributos_personagem.personagem.style="opacity:1;top:"+fundofase1.canvas.height+"px;left:"+fundofase1.canvas.width+"px;height:250px;width:150px;";
    
    fase1()
    }else{
variavel_global.cancelarjogo2=requestAnimationFrame(animacaojogo2);}
}
function fase1(){
personagem()
fundofase1.iniciar()
requestAnimationFrame(fase1)


}
function personagem(){
// Mapas de imagens por fundo e estado
const imagens = {
    1: { parado: "IMAGENS/personagem/vini2.png", andando: "IMAGENS/personagem/vini3.png" },
    2: { parado: "IMAGENS/personagem/vitoria2.png", andando: "IMAGENS/personagem/vitoria3.png" },
    3: { parado: "IMAGENS/personagem/diego2.png", andando: "IMAGENS/personagem/diego3.png" }
};

// Variável para saber se a tecla está pressionada
let teclaDireitaPressionada = false;

// Detecta tecla pressionada
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        teclaDireitaPressionada = true;
        atributos_personagem.personagem.src = imagens[fundofase1.escolha].andando;
        atributos_personagem.animacao = 1;
    }
});

// Detecta tecla solta
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        teclaDireitaPressionada = false;
        atributos_personagem.personagem.src = imagens[fundofase1.escolha].parado;
        atributos_personagem.animacao = 0;
    }
});

// Se quiser, você pode ainda verificar continuamente em um loop de update
// para outras teclas ou lógica do jogo.



}







jogo();
