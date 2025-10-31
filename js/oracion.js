function reordenarPalabras(oracion) {
  let palabras = oracion.split(" ");
  let mayus = palabras.map(p => p.toUpperCase());
  mayus.sort();
  return mayus;
}

let oracion=prompt("Escriba una oracion")
console.log(reordenarPalabras(oracion));
