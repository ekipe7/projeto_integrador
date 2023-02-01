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

divs[0].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/mulher.png" width:"80%" height="80%">
    <br>
    <h2>Mulher contemporanea</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[1].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/frutas_mesa.png" width:"80%" height="80%">
    <br>
    <h2>Frutas da Primavera</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[2].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/crianca_colhendo2.png" width:"80%" height="80%">
    <br>
    <h2>Colhendo Frutos</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[3].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/cachorros_correndo1.png" width:"80%" height="80%">
    <br>
    <h2>Cachorros no Campo</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[4].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/muralha1.png" width:"80%" height="80%">
    <br>
    <h2>Muralha Chinesa</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})

divs[5].addEventListener("click", function(){
    body.insertBefore(div, header);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    console.log("Vai");
    div.style.backgroundColor = "grey";
    div.innerHTML = `
    
    <img src="./img/arquitetura_oriental1.png" width:"80%" height="80%">
    <br>
    <h2>Arquitetura Oriental</h2>
    `;
    div.appendChild(fechar1);
})

fechar1.addEventListener("click", function(){
    div.style.display = '';
})