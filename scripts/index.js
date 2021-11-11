let popupOpened = document.querySelector('.profile__editing');
let popup = document.querySelector('.popup');

function popupOpen() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;

    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
    }
}
popupOpened.addEventListener('click', popupOpen);

// Находим форму в DOM
let formElement = document.querySelector('.form') // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('#name') // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('#profession') // Воспользуйтесь инструментом .querySelector()
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let buttonSave = document.querySelector('.form__button');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет


function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);