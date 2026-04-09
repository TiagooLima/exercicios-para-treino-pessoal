
const resultado = document.getElementById('resultado');
const botoes = document.getElementById('botoes');

function adicionar(x){
    resultado.innerHTML += x
}

function resetar(){
    resultado.innerHTML = ""
}

function calcular(){
    resultado.innerHTML = eval(resultado.textContent)
}