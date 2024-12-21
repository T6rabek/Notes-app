const textContainer = document.querySelector('.note-container textarea');

function createNoteContainer() {
  const noteContainer = document.querySelector('.note-container');
  noteContainer.classList.toggle('visible');
  adjustHeight();
}

function clearText() {
  textContainer.value = '';
  adjustHeight();
}

function adjustHeight() {
  textContainer.style.height = 'auto';
  textContainer.style.height = `${textContainer.scrollHeight}px`;
}

document
  .querySelector('#button')
  .addEventListener('click', createNoteContainer);
document.querySelector('#clear-button').addEventListener('click', clearText);

textContainer.addEventListener('input', adjustHeight);
