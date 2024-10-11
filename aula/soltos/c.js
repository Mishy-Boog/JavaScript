let idade = 37;
let bebida = (idade >= 21) ? 'Vinho' : 'Refrigerante';
console.log(bebida);



let comprimenta = pessoa =>{
    let nome = pessoa ? pessoa.nome : 'Estranho'
    return `Olá ${nome}`;
}

console.log(comprimenta({nome: 'Rafael'}));
console.log(comprimenta());