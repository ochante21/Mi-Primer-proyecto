
//declarar variables
let indice = 0;
let intervalo = 2000;
let intervaloCarrusel = setInterval(nextImage, intervalo);

//asincronismo

let eventos;
const obtener_mangas = async () => {
    try {
        const respuesta = await fetch('https://api.jikan.moe/v4/anime?q=eyeshield 21&sfw');
        let datos = await respuesta.json();
        eventos = datos.data;
        imagen_del_manga= eventos[0].images.jpg.image_url;
        titulo_manga= eventos[0];
        console.log(imagen_del_manga);
        console.log(titulo_manga.title);
        console.log(eventos);
        pintarMangas(eventos);
    }
    catch (error) {
        console.log('error al cargar');
    }
}

//prueba
let mg =
    `
    <article>
        <figure>
            <img class="portada_manga" src="" alt="Portada del manga">
                <figcaption>
                    <h2>titulo del manga </h2>
                    <div class="cap">
                        <span class="ultimoCap">capitulo 9</span>
                        <span>capitulo 8</span>
                    </div>
                </figcaption>
        </figure>
    </article >
`;


//DOM
let contenedorIMG = document.querySelector('.imagenPortada');
let botonNext = document.getElementById('next');
let botonPrev = document.getElementById('prev');
let portada = document.querySelector('.portada');

let contenedorDEmangas = document.querySelector('.lista_inicio');

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
        listaDEmangas += `                
            <article>        
                <figure>
                        <img class="portada_manga" src="${manga.images.jpg.image_url}" alt="Portada del manga">
                        
                    <figcaption>
                        <h2>${manga.title}</h2>
                        <div class="cap">
                            <a class="ultimoCap" href="https://myanimelist.net/anime/15/Eyeshield_21" >capitulo 9</a>
                            <span>capitulo 8</span>
                        </div>
                    </figcaption>
                </figure>
            </article>            
        `;

    });
    contenedorDEmangas.innerHTML += listaDEmangas;
}

//llamada de funciones
pintarImagen(indice);
//pintarMangas(mangas);
obtener_mangas();