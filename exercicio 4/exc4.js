// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let usuarioNumero = Number (prompt("Insira um número que deseja!"));

let estaNaLista = false

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === usuarioNumero){
        estaNaLista = true
        break;
    }
}

if(estaNaLista === true){
    alert(`O número inserido está na lista!`)
} else {
    alert(`O número inserido não esta na lista!`)
}