var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var pass2=document.getElementById("pass2");
var boton=document.getElementById("boton");
var usuario=document.getElementById('usuario');
var contra=document.getElementById('contra');
var datos;
var datosentrar;

function guardarDatos(){
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    email=document.getElementById("email").value;
    pass=document.getElementById("pass").value;
    pass2=document.getElementById("pass2").value;
    datos=[nombre, apellido, email, pass, pass2];
    j=0;
    for (i=0;i<datos.length;i++){
        if (!!datos[i]){
            j++;
        }
    }
    if (j==5){
        if (pass==pass2){
            alert("Registro exitoso!")
            return datos;
        } else{
            alert("Las contraseñas no coinciden!");
        }
    } else{
        alert("Completa los datos para el registro");        
    }
    
}

function entrar(){
    usuario=document.getElementById('usuario').value;
    contra=document.getElementById('contra').value;
    datosentrar=[usuario,contra];
    console.log(datosentrar);
    
}