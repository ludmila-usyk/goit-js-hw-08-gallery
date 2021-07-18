import galleryItems from "./app.js";

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('js-lightbox');
const lightboxOverlayRef = document.querySelector('lightbox__overlay');
const lightboxImageRef = document.querySelector('lightbox__image');
const lightboxButtonRef = document.querySelector('lightbox__button');
const lightboxContentRef = document.querySelector('lightbox__content');

//Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
const pictureMarkup = createGallery();
galleryRef.insertAdjacentHTML('beforeend', pictureMarkup);

function createGallery() {
    let i = 0;
    const markup = galleryItems
    .map(({preview, original, description}) => {
        return `
        <li class="js-gallery__item">
            <a class="js-gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
                data-source="${original}"
                data-picture="${i += 1}"
                />
            </a>
        </li>
    `;})
    .join('');
    return markup;
};

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryRef.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.nodeName !== 'js-gallery__item') {
        return;
    }
}


