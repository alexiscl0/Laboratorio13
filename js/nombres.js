let nombres=new Set()
let cantidad=parseInt(prompt("Cantidad de nombres a ingresar"))
for(let i=0; i< cantidad; i++){
    let x=prompt("Ingrese nonbre #"+(i+1))
    nombres.add(x)
    console.log(x)
}
console.log(nombres)
