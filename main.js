import galleryItems from "./app.js";

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxButtonRef = document.querySelector('.lightbox__button');
const lightboxContentRef = document.querySelector('.lightbox__content');

//Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
const pictureMarkup = createGallery().join("");
galleryRef.insertAdjacentHTML('beforeend', pictureMarkup);

function createGallery() {
    return galleryItems.map(({ preview, original, description }, index) => {
        return `
            <li class="js-gallery__item">
                <a class="js-gallery__link" href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" 
                    data-source="${original}"
                    data-picture="${index}"
                    />
                </a>
            </li>
        `;
      });
};

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryRef.addEventListener('click', onOpenModal);
lightboxRef.addEventListener('click', onCloseModal);

function onCloseModal(e) {
    if (e.target.nodeName === "IMG") {
        return;
    }
    window.removeEventListener("keyup", closeByEscape);
    lightboxRef.classList.remove("is-open");
    lightboxImageRef.src = "#";
}

//modal

function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    lightboxRef.classList.add("is-open");
    lightboxImageRef.src = e.target.dataset.source;
    window.addEventListener("keyup", closeByEscape);
}

// закрываем по Escape
function closeByEscape(e) {
    if (e.key === "Escape") {
        onCloseModal(e);
    }
}


//lazyload
if ('loading' in HTMLImageElement.prototype) {
    addSrcAttrToLazyImages();
} else {
    addLazySizesSript();
}

const lazyImages = document.querySelectorAll('.preview');

lazyImages.forEach(Image => {
    Image.addEventListener('load', onImageLoaded, {once: true});
})

function onImageLoaded(e) {
    e.target.classList.add('appear');
}

function addLazySizesSript () {
    const script = document.createElement('script');

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
};

function addSrcAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.preview = img.dataset.src;
    });
};











