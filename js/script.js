const version = '1.1.5';

const navButton = document.querySelector('button#navClick');

function navBurgerToggle() {
   navButton.classList.toggle('clicked');
}
navButton.addEventListener('click', navBurgerToggle);

const preloaderFadeOut = (duration, delay = 0) => {
   setTimeout(() => {
      const preloader = document.querySelector('div#preloader');
      preloader.style.transition = `${duration}ms`;
      preloader.style.opacity = '0';
      setTimeout(() => {
         preloader.style.display = 'none';
      }, duration);
   }, delay);
};

const getCharacter = async (characterName) => {
   const res = await fetch(`./characters/${characterName}.json`);
   const result = await res.json();
   return result;
};

const createCookie = (name, value, days) => {
   let expires;
   if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = date.toGMTString();
   } else expires = '';
   document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=strict`;
};

document.getElementById('version').textContent = `v${version}`;
