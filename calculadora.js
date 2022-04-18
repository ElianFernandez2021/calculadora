let multiplicar = require("./multiplicar.js")//Importo la función "multiplicar" que creé
let dividir = require("./dividir.js")
let sumar = require("./sumar.js")
let restar = require("./restar.js")
let process = require("process")//traigo el modulo nativo de node "process" en cual tiene la función "argv" que me va a servir para capturar datos de la terminal"

let operación = process.argv[2] //traigo lo que esté en la posición 2 de la terminal
let numero1 = Number(process.argv[3])// lo tercero
let numero2 = Number(process.argv[4])//lo cuarto
     console.log(operación)//muestra en consola la operación
     console.log(numero1)
     console.log(numero2)

if (operación === "sumar"){ //si operación es igual a sumar que sume numero1 y numero2
     console.log("_______")
     console.log("SUMA")
     console.log("_______")
     console.log(sumar(numero1, numero2))
}

if(operación === "restar"){
     console.log("-----")
     console.log("RESTA")
     console.log("-----")
     console.log(restar(numero1, numero2))
 }
 
 if(operación === "dividir"){
     console.log("--------")
     console.log("DIVISIÓN")
     console.log("--------")
     console.log(dividir(numero1, numero2))
 }
 
 if (operación === "multiplicar"){
     console.log("-----------")
     console.log("MULTIPLICAR")
     console.log("-----------")
     console.log(multiplicar(numero1, numero2))
 }
 