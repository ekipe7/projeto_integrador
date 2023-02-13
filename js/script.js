/* Capturando elementos */

let menu = document.querySelector(".menu");
let ul = document.querySelector(".menu ul");
let itens = document.getElementsByTagName('a');

/* Criando botão de fechar */
let fechar = document.createElement("div");
fechar.innerText = " ";

/* Estilizando botão fechar */
fechar.style.position = "relative";
fechar.style.width = "16%";
fechar.style.height = "10%";
fechar.style.top = "8%";
fechar.style.right = "-10px";
fechar.style.cursor = "pointer";
fechar.style.borderRadius = "10px";
fechar.style.backgroundImage = "url(img/fechar.png)";
fechar.style.backgroundSize = "100% 100%";

/* Eventos */

// Mostra menu
menu.addEventListener("click", function(){
    // Adiciona botão de fechar à ul
    ul.insertBefore(fechar, itens[1]);

    // Mostra o menu
    ul.style.animationName = "abrir";
    ul.style.animationDuration = "1s";
    ul.style.display = "block";
});

// Esconde menu
fechar.addEventListener("click", function(e){
    ul.style.animationName = "fechar";
    ul.style.animationDuration = "2s";
    setTimeout(function(){
        // Tira o menu
        ul.style.display = "";
    }, 1200)

    // Impede que o evento menu seja encadeado
    e.stopImmediatePropagation();
});
