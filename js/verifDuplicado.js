function verificarDuplicados(arr){
    let verificar=new Set()
    for(let j=0; j < arr.length; j++){
        verificar.add(arr[j])
    }
    if(verificar.size==arr.length)
        return false
    else
        return true
}
let nombres=[]
let cantidad=parseInt(prompt("Cantidad de nombres a ingresar"))
for(let i=0; i< cantidad; i++){
    let x=prompt("Ingrese nonbre #"+(i+1))
    nombres[i]=x
    console.log(x)
}
console.log("Tiene elementos duplicados: "+verificarDuplicados(nombres))