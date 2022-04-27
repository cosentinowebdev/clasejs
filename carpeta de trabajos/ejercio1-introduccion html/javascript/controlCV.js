console.log("funciona controlCV.js");
arrayMisEstudios =[
    "javascript en sfp",
    "python en sfp",
    "angular en sfp",
];
let estudiosLista = document.getElementById("estudios");
console.log(estudiosLista);
for(let valor of arrayMisEstudios){
    estudiosLista.insertAdjacentHTML("afterbegin",'<li>'+ valor.trabajo +" <"+ valor.link +'</li>');
}

// txt = document.getElementById("estudios");
// console.log(txt.innerHTML);
// la palabra reservada this. me va a servir para instanciar 
//cualquier metodo y atributo dentro de un mismo objeto