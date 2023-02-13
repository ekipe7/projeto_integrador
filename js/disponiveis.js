let body = document.querySelector("body");
let header = document.querySelector("header");
let divs = document.querySelectorAll("div");
let imgs = document.querySelectorAll("img");
let div = document.createElement("div");
let fechar1 = document.createElement("div");
fechar1.innerHTML = `
<button id="btn-fechar">Fechar</button>
`
div.id = "div";

let srcs = ["mulher.png", "frutas_mesa.png", "crianca_colhendo2.png", "cachorros_correndo1.png", "muralha1.png", "arquitetura_oriental1.png"];
let textos = ["Mulher contemporanea","Frutas da Primavera", "Colhendo Frutos", "Cachorros no Campo", "Muralha Chinesa", "Arquitetura Oriental"];

function mostrarDiv(div1){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    div.style.backgroundColor = "rgba(186, 174, 177, .85)";
    div.innerHTML = `
    <img src="./img/${srcs[div1]}" height="90%">
    <br>
    <h2 width="auto" style="margin: auto">${textos[div1]}</h2>
    `;
    div.appendChild(fechar1);
}

divs[0].addEventListener("click", function(){
    mostrarDiv(0);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[1].addEventListener("click", function(){
    mostrarDiv(1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[2].addEventListener("click", function(){
    mostrarDiv(2);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[3].addEventListener("click", function(){
    mostrarDiv(3);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[4].addEventListener("click", function(){
    mostrarDiv(4);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[5].addEventListener("click", function(){
    mostrarDiv(5);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})