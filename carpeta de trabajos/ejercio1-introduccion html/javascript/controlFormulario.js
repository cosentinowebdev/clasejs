// console.log("controlFormulario.js funciona");
const valores = location.search;

//Mostramos los valores en consola:
console.log(valores);

var campoNombre=false;
// var campoTelefono=false;
// var campoCorreo=false;
var campoCampo=false;

//Resultado:
//nombre=algo&telefono=algo&correo=algo%40algo&campo=algo

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var nombre = urlParams.get('nombre');
var telefono = urlParams.get('telefono');
var correo = urlParams.get('correo');
var campo = urlParams.get('campo');
var campo = urlParams.get('cuit');
console.log(nombre);
console.log(telefono);
console.log(correo);
console.log(campo);
console.log(cuit);
if (nombre != null && telefono != null && correo != null && campo != null && cuit == null) {
    alert("los campos han sido completados correctamente se ejecutara el codigo");
}
else {
    alert("los campos no han sido completados correctamente");
}

function validateFormContacto() {
    let nombre = document.getElementById("nombre"); 
    console.log(nombre);
    console.log(nombre.value.length);
    if (nombre.value.length > 2) {
        //el tamaño de nombre es correcto
        campoNombre=true;
        document.getElementById("nombre").classList.remove("error");
        validarFormulario();
    }else{
        //el tamaño de nombre es falso
        campoNombre=false;
        document.getElementById("nombre").classList.add("error");
        validarFormulario();
    }
  }
  function validateFormContactoCampo() {
    let nombre = document.getElementById("campo"); 
    if (nombre.value.length > 2) {
        //el tamaño de nombre es correcto
        campoCampo=true;
        document.getElementById("campo").classList.remove("error");
        validarFormulario();
    }else{
        //el tamaño de nombre es falso
        campoCampo=false;
        document.getElementById("campo").classList.add("error");
        validarFormulario();
    }
  }
function validarFormulario() {
    if(campoNombre && campoCampo){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
    }
}
// function validarFormulario(){
//     if(campoNombre){
//         document.getElementById("botonSubmit").removeAttribute("disabled");
//         //buscamos en el dom el boton del formulario y lo habilitamos
//     } else{
//         document.getElementById("botonSubmit").setAttribute("disabled","disabled");

//         //buscamos en el dom el boton del formulario y lo habilitamos
//     }
// }