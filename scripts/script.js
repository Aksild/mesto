// Переменные попап с именем и профессией

const popupAuthor = document.querySelector("#author");
const editButton = document.querySelector(".profile__author-edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const authorTitle = document.querySelector(".profile__author-name");
const authorText = document.querySelector(".profile__author-text");
const authorNameInput = document.querySelector(
  ".popup__field-text_author_name"
);
const authorInfoInput = document.querySelector(
  ".popup__field-text_author_info"
);

// Переменные попап с добавлением карточки

const popupCard = document.querySelector("#card");
const addCardButton = document.querySelector(".profile__add-button");
const cardTitleInput = document.querySelector(".popup__field-text_card_title");
const cardPhotoInput = document.querySelector(".popup__field-text_card_photo");

const photoGridTemplate = document.querySelector("#photo-grid").content;
const photoGridElementTemplate = photoGridTemplate.querySelector(
  ".photo-grid__rectangle"
);

const photoGridSection = document.querySelector(".photo-grid");

// Переменные попап с картинкой

const popupPicture = document.querySelector("#picture");

// Функция открывания попапа

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// Функция закрывания попапа

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Функция лайка

// Функция создания карточки с картинкой

function createCard(title, imageUrl) {
  const photoGridElement = photoGridElementTemplate.cloneNode(true);

  const deleteButton = photoGridElement.querySelector(
    ".photo-grid__delete-button"
  );
  deleteButton.addEventListener("click", function () {
    const photoCard = deleteButton.closest(".photo-grid__rectangle");
    photoCard.remove();
  });

  const likeButton = photoGridElement.querySelector(".photo-grid__like-button");

  function like(button) {
    button.classList.toggle("photo-grid__like-button_active");
  }

  likeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    like(likeButton);
  });
  const image = photoGridElement.querySelector(".photo-grid__image");
  image.src = imageUrl;
  image.alt = title;
  photoGridElement.querySelector(".photo-grid__text").textContent = title;

  image.addEventListener("click", function (evt) {
    evt.preventDefault();
    const popupImage = popupPicture.querySelector(".popup__image");
    popupImage.src = imageUrl;
    popupImage.alt = title;
    popupPicture.querySelector(".popup__description").textContent = title;
    openPopup(popupPicture);
  });

  return photoGridElement;
}

function renderCard(title, imageUrl) {
  const photoGridElement = createCard(title, imageUrl);
  photoGridSection.prepend(photoGridElement);
}
// Функция лайка карточки

// Присваивание данных с именем и профессией из попапа на страницу

popupAuthor.querySelector("form").addEventListener("submit", function (evt) {
  evt.preventDefault();

  authorTitle.textContent = authorNameInput.value;
  authorText.textContent = authorInfoInput.value;
  closePopups();
});

// Присваивание данных с именем и профессией из страницы на попап

editButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  authorNameInput.value = authorTitle.textContent;
  authorInfoInput.value = authorText.textContent;
  openPopup(popupAuthor);
});

// Присваивание данных с картинкой и названием из попапа на созданную карточку

popupCard.querySelector("form").addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderCard(cardTitleInput.value, cardPhotoInput.value);
  cardTitleInput.value = "";
  cardPhotoInput.value = "";
  closePopups();
});

addCardButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopup(popupCard);
});

// Метод закрывания попапа через обработчик события

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup(closeButton.closest(".popup"));
  });
});

// Массив для карточек по умолчанию

const initialCards = [
  {
    title: "Архыз",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    imageUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Метод присвоения фотографии и названия для созданной карточки при создании

initialCards.forEach((cardData) => {
  renderCard(cardData.title, cardData.imageUrl);
});
