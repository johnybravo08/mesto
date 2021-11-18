let buttonOpenPopup = document.querySelector(".profile__editing");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#profession");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__subtitle");
let buttonSave = document.querySelector(".form__button");

function popupToOpen() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  if (popup.classList.contains("popup_opened")) {
    popup.classList.remove("popup_opened");
  }
}
function popupToClose() {  
    popup.classList.add("popup_opened"); 
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupToClose();  
}

buttonOpenPopup.addEventListener("click", popupToOpen);
popupClose.addEventListener("click", popupToClose);
formElement.addEventListener("submit", formSubmitHandler);
