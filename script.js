let listaGifs = [
    "fiestaparrot.gif",
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
    "fiestaparrot.gif",
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
]
let quantidade = 0;
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
       
    for(let i=0; i!= quantidade; i++){
        quantidadeCartas += `<div class="cartas"><img src="midia/front.png"/><img src="midia/${listaGifs[i]}" class="gif"/></div>`;
    }
    jogo.innerHTML = quantidadeCartas;
}

function comparador() { 
	return Math.random() - 0.5; 
}