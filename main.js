
//base provisional
let portadas = ['././assets/imagenes/Cinema.jpg', "./assets/imagenes/Costume_Party.jpg", "./assets/imagenes/Food_Fair.jpg", "./assets/imagenes/Music_Concert.jpg"];
let mangas = [
    { 'id': 1, 'titulo': 'La Mamachon', 'capitulos': [1, 2, 3, 4] },
    { 'id': 1, 'titulo': 'Procedimientos para llegar a un comun acuerdo', 'capitulos': [1, 2, 3, 4, 5, 6, 7, 8] },
    { 'id': 2, 'titulo': 'Los Malaventurados no LLoran', 'capitulos': [1, 2, 3, 4, 5] },
    { 'id': 3, 'titulo': 'Ah pero como Vendo Cassets!', 'capitulos': [1, 2, 3, 4, 5, 6, 7] },
    { 'id': 4, 'titulo': 'Melancolidos', 'capitulos': [1, 2, 3, 4, 5] },
    { 'id': 5, 'titulo': 'Solo a Terceros', 'capitulos': [1, 2, 3, 4, 6, 7, 8, 9, 10] }]

//declarar variables
let indice = 0;
let intervalo = 2000;
let intervaloCarrusel = setInterval(nextImage, intervalo);

//DOM
let contenedorIMG = document.querySelector('.imagenPortada');
let botonNext = document.getElementById('next');
let botonPrev = document.getElementById('prev');
let portada = document.querySelector('.portada');

let contenedorDEmangas= document.querySelector('.lista_inicio');

//eventos
botonNext.addEventListener('click', nextImage);
botonPrev.addEventListener('click', prevImage);
portada.addEventListener('mouseover', pausarCarrusel);

portada.addEventListener('mouseout', renaduarCarrusel);

//funciones
function nextImage() {
    if (indice < portadas.length - 1) {
        indice++;
    }
    else {
        indice = 0;
    }
    pintarImagen(indice);
}
function prevImage() {
    if (indice > 0) {
        indice--;
    }
    else {
        indice = portadas.length - 1;
    }
    pintarImagen(indice);
}

function pintarImagen(indice) {
    let img = ``;
    img = `<div><img class="imagenPort" src=${portadas[indice]}></div>`;
    contenedorIMG.innerHTML = img;
}

function pausarCarrusel() {
    clearInterval(intervaloCarrusel);
}

function renaduarCarrusel() {
    intervaloCarrusel = setInterval(nextImage, intervalo);
}

function pintarMangas(arrayDEmangas) {
    let listaDEmangas = ``;
    arrayDEmangas.forEach(manga => {
        listaDEmangas+=`
            <article>
                <figure>
                    <img class="portada_manga" src="./assets/mangas_portada/portada_manga.jpg" alt="Portada del manga">
                    <figcaption>
                        <h2>${manga['titulo']}</h2>
                        <div class="cap">
                            <span class="ultimoCap">capitulo 9</span>
                            <span>capitulo 8</span>
                        </div>
                    </figcaption>
                </figure>
            </article>
        `;

    });
    contenedorDEmangas.innerHTML+=listaDEmangas;
}

//llamada de funciones
pintarImagen(indice);
pintarMangas(mangas);