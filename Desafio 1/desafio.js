var texto = `abacaxi`;

const remDup= e => [...new Set(e)].sort().join("");
console.log(remDup(texto))

