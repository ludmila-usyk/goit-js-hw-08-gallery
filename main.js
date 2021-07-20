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

function onClick(e) {
    if (e.target.nodeName !== 'js-gallery__item') {
        return;
    }
}


//modal

// galleryRef.addEventListener('click', onOpenModal);

// function onOpenModal(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//       return;
//     }
//     document.addEventListener("keydown", onCloseModal);
  
//     lightboxRef.classList.add("is-open");
//     lightboxImageRef.src = e.target.dataset.source;
//     lightboxImageRef.alt = e.target.alt;
//   }
  
//   function onCloseModal(e) {
//     e.preventDefault();
//     document.removeEventListener("keydown", onCloseModal);
//     lightboxRef.classList.remove("is-open");
//     lightboxImageRef.src = "";
//   }













function onOpenModal(e) {
    e.stopPropagation();
    if(e.target.nodeName !== 'IMG') {
        return;
    }
        lightboxRef.classList.add("is-open");
        lightboxImageRef.src = e.target.dataset.source;
        lightboxImageRef.alt = e.target.alt;
        lightboxOverlayRef.addEventListener("click", closeByOverlay);
        document.addEventListener("keydown", closeByEscape);
        lightboxButtonRef.addEventListener('click', onCloseModal);
        window.addEventListener("keydown", lightboxImageRefScroll);
        lightboxContentRef.addEventListener("click", lightboxImageRefScroll);          
};

function onCloseModal(e) {
    lightboxRef.classList.remove("is-open");
    lightboxOverlayRef.removeEventListener("click", closeByOverlay);
    document.removeEventListener("keydown", closeByEscape);
    lightboxButtonRef.removeEventListener('click', onCloseModal);
    window.removeEventListener("keydown", lightboxImageRefScroll);
    lightboxContentRef.removeEventListener("click", lightboxImageRefScroll);      
};

galleryRef.addEventListener('click', onOpenModal);
// lightboxButtonRef.addEventListener('click', onCloseModal);


function closeByEscape(e) {
    if (e.code === "Escape") {
        onCloseModal(e)        
    }
};

function closeByOverlay(e) {
    if (e.currentTarget === e.target) {
        onCloseModal(e)      
    }
};




















// function closeModalESC(evt) {
//     if (evt.key !== "Escape") {
//         return;
//     }
//     toggleModal();
// };
// function toggleModal() {
//     closeModalESC.classList.toggle("open-modal");
// };
// lightboxRef.addEventListener("click", toggleModal);
// lightboxButtonRef.addEventListener("click", toggleModal);
// window.addEventListener("keyup", closeModalESC);