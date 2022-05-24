var  inputs = document.getElementsByClassName('formulario--input');
for (var i =0;i <= inputs.length;i++){
    inputs[i].addEventListener('keyup', function(){
     if(this.value.length>=1)  {
         this.nextElementsibling.classList.add('fijar');
       } else{
        this.nextElementsibling.classList.remove('fijar');
        }});
    }