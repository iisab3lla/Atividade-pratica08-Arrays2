// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [];

for(let i = 0; i < 5; i++){
    let nomesDesejados = (prompt("Digite 5 nomes que deseja!"));
    nomes.push(nomesDesejados);
}

document.write(`Lista de nomes: <br> <br>`);

for(let i = 0; i < nomes.length; i++){
    document.write(`${nomes[i]} <br>`);
}

document.write(`<br> <br> Nomes na ordem inversa! <br> <br>`);

for(let i = nomes.length - 1; i >= 0; i--) {
    document.write(`${nomes[i]} <br>`)
}