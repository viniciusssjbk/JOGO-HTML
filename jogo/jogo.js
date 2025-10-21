/*---CLASSES--*/

var variavel_global={
    contando_enter: 0,
    cancelarmenu: null,
    cancelarjogo: null,
    cancelarjogo2: null,
    teclado:null,
    timer: null,
    ativarteclado: function(){
        document.addEventListener("keydown",function(evento){
        variavel_global.teclado = evento.key;
            
        clearTimeout(this.timer);

   
    this.timer = setTimeout(function() {
        variavel_global.teclado=null;
    }, 100);

        if(variavel_global.teclado== "Enter"){
            console.log(variavel_global.contando_enter)
            variavel_global.contando_enter +=1
        } 
        if(variavel_global.contando_enter==1){
        letras.canvas.remove();}

        /*SELECAO DOS PERSONAGENS */
        if(variavel_global.contando_enter==2){

            if(variavel_global.teclado == "ArrowLeft") {if(fundo_img.escolha==1){fundo_img.escolha = 3}else if(fundo_img.escolha==3){fundo_img.escolha = 2}else if(fundo_img.escolha == 2){fundo_img.escolha=1} }
            else if(variavel_global.teclado == "ArrowRight"){if(fundo_img.escolha==3){fundo_img.escolha = 1}else if(fundo_img.escolha==1){fundo_img.escolha = 2}else if(fundo_img.escolha == 2){fundo_img.escolha=3} } 


        }
    
    })
    }
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
    cor: "darkblue",   
    img: new Image(),
    img2 : new Image(),
    vini: new Image(),
    vitoria: new Image(),
    diego: new Image(),
    /*FUNDO DO MENU */
    imagem: function() {
            this.img.src = "IMAGENS/menu.png";
            this.img2.src = "IMAGENS/logo.png";
            this.ctx.drawImage(this.img, this.x, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = this.cor;
            this.ctx.fillRect(this.canvas.width*0.2, this.canvas.width*0.04, this.canvas.width*0.6, this.canvas.height*0.45);
            this.ctx.drawImage(this.img2, this.canvas.width*0.2, 0, this.canvas.width*0.6, this.canvas.height*0.6);
    },


    largura_original:document.getElementById("jogo").width*0.2,
    altura_original: document.getElementById("jogo").height*0.25,

    largura1: document.getElementById("jogo").width*0.2,
    altura1: document.getElementById("jogo").height*0.25,

    largura2: document.getElementById("jogo").width*0.2,
    altura2: document.getElementById("jogo").height*0.25,

    largura3: document.getElementById("jogo").width*0.2,
    altura3: document.getElementById("jogo").height*0.25,

    escolha: 1,
    /*PERSONAGENS NA TELA DE MENU */
    imagem2: function() {
            this.ctx.beginPath();
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            this.img.src = "IMAGENS/menu2.png";
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
            this.ctx.strokeStyle = "black"; 
            this.ctx.lineWidth = 2;        
            this.ctx.font = "20px monospace";
            this.ctx.textAlign = letras.posicao;
            this.ctx.strokeText("ESCOLHA SEU HEROI", letras.x, letras.y);
            this.ctx.fillText("ESCOLHA SEU HEROI", letras.x, letras.y);
            this.ctx.closePath()
            
    }
};
var fundofase1 ={
escolha: null,
canvas: document.getElementById("fase1"),
fundo: new Image(),
x:document.getElementById("fase1").width*-1,
y:document.getElementById("fase1").height*-1.5,
x_origin:document.getElementById("fase1").width*-1,
y_origin:document.getElementById("fase1").height*-1.5,
x_inimigo: (document.getElementById("fase1").width*0)+500,
y_inimigo: (document.getElementById("fase1").height*-1.0)+150,
iniciar: function(){
this.fundo.src="IMAGENS/fase1.png";
var ctx = this.canvas.getContext("2d");
ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
ctx.beginPath()
ctx.drawImage(this.fundo,this.x,this.y,this.canvas.width*4.5,this.canvas.height*4.5)
ctx.closePath()}
};
var atributos_personagem ={
    personagem: document.getElementById("personagem"),
    animacao: 0,
    largura: 35,
    altura: 10,
    largura_originalp:35,
    altura_originalp:10,
    imagens: [["IMAGENS/personagem/vini2.png","IMAGENS/personagem/vini3.png","IMAGENS/personagem/vini4.png","IMAGENS/personagem/vini5.png","IMAGENS/personagem/vini6.png"],["IMAGENS/personagem/vitoria2.png","IMAGENS/personagem/vitoria3.png","IMAGENS/personagem/vitoria4.png","IMAGENS/personagem/vitoria5.png","IMAGENS/personagem/vitoria6.png"], ["IMAGENS/personagem/diego2.png","IMAGENS/personagem/diego3.png","IMAGENS/personagem/diego4.png","IMAGENS/personagem/diego5.png","IMAGENS/personagem/diego6.png"]],
    gerar: function(){
        this.animacao = 0;
        if(variavel_global.teclado=="ArrowRight"){
            this.animacao=1;
            if(fundofase1.x*-1>=fundofase1.canvas.width+700){
                fundofase1.x =(fundofase1.canvas.width+700)*-1;
                
            }
            fundofase1.x -= 5
            
            
        }
        else if(variavel_global.teclado=="ArrowLeft"){
            this.animacao=2;
            if(fundofase1.x>=fundofase1.x_origin+50){
                fundofase1.x = fundofase1.x_origin+50;
                
            }
            fundofase1.x += 5
          
            
        }
        else if(variavel_global.teclado=="ArrowUp"){
            this.animacao=3;
            if(fundofase1.y>=fundofase1.y_origin+30){
                fundofase1.y = fundofase1.y_origin+30;

            }
            if(this.altura <= this.altura_originalp){

            }else{
                this.altura -=0.1
                this.largura -=0.1
            }
            fundofase1.y += 5
            
            
        }else if(variavel_global.teclado=="ArrowDown"){
            this.animacao=4;
            if(fundofase1.y<=fundofase1.y_origin-250){
                fundofase1.y = fundofase1.y_origin-250;
                

                
            }
            fundofase1.y -= 5
    
            if(this.altura >= this.altura_originalp +5){

            }else{
                this.altura +=0.1
                this.largura +=0.1
            }
        }
        

        this.personagem.src= this.imagens[fundofase1.escolha-1][this.animacao];
        this.personagem.style="opacity:1;top:"+fundofase1.canvas.height*1.2+"px;left:"+fundofase1.canvas.width+"px;height:"+this.largura+"%;width:"+this.altura+"%;";
    }

}


/*---FIM DAS CLASSES--*/
/*FUNÇAO PRINCIPAL */
function jogo(){


   

    /*ATIVA O TECLADO */
    variavel_global.ativarteclado();
     /*ANIMAÇÂO DE ENTRADA 'TELA PRETA'*/
    animacaomenu()
    /*Chama a função para abrir a tela de menu*/
     animacaojogo()
    /*MOVIMENTAÇÃO DO INICIO DA FASE */
    

}
/* ABERTURA DO JOGO*/

/*FUNÇAO QUE ANIMA O QUADRADO DO MENU */
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
    /*ENTRA DENTRO DO IF CASO O QUADRADO FIQUE NO TAMANHO OU MAIOR DO TAMANHO DO QUADRADO DO CANVAS*/
    if(quadrado_preto.altura >= quadrado_preto.canvas.width){
        /*CANCELA A PRIMEIRA ANIMACAO DO MENU PARA COMEÇAR A OUTRA */
        cancelAnimationFrame(variavel_global.cancelarmenu);
        animacao2menu()
        
    }else{
        /*AQUI DA UM VALOR PARA A VARIAVEL PARA DEPOIS EU CANCELAR ESSA ANIMAÇAO ESPECIFICA*/
    variavel_global.cancelarmenu =requestAnimationFrame(animacaomenu);
 }
}
/*CONTINUAÇAO DA ANIMACAO DO MENU */
function animacao2menu(){
    letras.ctx = letras.canvas.getContext("2d");
    letras.canvas.style.backgroundColor="black";
    letras.ctx.clearRect(0,0,letras.canvas.width,letras.canvas.height);
    letras.x = letras.canvas.width * 0.5
    letras.y = letras.canvas.height * 0.2   
    letras.aparecer("Seja bem vindo");   
   
    /*FAZ QUE A LETRA FIQUE FLUTUANTE */
    if(letras.y2==0){
        letras.x2 = letras.canvas.width * 0.5
        letras.y2 = letras.canvas.height * 0.5
    }
    /*CASO A LETRA TENHA CHEGADO AO VALOR DE 10 NO CONTADOR ELA ENTRA NO IF */
    else if (letras.contar==10){
            /*DENTRO DO IF VAI TER UM OUTRO CONTADOR QUE VAI SOMAR 10 TAMBEM SO QUE O y VAI PARA POSIÇAO NEGATIVA E DEPOIS QUE CONTAR ATE 10 O PRIMEIRO CONTADOR REZETA E VOLTA TUDO DENOVO */
            if(letras.contar2==10){
                letras.contar=0
                letras.contar2=0}
            else
                {
                letras.contar2+=1
                letras.y2 +=0.5
            }
     
    }else{

            letras.contar+=1
            letras.y2 -=0.5
              
    }
    letras.aparecer2("Precione Enter para entrar");
    requestAnimationFrame(animacao2menu)

    
}
/*ANIMAÇÂO QUE FAZ O MOVIMENTO DE FUNDO DO MENU*/
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
    cancelAnimationFrame(variavel_global.cancelarjogo);
    animacaojogo2()

} else{
    variavel_global.cancelarjogo=requestAnimationFrame(animacaojogo);}
}
/*FUNÇÂO DA ANIMAÇÂO DA TELA DE MENU */
function animacaojogo2(){

fundo_img.imagem2()

  /*SELEÇÂO DOS PERSONAGENS */

/*AQUI FAZ OS PERSONAGEM CRESCER CASO SEJA SELECIONADO */
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
if(variavel_global.contando_enter==3){

    cancelAnimationFrame(variavel_global.cancelarjogo2);
    fundo_img.canvas.remove();
    /*AQUI SALVA A ESCOLHA DO USUARIO */
    fundofase1.escolha = fundo_img.escolha;
    /*AQUI OBRIGA A NUNCA MAIS ENTRAR NESSA IF */ 
    variavel_global.contando_enter+=1;
    
    fase1()
    
}else{
    variavel_global.cancelarjogo2=requestAnimationFrame(animacaojogo2)
}    
}

/*GERANDO A FASE 1 */
function fase1(){

if(variavel_global.contando_enter>=3){
    /*AQUI VAI VERIFICAR A ESCOLHA E IRA ESCOLHER A IMAGEM */

    atributos_personagem.gerar()

    }



fundofase1.iniciar()
requestAnimationFrame(fase1)
}


