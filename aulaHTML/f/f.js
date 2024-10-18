const MIN = 1;
const MAX = 12;

let numeroSecreto = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let tentativas = 0;
let dicas = '';

function verificarNumero() {
    let numero = parseInt(document.getElementById('numeroEntrada').value);
    tentativas++;

    if(numero === numeroSecreto) {
        resultado = `Parabéns, vc acertou em ${tentativas} tentativas!`;
    } else if (numero > numeroSecreto) {
        resultado = `O numrero é menor que ${numero}`;
    } else {
        resultado = `O numero é maior que ${numero}`;
    }
    document.getElementById(`resultado`).textContent = resultado;
}