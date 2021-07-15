//01 const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenersBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click',() => {
//     console.log('Вешаю слушателя собітия на целевую кнопку');
//     targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenersBtn.addEventListener('click', () => {
//     console.log('снимаю слушателя собітия с целевой кнопки');
//     targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//     console.log('клик по целевой кнопке');
// };




//02 const form = document.querySelector('.js-register-form');
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
  
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> value', value);
//         console.log('onFormSubmit -> name', name);
//     });
// };




// //03
// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// }
// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChange);
// // refs.input.addEventListener('input', onInputChange);
// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//     console.log('инпут получил focus - собитие focus');
// };
// function onInputBlur() {
//     console.log('инпут потерял focus - собитие blur');
// };
// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value;
// };
// function onLicenseChange(event) {
//     console.log(event.currentTarget.checked);
//     console.log('refs.btn.disabled: ', refs.btn.disabled);

//     refs.btn.disabled = !event.currentTarget.checked;
// };



// //04
// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//     // console.log(event);
//     // console.log('event.key:', event.key);
//     // console.log('event.code: ', event.code);

//     refs.output.textContent += event.key;
// };

// function onClearOutput () {
//     refs.output.textContent = ' ';
// };




//05
// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// //boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//     const box = event.currentTarget;
//     box.classList.add('box--active');
// };

// function onMouseLeave(event) {
//     const box = event.currentTarget;
//     box.classList.remove('box--active');
// };
// function onMouseMove(event) {
//     console.log(event);
// };





// const refs = {
//     input: document.getElementById('name-input'),
//     span: document.getElementById('name-output'),
// };

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     refs.span.textContent = event.currentTarget.value;
// };





//123
// const imageEl = document.querySelector('.hero');
// // console.log('imageEl', imageEl);
// imageEl.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl.alt = 'fish';

// const titleEl = document.querySelector('.title');
// console.log('titleEl', titleEl);
// console.log(titleEl.textContent);
// titleEl.textContent = 'hello';
// console.log(imageEl.src); //вместо: (imageEl.getAttribute('src'))




