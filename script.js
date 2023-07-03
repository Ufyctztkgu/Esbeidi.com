let mostrador=document.getElementById("mostrador");
let seleccion=document.getElementById("seleccion");
let imgSeleccionada=document.getElementById("img");
let modeloSeleccionado=document.getElementById("modelo");
let descripSeleccionada=document.getElementById("descripcion");
let precioSeleccionado=document.getElementById("precio");


//Funcion que carga la info del item Seleccionado 
function cargar(item){
    quitarBordes();
    mostrador.style.width="60%"
    seleccion.style.width="40%"
    seleccion.style.opacity="1"
    item.style.border="2px solid red"
    
    imgSeleccionada.src=item.getElementsByTagName("img")[0].src;
    
    modeloSeleccionado.innerHTML=item.getElementsByTagName("p")[0].innerHTML;
    
    descripSeleccionada.innerHTML="Descripcion del modelo";
    
    precioSeleccionado.innerHTML=item.getElementsByTagName("span")[0].innerHTML
}
function quitarBordes(){
    var items=document.getElementsByClassName("item");
    for(i=0;i<items.length;i++){
        items[i].style.border="none";        
    }
}
function cerrar(){
    mostrador.style.width="100%";
    seleccion.style.width="0%";
    mostrador.style.opacity="0";
    quitarBordes ();
}
