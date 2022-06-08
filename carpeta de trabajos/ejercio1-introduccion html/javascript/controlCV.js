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
    constructor(estudioParametro, urlParametro, nombreLinkParametro,actualizacion=null){
        this.estudio=estudioParametro;
        this.url=urlParametro;
        this.nombreLink=nombreLinkParametro;
        this.actualizacion=actualizacion;
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
        
    }
    elementoNuevoRepo(){
        // elementoNuevo = "<li>"+ this.estudio +" <a class='link-success' href='"
        // + this.url +"'>"+this.nombreLink+"</a> </li>";
        // elementoNuevo = "<div class='col d-flex align-items-start'> <div> <a href='"+
        // this.url+"' > <h4 class='fw-bold mb-0'>"+
        // this.estudio+"</h4></a></div><div><p>ultima actuaizacion: "+
        // this.actualizacion+"</p></div></div>";

        elementoNuevo ="<div class='card' style='width: 18rem;'>"+
            "<div class='card-body'>"+
                "<h5 class='card-title'>"+this.estudio+"</h5>"+
                "<p class='card-text'>"+this.actualizacion+"</p>"+
                "<a href='"+this.url+"' class='btn btn-primary'>Link al repo</a>"+
            "</div>"+
        "</div>";

        
    //     <div class="col d-flex align-items-start">
    //     <div>
    //       <h4 class="fw-bold mb-0">Instagram:</h4>
    //       <p>
    //           <a href="http://taringa.com" class="btn btn-danger"><i class="fa-brands fa-instagram icono"></i></a>
    //       </p>
    //     </div>
    //   </div>
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

//Capturar los valores de una api con javascript
//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-es
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
var repos;
fetch('https://api.github.com/users/cosentinowebdev/repos')
      .then(response => response.json())
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      .then(json => {

          repos = json; 
          //TO DO: ponerle la descripcion del proyecto repo.description
          for (const repo of repos) {
              let itemRepo= new ItemLista(repo.name,
                repo.svn_url,null,repo.updated_at);
              console.log(repo);
              let elementoNuevo = itemRepo.elementoNuevoRepo(); 
              let reposLista = document.getElementById("repos");
              reposLista.insertAdjacentHTML("afterbegin",elementoNuevo);
          }
        //   console.log(repos);
        
        });


