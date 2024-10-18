var ano = 2023;
var mes = 2;
var contaDias;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        contaDias = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        contaDias = 30;
        break;
    
    case 2:
        if(((ano % 4 == 0) && !(ano % 100 ==0)) || (ano % 400 == 0)) {
            contaDias = 29;
        } else {
            contaDias = 28;
        }
        break;
    default:
        contaDias = 'Mês inválido';
        break;
}
console.log(contaDias);