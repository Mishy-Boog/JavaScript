let funcao = [];
for(let i = 0; i<3; i++) {
    funcao[i] = function () {
        console.log(i);  
    };
}
for(var j = 0; j<3; j++) {
    funcao[j]();
}
