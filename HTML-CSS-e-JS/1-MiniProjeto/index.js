// Codigo para que quando confirmado o formulario ele nao reinicie a pagina
const meuFormulario = document.getElementById('card_form');
meuFormulario.addEventListener('submit', function(event) {
event.preventDefault();
});

// coleta alcool, gasolina e implementa eles na div #resultado
const alcool = document.querySelector('#alcool')
const gasolina = document.querySelector('#gasolina')
const divResultado = document.querySelector('#resultado')
function calcularPreco(nm1,nm2) {
    if (nm1 > nm2){
        divResultado.innerHTML = `A gasolina e mais barata que o alcool`
    }else if(nm2 > nm1) {
        divResultado.innerHTML = `O alcool e mais barato que a gasolina`
    }else {
        divResultado.innerHTML = 'Ambos tem valores iguais.'
    }
}