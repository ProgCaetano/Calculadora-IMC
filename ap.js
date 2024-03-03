

function calcular(){
    //DECLARAR AS VARIÁVEIS
    var nome = document.getElementById('inome').value;
    var altura = document.querySelector('#ialtura').value;
    var peso = document.getElementById('ipeso').value;

    //Cálculo IMC
    var calculo = peso/(altura**2);

    //MOSTRAR NA TELA
    document.getElementById('itexto').innerHTML = `Oi ${nome}! A sua altura é ${altura} e seu peso é ${peso}, logo seu IMC é de: ${calculo}`;

   
}


