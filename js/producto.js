const productos = new Map([
  ["pan", 2.5],
  ["leche", 4.0],
  ["huevos", 8.5],
  ["arroz", 3.2]
]);

function calcularTotal(lista){
  let total = 0;
  for(let item of lista){
    if(productos.has(item)){
      total += productos.get(item);
    }
  }
  return total;
}

const compra = ["pan", "leche", "huevos"];
console.log("Total:", calcularTotal(compra));
