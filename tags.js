// // выбираем 1 вариант
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if(evt.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     const currentActiveBtn = document.querySelector('.tags__btn--active'); //поиск активной кнопки
   
//     // console.log(currentActiveBtn);

//     if(currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active');
//     };

//     //currentActiveBtn?.classList.remove('tags__btn--active'); // эта строка вместо ифа 14-16

//     // evt.target.classList.add('tags__btn--active'); //добавили класс в html

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value; // при обавлении строки 22 и 2 активной кнопка становится выборочная

//     console.log(selectedTag);
// };



//выбираем любые варианты
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();


tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
    if(evt.target.nodeName !== 'BUTTON') {
        return;
    }

    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    if(isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    };
    
    btn.classList.toggle('tags__btn--active'); //добавляет или удаляет класс
    console.log(selectedTags);
}

