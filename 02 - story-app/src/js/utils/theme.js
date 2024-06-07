const bodyElement = document.querySelector('body');

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}

const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
bodyElement.setAttribute('data-bs-theme', theme);
