const typedWord = document.querySelector('.typed-word');
const cursor = document.querySelector('.cursor');

const titleArray = ['Web developer', 'Gamer', 'Meme Creator'];
let letterIndex = 0;
let wordIndex = 0;

const typeDelay = 200;
const earseDelay = 200;
const newWordDelay = 2000;

function type() {
  if (letterIndex < titleArray[wordIndex].length) {
    if (!cursor.classList.contains('typing')) {
      cursor.classList.add('typing');
    }

    typedWord.textContent += titleArray[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typeDelay);
  } else {
    cursor.classList.remove('typing');
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (letterIndex > 0) {
    if (!cursor.classList.contains('typing')) {
      cursor.classList.add('typing');
    }

    typedWord.textContent = titleArray[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, earseDelay);
  } else {
    cursor.classList.remove('typing');
    wordIndex++;
    if (titleArray >= titleArray.length) {
      wordIndex = 0;
    }
    setTimeout(type, typeDelay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, newWordDelay);
});

