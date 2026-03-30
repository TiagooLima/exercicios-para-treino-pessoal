const form = document.querySelector('#formulario')
function naoReiniciar(){
    form.addEventListener('submit', function(event){
        event.preventDefault();
    })
}
naoReiniciar()


let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
const divResultado = document.getElementById('resultado');


function calcularImc(){
    let nivel;
    //let imcUsuario;
    
    let imcUsuario = ((peso.value)/(altura.value*altura.value)).toFixed(2);
    
    if (imcUsuario<18.5){
        nivel = 'abaixo do peso'
    }else if(imcUsuario<25){
        nivel = 'peso normal'
    }else if(imcUsuario<30){
        nivel = 'sobrepeso'
    }else if(imcUsuario<35){
        nivel = 'obesidade grau 1'
    }else if(imcUsuario<40){
        nivel = 'obesidade grau 2'
    }else if(imcUsuario>=40){
        nivel = 'obesidade grau 3'
    }

    if (peso.value==='' || altura.value===''){
        divResultado.innerHTML = `Você não preencheu os campos corretamente, tente novamente`
    }else if(imcUsuario.includes('NaN')){
        divResultado.innerHTML = 'Utilize apenas números nos campos determinados'
    }else{
        divResultado.innerHTML = `O IMC é de ${imcUsuario}, você está no nível ${nivel}`
    }
}
    

