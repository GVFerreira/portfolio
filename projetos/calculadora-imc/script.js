/* Pseudo-Código

input nome
input peso
input altura

fazer com que a entrada da variável peso seja um número fracionado

transformar a altura em centímetros
altura = altura / 100

fazer o calculo da massa corporal
massa = peso / altura²

*/

function calcularMassa(nome, peso, altura, massa) {

    var nome, peso, altura;

    nome = document.getElementById('nome').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    peso = parseFloat(peso);


    altura = altura/100;

    var massa = 0;

    massa = peso / (altura*altura);

    document.getElementById('massa').value = "Sua massa corporal é: " + massa.toFixed(2);

}