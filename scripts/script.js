const popupElement = document.querySelector(".popup");

const editButton = document.querySelector(".author__edit-button");

const closeButton = document.querySelector(".popup__close-button");

let authorName = document.querySelector(".author__name");

let authorText = document.querySelector(".author__text");

let nameInput = document.querySelector(".popup__text_name");

let infoInput = document.querySelector(".popup__text_info");

nameInput.value = authorName.textContent;

infoInput.value = authorText.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();

  authorName.textContent = nameInput.value;
  authorText.textContent = infoInput.value;
  closePopup();
}

popupElement.addEventListener("submit", formSubmitHandler);

function openPopup() {
  popupElement.classList.remove("hidden");
}

function closePopup() {
  popupElement.classList.add("hidden");
}

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);
