// /* VARIÁVEIS */ 

// // Seleciona o body
// let body = document.querySelector("body");

// Seleciona o botão
let btn = document.querySelector("#botao");

// // Cria e configura uma div
let div = document.getElementById('form-container');
div.innerHTML = `
    <form>
        <p class="forms fechar">
            <div id="close"> Fechar </div>
        </p>
        <p class="forms">
            <label for="nome">Nome:&nbsp;</label>
            <input id="nome" name="nome" placeholder="Digite seu nome">
        </p>
        <p class="ajuda"> Nome inválido! Digite pelo menos 3 letras.</p>
        <p class="forms">
            <label for="sobrenome">Sobrenome: </label>
            <input type="text" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome">
        </p>
        <p class="ajuda"> Sobrenome inválido! Digite pelo menos 3 letras.</p>
        <p class="forms">
            <label for="email">E-mail: </label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail">
        </p>
        <p class="ajuda"> E-mail inválido! Deve conter '@' e '.com'.</p>
        <p class="forms">
            <label for="phone">Telefone: </label>
            <input type="phone" id="phone" name="phone" placeholder="Digite seu telefone com DDD">
        </p>
        <p class="ajuda"> Número inválido! </p>
        <p class="forms">
            <label for="password">Senha: </label>
            <input type="password" id="password" name="password" placeholder="Digite uma senha">
        </p>
        <p class="ajuda"> Senha inválida! Deve conter pelo menos 8 caracteres entre letras e números.</p>
        <p class="forms">
            <label for="confirm">Confirme a senha: </label>
            <input type="password" id="confirm" name="confirm" placeholder="Repita a senha escolhida">
        </p><p class="ajuda"> Senha deve ser igual a anterior.</p>
        <button type="submit" id="enviar" name="enviar">Inscrever-se</button>    
        </form>
`;

let ajuda = document.getElementsByClassName("ajuda");
let nome = document.querySelectorAll("input");
let nomeLabel = document.querySelectorAll("label");

nome[0].addEventListener("focus", function(){
    nomeLabel[0].classList.add("required-popup");
});

nome[0].addEventListener("blur", function(e){
    nomeLabel[0].classList.remove("required-popup");

    if(!/^[a-zA-Z]{3,35}$/i.test(e.target.value)){
        ajuda[0].style.display = "block";
    } else {
        ajuda[0].style.display = "none";
        inputsCorretos.firstname = true;
    }
});

nome[1].addEventListener("focus", function(){
    nomeLabel[1].classList.add("required-popup");
});

nome[1].addEventListener("blur", function(e){
    nomeLabel[1].classList.remove("required-popup");

    if(!/^[a-z]{3,15}(\s+[a-z]{3,15})*$/i.test(e.target.value)){
        ajuda[1].style.display = "block";
    } else {
        ajuda[1].style.display = "none";
        inputsCorretos.lastname = true;
    }
});

nome[2].addEventListener("focus", function(){
    nomeLabel[2].classList.add("required-popup");
});

nome[2].addEventListener("blur", function(e){
    nomeLabel[2].classList.remove("required-popup");

    if(!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e.target.value)){
        ajuda[2].style.display = "block";
    } else {
        ajuda[2].style.display = "none";
        inputsCorretos.email = true;
    }
});

nome[3].addEventListener("focus", function(){
    nomeLabel[3].classList.add("required-popup");
});

nome[3].addEventListener("blur", function(e){
    nomeLabel[3].classList.remove("required-popup");

    if(!/^[0-9.]{10,11}$/i.test(e.target.value)){
        ajuda[3].style.display = "block";
    } else {
        ajuda[3].style.display = "none";
        inputsCorretos.telefone = true;
    }
});

nome[4].addEventListener("focus", function(){
    nomeLabel[4].classList.add("required-popup");
});

let senha = "";
nome[4].addEventListener("blur", function(e){
    nomeLabel[4].classList.remove("required-popup");

    senha = e.target.value;
    console.log(senha);
    if(!/^[a-z0-9.]{8,16}$/i.test(senha)){
        ajuda[4].style.display = "block";
    } else {
        ajuda[4].style.display = "none";
        inputsCorretos.senha = true;
    }
});

nome[5].addEventListener("focus", function(){
    nomeLabel[5].classList.add("required-popup");
});

nome[5].addEventListener("blur", function(e){
    nomeLabel[5].classList.remove("required-popup");

    if(senha != e.target.value){
        ajuda[5].style.display = "block";
    } else {
        ajuda[5].style.display = "none";
        inputsCorretos.confirmasenha = true;
    }
});
      
let close = document.getElementById('close');

let send = document.querySelector('button');

let inputsCorretos = {
    firstname: false,
    lastname: false,
    email: false,
    telefone: false,
    senha: false,
    confirmasenha: false
}

// /* EVENTOS */

// Mostra menu quando clicar
btn.addEventListener("click", function(){
    div.style.display = "flex";
});

close.addEventListener("click", function(){
    div.style.display = '';
});

send.addEventListener("click", function(e){
    if(inputsCorretos.firstname == false ||
        inputsCorretos.lastname == false ||
        inputsCorretos.email == false ||
        inputsCorretos.telefone == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmasenha == false )
    {
        e.preventDefault();
        alert("É necessário preencher todos os campos corretamente");
    }
})