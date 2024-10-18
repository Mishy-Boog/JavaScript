let interacao = 0;
top: for (let i = 0; i < 6; i++){
    console.log(interacao);
    for (let j = 0; j < 6; j++){
        console.log(interacao);
        interacao++;
        console.log(interacao);
        if (i == 2 && j == 2){
            break top;
        }
    }
}
console.log(interacao);