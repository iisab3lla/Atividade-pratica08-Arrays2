// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let numeroMaximo = 10000;
let numeroPerfeito = [];

for (let i = 1; i <= numeroMaximo; i++){
    let soma = 0;

    for (let j = 1; j < i; j++){
        if(i % j === 0){
            soma += j;
        }
        
     }
        if (soma === i){
            numeroPerfeito.push(i)
    }
}

document.write(`Numeros perfeitos até o limite de ${numeroMaximo} <br>`);
document.write(`<br> ${numeroPerfeito}`);