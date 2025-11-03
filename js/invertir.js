function invertirMap(map){
  const nuevo = new Map();
  for(let [clave, valor] of map){
    nuevo.set(valor, clave);
  }
  return nuevo;
}

let capitales = new Map([
  ["Perú", "Lima"],
  ["Chile", "Santiago"]
]);

console.log(invertirMap(capitales));
