// let resultadoSuma = sumar(1,2);
// let resultadoResta = restar(3,2);

// mostrarConsola(resultadoSuma);
// mostrarConsola(resultadoResta);

// function sumar(num1,num2){
//     return num1 + num2;
// }
// function restar(num1,num2){
//     let resultado =num1-num2;
//     return resultado;
// }
// function mostrarConsola(valor) {
//     console.log(valor);
// }
// var cajaAlcoholVacio=[];
// console.log(cajaAlcoholVacio);
// var cajaAlcoholObjeto =new Array("gel","spray","chischis");
// console.log(cajaAlcoholObjeto);
var cajaAlcohol=[];
cajaAlcohol[0]="gel";
cajaAlcohol[1]="spray";
cajaAlcohol[2]="chischis";
console.log(cajaAlcohol);

// var nuevaCajaAlcohol = cajaAlcohol.map(function (x) {
//     return "el alcohol en "+x;    
// })
// console.log(nuevaCajaAlcohol);


// var cajaAlcoholEstaIncluido = cajaAlcohol.includes("gel");
// console.log(cajaAlcoholEstaIncluido);
// cajaAlcoholEstaIncluido = cajaAlcohol.includes("gatillo");
// console.log(cajaAlcoholEstaIncluido);

//cuantos años cumplis o cumpliste en el 2022
var edadesCurso = [28,19,42,32,38,36,21,28];
// var edadesCursoEncontrado = edadesCurso.indexOf(15);
// console.log(edadesCursoEncontrado);
// edadesCursoEncontrado = edadesCurso.indexOf(28);
// console.log(edadesCursoEncontrado);

// var anoNacimiento = edadesCurso.map(function (edad) {
//     // const anoActual = 2022;
//     const hoy = new Date();
//     const anoActual = hoy.getFullYear();

//     return anoActual-edad;    
// }
// )
// console.log(anoNacimiento);

// console.log(cajaAlcohol[1]);
// console.log(cajaAlcohol[0]);
// console.log(cajaAlcohol[cajaAlcohol.length -1]);
// console.log(cajaAlcohol.length);
// var eliminado = cajaAlcohol.pop();
//console.log(cajaAlcohol.shift());
// console.log(cajaAlcohol);//gel,spray
// console.log(eliminado);//chischis
// var cajaAlcoholCadena = cajaAlcohol.join("-")
// console.log(cajaAlcoholCadena);
// const object = { nombreProducto: "cremita", precio: 120, cantidad: 100 };

// for (const property in object) {
//   console.log(`${object[property]}`);
// }

let iterable = [10, 20, 30];

for (let value of iterable) {
   value = "algo " + value;
  console.log(value);
}
