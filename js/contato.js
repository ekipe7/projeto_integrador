let inputs = document.querySelectorAll("input");
let msg = document.querySelector("#mensagem");
let labels = document.querySelectorAll("label");
let ajudas = document.querySelectorAll(".ajuda");
console.log(inputs);
console.log(labels);
console.log(ajudas);


inputs[0].addEventListener("focus", function(){
    labels[0].classList.add("required-popup");
});

inputs[0].addEventListener("blur", function(e){
    labels[0].classList.remove("required-popup");

    if(!/^[a-zA-Z0-9]{3,35}$/i.test(e.target.value)){
        ajudas[0].style.display = "block";
    } else {
        ajudas[0].style.display = "none";
        inputsCorretos.name = true;
    }
});

inputs[1].addEventListener("focus", function(){
    labels[1].classList.add("required-popup");
});

inputs[1].addEventListener("blur", function(e){
    labels[1].classList.remove("required-popup");

    if(!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e.target.value)){
        ajudas[1].style.display = "block";
    } else {
        ajudas[1].style.display = "none";
        inputsCorretos.email = true;
    }
});

inputs[2].addEventListener("focus", function(){
    labels[2].classList.add("required-popup");
});

inputs[2].addEventListener("blur", function(e){
    labels[2].classList.remove("required-popup");

    if(!/^[0-9.]{10,11}$/i.test(e.target.value)){
        ajudas[2].style.display = "block";
    } else {
        ajudas[2].style.display = "none";
        inputsCorretos.telefone = true;
    }
});

msg.addEventListener("focus", function(){
    labels[3].classList.add("required-popup");
});

msg.addEventListener("blur", function(e){
    labels[3].classList.remove("required-popup");

    if(!/[^\s]$/i.test(e.target.value)){
        ajudas[3].style.display = "block";
    } else {
        ajudas[3].style.display = "none";
        inputsCorretos.msg = true;
    }
});

let inputsCorretos = {
    name: false,
    email: false,
    telefone: false,
    msg: false
}

let send = document.querySelector('input[type="submit"]');

send.addEventListener("click", function(e){
    if(inputsCorretos.name == false ||
        inputsCorretos.email == false ||
        inputsCorretos.telefone == false ||
        inputsCorretos.msg == false )
    {
        e.preventDefault();
        alert("É necessário preencher todos os campos corretamente");
    }
})