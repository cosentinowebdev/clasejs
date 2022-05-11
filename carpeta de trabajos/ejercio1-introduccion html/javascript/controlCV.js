miFecha= new Date()
// console.log (miFecha.getFullYear())
let spanFecha = document.getElementById("spanCard1");
spanFecha.insertAdjacentHTML("afterbegin",miFecha.getFullYear());

arrayMisEstudios =[
    "javascript en ",
    "python en ",
    "angular en ",
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
        let elementoNuevo;
        //en caso de que no le pasemos un link el 
        //metodo me devolvera otro elemento el cual 
        //se incertara en el html
        if(this.url!=="" || this.url !==undefined ){
            elementoNuevo = "<li>"+ this.estudio +" <a class='link-success' href='"
        + this.url +"'>"+this.nombreLink+"</a> </li>";
        }else{
            elementoNuevo = "<li>"+ this.estudio +"</li>";
        }
        return elementoNuevo;
    }
}
let itemLista= new ItemLista(arrayMisEstudios[0],
    "https://cfl408moron.com.ar/","cfl 408");
let itemLista1= new ItemLista(arrayMisEstudios[1],
    "https://cfl408moron.com.ar/","cfl 408");
let itemLista2= new ItemLista(arrayMisEstudios[2],
        "","");
        //en caso de que no le pasemos un link el 
        //metodo me devolvera otro elemento el cual 
        //se incertara en el html
console.log(itemLista);

arrayObjetosMisEstudios=[]
//inserto en el array el objeto
arrayObjetosMisEstudios.push(itemLista);
arrayObjetosMisEstudios.push(itemLista1);
arrayObjetosMisEstudios.push(itemLista2);
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