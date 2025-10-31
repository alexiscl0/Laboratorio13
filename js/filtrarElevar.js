function filtraryTransformar(arr){
    let suma=0
    let numPositivo=arr.filter(n => n>=0)
    let numElevado=numPositivo.map(n => n**2)
    numElevado.forEach(element => {
        suma+=element
    });
    return suma
}
let numeros=[]
let cantidad=parseInt(prompt("Cuantos numeros quiere ingresar"))
for(let i=0; i<cantidad; i++){
    let x=parseInt(prompt("Ingrese numero #"+(i+1)))
    numeros.push(x)
    console.log("Numero #"+(i+1)+": "+x)
}
console.log("Resultado: "+filtraryTransformar(numeros))