import * as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese un numero: ");  
let numero2 : number = rls.questionInt("Ingrese un numero para determinar si es multiplo del anterior: ");
let resultadoMultiplo : boolean=false;

function esMultiplo(numero: number, divisor: number): boolean {
    return numero % divisor === 0;
};

resultadoMultiplo = esMultiplo (numero, numero2);

console.log("La operacion arrojo que el resultado es: ", resultadoMultiplo);