let frase = 'Usando continue no Javascript';
let contador = 0;
for (let i = 0;i < frase.length; i++) {
    if (frase.charAt(i) != 's') {
        continue;
    }
    contador++;
}
console.log('O numereo de s encontrado na nossa string é:' +contador);