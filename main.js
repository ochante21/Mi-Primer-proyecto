//const carousel = document.querySelector('.carousel');

let imagenes = ['././assets/imagenes/Cinema.jpg',"./assets/imagenes/Costume_Party.jpg","./assets/imagenes/Food_Fair.jpg","./assets/imagenes/Music_Concert.jpg"];
let index = 0;

//DOM

function carrusel(contenedor){
contenedor.addEventListener('click', e =>{
    let atras = contenedor.querySelector('.atras');
    let adelante= contenedor.querySelector('.adelante');
    img = contenedor.querySelector('img');
    tgt= e.target;

    if(tgt == atras){
        if(index>0){
            img.src = imagenes[index-1];
            index--;
        }
        else{
            img.scr = imagenes[imagenes.length -1];
            index = imagenes.length -1;
        }
    }
    else if(tgt == adelante){
        if(index<imagenes.length -1){
            img.src = imagenes[index+1];
            index++;
        }
        else{
            img.scr = imagenes[0];
            index = 0;
        }
    }
})
}

document.addEventListener('DOMContentLoaded',()=>{
    let contenedor = document.querySelector('.portada');
    carrusel(contenedor);
})
