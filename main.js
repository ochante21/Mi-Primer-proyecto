
let imagenes = ['././assets/imagenes/Cinema.jpg',"./assets/imagenes/Costume_Party.jpg","./assets/imagenes/Food_Fair.jpg","./assets/imagenes/Music_Concert.jpg"];
let img = ``;
let indice=0;

//DOM
let contenedorIMG= document.querySelector('.imagenPortada');
let botonNext= document.getElementById('next');
let botonPrev= document.getElementById('prev');

//eventos
botonNext.addEventListener('click',nextImage);
botonPrev.addEventListener('click',prevImage);

//funciones
function nextImage() {
    if(indice<imagenes.length-1){
        indice++;
    }
    else {
        indice=0;
    }
    pintarImagen(imagenes);
  }
  function prevImage() {
    if(indice>0){
        indice--;
    }
    else {
        indice=imagenes.length-1;
    }
    pintarImagen(imagenes);
  }

function pintarImagen(arrayImagenes){
    img = `<div><img class="imagenPort" src=${arrayImagenes[indice]}></div>`;
    contenedorIMG.innerHTML= img ;
}
 pintarImagen(imagenes);
setInterval(nextImage, 3000);