const popupElement = document.querySelector(".popup");

const editButton = document.querySelector(".profile__author-edit-button");

const closeButton = document.querySelector(".popup__close-button");

let authorName = document.querySelector(".profile__author-name");

let authorText = document.querySelector(".profile__author-text");

let nameInput = document.querySelector(".popup__field-text_name");

let infoInput = document.querySelector(".popup__field-text_info");

function formSubmitHandler(evt) {
  evt.preventDefault();

  authorName.textContent = nameInput.value;
  authorText.textContent = infoInput.value;
  closePopup();
}

popupElement.addEventListener("submit", formSubmitHandler);

function openPopup() {
  nameInput.value = authorName.textContent;
  infoInput.value = authorText.textContent;

  popupElement.classList.add("popup_opened");
}

function closePopup() {
  popupElement.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);
