let buttonOpenPopup = document.querySelector(".profile__editing");
//let popup = document.querySelector(".popup");
let popupFormProfile = document.querySelector("#popup__form-profile")
let popupCard = document.querySelector("#popup__card")
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#profession");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__subtitle");
let buttonSave = document.querySelector(".form__button");
let buttonOpenFormPlace = document.querySelector(".button");
const album = document.querySelector("#album__card").content;
const album2 = document.querySelector('.album');

let popupCloseFormPlace = document.querySelector(".popup__close-place");


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const displayCards = initialCards.map(function(item) {
  const albumItem = album.querySelector('.album__container').cloneNode(true);
  albumItem.querySelector('.album__title').textContent = item.name;
  albumItem.querySelector('.album__image').src = item.link;
  album2.append(albumItem);
  return initialCards;

});





// function popupToOpen() {
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = jobProfile.textContent;

//   if (popup.classList.contains("popup_opened")) {
//     popup.classList.remove("popup_opened");
//   }
// }

function popupToOpenProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  if (popupFormProfile.classList.contains("popup_opened")) {
    popupFormProfile.classList.remove("popup_opened");
  }
}

function popupToOpenCard() {

  if (popupCard.classList.contains("popup_opened")) {
    popupCard.classList.remove("popup_opened");
  }
}

function popupToCloseProfile() {  
  popupFormProfile.classList.add("popup_opened"); 
}

function popupToCloseCard() { 

  popupCard.classList.add("popup_opened"); 
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupToCloseProfile();  
}


buttonOpenPopup.addEventListener("click", popupToOpenProfile);
popupClose.addEventListener("click", popupToCloseProfile);
formElement.addEventListener("submit", formSubmitHandler);
buttonOpenFormPlace.addEventListener("click", popupToOpenCard);
popupCloseFormPlace.addEventListener("click", popupToCloseCard);
