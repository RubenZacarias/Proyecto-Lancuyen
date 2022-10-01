const btntCierra = document.querySelector("#btn-cierra");
const btnAdelanta = document.querySelector("#btn-adelanta");
const btnRetrocede = document.querySelector("#btn-retrocede");
const imagenes =document.querySelectorAll("#galeria img");
const lightbox = document.querySelector("#contenedor-principal");
const imagenActiva = document.querySelector("#img-activa");
let indiceImagen = 0;

const abreLightbox =(Event) =>{
    imagenActiva.src = Event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen =Array.from(imagenes).indexOf(Event.target);
}

imagenes.forEach((imagen) =>{
    imagen.addEventListener('click', abreLightbox);
});

btntCierra.addEventListener('click',() =>{
    lightbox.style.display = 'none';
} );

const adelantaImagen =() =>{
    if(indiceImagen === imagenes.length -1){
        indiceImagen = -1;
    }

    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
}

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocedeImagen =() =>{
    if(indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }

    imagenActiva.src = imagenes [indiceImagen - 1].src;
    indiceImagen--;
}

btnRetrocede.addEventListener('click', retrocedeImagen);