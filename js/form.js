import { isEscapeKey } from './utils-modal.js';;
import { isValidateHashtags, isValidateDesc } from './validators.js';

const overlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closeButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const descField = form.querySelector('.text__description');
const body = document.body;


function resetUploadInput() {
  uploadInput.value = '';
}

function closeForm() {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  resetUploadInput();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && !isTextFieldFocused()) {
    event.preventDefault();
    closeForm();
  }
}
function isTextFieldFocused() {
  const activeElement = document.activeElement;
  return activeElement === hashtagField || activeElement === descField;
}

function showModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeForm, { once: true });
}

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

pristine.addValidator(hashtagField, isValidateHashtags);
pristine.addValidator(descField, isValidateDesc);

export function initForm() {
  uploadInput.addEventListener('change', showModal);

  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });
}

