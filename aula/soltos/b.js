function getPreco(verifica){
    return (verifica ? 'R$ 100,00' : 'R$ 200,00');
}

console.log(getPreco(true));
console.log(getPreco(false));
console.log(getPreco(null));