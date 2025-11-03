function contarLetras(texto){
  const resultado = {};
  const letras = texto.toLowerCase();

  for(let letra of letras){
    if(letra !== " "){
      resultado[letra] = (resultado[letra] || 0) + 1;
    }
  }

  return resultado;
}

console.log(contarLetras("banana"));
