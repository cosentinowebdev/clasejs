class ControlFormulario{
    campoNombre=false;
    campoCampo=false;
    constructor(nombre,telefono,correo,campo,cuit){
    //aca se deberia guardar los parametros en los atributos del objeto
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.campo = campo;
        this.cuit = cuit;
    }
    validateFormContacto(variableElementoID){//nombre//cuit
        let nombre = document.getElementById(variableElementoID); 

        if (nombre.value.length > 2) {
            //el tamaño de nombre es correcto
            //this.campoNombre=true;
            //aca deberiamos aplicar una logica que permita seleccionar
            //una variable de control como campoNombre 
            document.getElementById(variableElementoID).classList.remove("error");
            this.validarFormulario();
        }else{
            //el tamaño de nombre es falso
            // this.campoNombre=false;
            //aca deberiamos aplicar una logica que permita seleccionar
            //una variable de control como campoNombre 
            document.getElementById(variableElementoID).classList.add("error");
            this.validarFormulario();
        }

    }
    validarFormulario(){
        if(campoNombre && campoCampo){
            //
            document.getElementById("botonSubmit").removeAttribute("disabled");
        }else{
            document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        }
    }
}


const valores = location.search;

var campoNombre=false;
var campoCampo=false;

const urlParams = new URLSearchParams(valores);
var nombre = urlParams.get('nombre');
var telefono = urlParams.get('telefono');
var correo = urlParams.get('correo');
var campo = urlParams.get('campo');
var cuit = urlParams.get('cuit');
if (nombre != null && telefono != null && correo != null && campo != null && cuit == null) {
    objeto = new ControlFormulario(nombre,telefono,correo,campo,cuit);
}
