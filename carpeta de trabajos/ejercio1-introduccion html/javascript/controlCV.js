console.log("funciona controlCV.js");
arrayMisEstudios =[
    "javascript en cfp",
    "python en cfp",
    "angular en cfp",
];
// arrayObjetosMisEstudios=[
//     {estudio: "javascript en",url: "https://cfl408moron.com.ar/", nombreLink:"cfl 408"},
//     {estudio: "python en",url: "https://cfl408moron.com.ar/", nombreLink:"cfl 408"},
// ]
//la clase funciona como una matriz con la cual construimos un objeto
class ItemLista {
    constructor(estudioParametro, urlParametro, nombreLinkParametro){
        this.estudio=estudioParametro;
        this.url=urlParametro;
        this.nombreLink=nombreLinkParametro;
    }
    //metodos
    elementoNuevo(){
        let elementoNuevo = "<li>"+ this.estudio +" <a href='"
        + this.url +"'>"+this.nombreLink+"</a> </li>";
        return elementoNuevo;
    }
}
let itemLista= new ItemLista(arrayMisEstudios[0],
    "https://cfl408moron.com.ar/","cfl 408");
let itemLista1= new ItemLista(arrayMisEstudios[1],
    "https://cfl408moron.com.ar/","cfl 408");
console.log(itemLista);

arrayObjetosMisEstudios=[]
arrayObjetosMisEstudios.push(itemLista);
arrayObjetosMisEstudios.push(itemLista1);
console.log(arrayObjetosMisEstudios);
let estudiosLista = document.getElementById("estudios");
for(let valor of arrayObjetosMisEstudios){
    //primera iteracion
    //me agarra el primer objeto
    //entonces valor va a ser igual al primer objeto
    elementoNuevo=valor.elementoNuevo();
    estudiosLista.insertAdjacentHTML("afterbegin",elementoNuevo);
}

// txt = document.getElementById("estudios");
// console.log(txt.innerHTML);
// la palabra reservada this. me va a servir para instanciar 
//cualquier metodo y atributo dentro de un mismo objeto