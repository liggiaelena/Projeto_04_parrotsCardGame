let listaGifs = [
    "fiestaparrot",
    "bobrossparrot",
    "explodyparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
];
let paresDosGifs = [];
let quantidade = 0;
let contador = 0;
perguntarQuantidade();

function perguntarQuantidade(){
    let verificar = 1;

    while(quantidade <2 || quantidade >14 || !quantidade || verificar !=0){
    quantidade = Number(prompt("Escolha a quantidade de cartas para jogar (4, 6, 8, 10, 12 ou 14)"));
    verificar = quantidade  % 2; 
    }  
    mostrarCartas(quantidade);
}


function mostrarCartas(quantidade){
    let jogo = document.querySelector(".jogo");
    let quantidadeCartas = "";
     listaGifs.sort(comparador);

    for(let i=0; i<quantidade/2; i++){
        paresDosGifs.push(listaGifs[i]);
    }
    paresDosGifs.sort(comparador);

    for(let j=0; j!= quantidade/2; j++){
        quantidadeCartas += `<div class="cartas " onclick="virarCarta(this)">
        <img src="midia/front.png"/><img src="midia/${listaGifs[j]}.gif" class="gif ${listaGifs[j]}" />
        </div>` +  
        `<div class="cartas " onclick="virarCarta(this)">
        <img src="midia/front.png"/><img src="midia/${paresDosGifs[j]}.gif" class="gif ${paresDosGifs[j]}" />
        </div>`;   
    }

    jogo.innerHTML = quantidadeCartas;
}

function comparador() { 
            return Math.random() - 0.5; 
            } 

function virarCarta(cartaSelecionada){
   let primeiraCartaVirada = document.querySelector(".virei");
   let gifCartaSelecionada = cartaSelecionada.querySelector(".gif");

    cartaSelecionada.classList.add("virei");
    contador++;
     
    if(primeiraCartaVirada !== null){
        let gifPrimeiraCartaVirada = primeiraCartaVirada.querySelector(".gif");
                
            if( gifCartaSelecionada.className === gifPrimeiraCartaVirada.className){
            
                cartaSelecionada.classList.add("permanecer-virada");
                primeiraCartaVirada.classList.add("permanecer-virada");
                cartaSelecionada.classList.remove("virei");
                primeiraCartaVirada.classList.remove("virei");
                
                finalDoJogo();
            }
            else{
                setTimeout(function (){
                    primeiraCartaVirada.classList.remove("virei");
                    cartaSelecionada.classList.remove("virei");
                }, 1000);      
            }
    }
    
}

function finalDoJogo(){
    let cartasGanhas = document.querySelectorAll(".permanecer-virada");
    if (cartasGanhas.length === quantidade){
        setTimeout(alert , 1000, `Voc?? ganhou em ${contador} jogadas!` );
       
    }
}