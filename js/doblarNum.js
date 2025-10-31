
function doblar(num){
    let numsMod=[num.length]
    for(let i=0; i<num.length; i++){
        numsMod[i]=num[i]*2
    }
    for(let i=0; i<cantidad; i++){
        console.log("Numero 1 modificado: "+numsMod[i])   
    }
}
let cantidad=parseInt(prompt("Cuantos numeros quiere ingresar"))
let numeros=[cantidad]
for(let i=0; i<cantidad; i++){
    let x=parseInt(prompt("Ingrese numero #"+(i+1)))
    numeros[i]=x
    console.log("Numero #"+(i+1)+": "+x)
}
doblar(numeros)