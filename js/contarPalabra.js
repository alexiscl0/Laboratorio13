function contarPalabras(texto){
  const mapa = new Map();
  const palabras = texto.split(" ");

  for(let palabra of palabras){
    const conteo = mapa.get(palabra) || 0;
    mapa.set(palabra, conteo + 1);
  }

  return mapa;
}

console.log(contarPalabras("sol luna sol sol estrella luna"));
