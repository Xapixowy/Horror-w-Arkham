const navButton = document.querySelector('button#navClick');
const navBurgerLine1 = document.querySelector('button#navClick>div.burger:nth-of-type(1)');
const navBurgerLine2 = document.querySelector('button#navClick>div.burger:nth-of-type(2)');
const navBurgerLine3 = document.querySelector('button#navClick>div.burger:nth-of-type(3)');
const nav = document.querySelector('nav');

function navBurgerToggle() {
   if (navButton.classList.contains('clicked') == false) {
      navButton.style.backgroundColor = '#808080';
      navBurgerLine1.style.transform = 'translateY(15px) rotate(45deg)';
      navBurgerLine2.style.transform = 'translateX(-42px)';
      navBurgerLine3.style.transform = 'translateY(-15px) rotate(-45deg)';
      nav.style.transform = 'translateX(0%)';
      if (loreButton) {
         loreButton.style.transform = 'translateX(150%)';
      }
      navButton.classList.add('clicked');
   } else {
      navButton.style.backgroundColor = '#C4C4C4';
      navBurgerLine1.style.transform = 'initial';
      navBurgerLine2.style.transform = 'initial';
      navBurgerLine3.style.transform = 'initial';
      nav.style.transform = 'translateX(-100%)';
      if (loreButton) {
         loreButton.style.transform = 'initial';
      }
      navButton.classList.remove('clicked');
   }
}
navButton.addEventListener('click', navBurgerToggle);

const loreButton = document.querySelector('button#loreClick');
const loreQuestion = document.querySelector('button#loreClick>i');
const aside = document.querySelector('aside');

function loreToggle() {
   if (loreButton.classList.contains('clicked') == false) {
      loreButton.style.backgroundColor = '#808080';
      loreQuestion.style.transform = 'rotate(180deg)';
      aside.style.transform = 'translateX(0%)';
      navButton.style.transform = 'translateX(-150%)';
      loreButton.classList.add('clicked');
   } else {
      loreButton.style.backgroundColor = '#C4C4C4';
      loreQuestion.style.transform = 'none';
      aside.style.transform = 'translateX(100%)';
      navButton.style.transform = 'initial';
      loreButton.classList.remove('clicked');
   }
}
if (loreButton) {
   loreButton.addEventListener('click', loreToggle);
}

const randomCharacterButton = document.querySelector('button#randomCharacter');

function randomCharacter() {
   let characters = new Array();
   characters[0] = "./characters/amandaSharpe/menu.html"
   characters[1] = "./characters/bobJenkins/menu.html"
   characters[2] = "./characters/carolynFern/menu.html"
   characters[3] = "./characters/darrellSimmons/menu.html"
   characters[4] = "./characters/dexterDrake/menu.html"
   characters[5] = "./characters/gloriaGoldberg/menu.html"
   characters[6] = "./characters/harveyWalters/menu.html"
   characters[7] = "./characters/jennyBarnes/menu.html"
   characters[8] = "./characters/joeDiamond/menu.html"
   characters[9] = "./characters/kateWinthrop/menu.html"
   characters[10] = "./characters/mandyThompson/menu.html"
   characters[11] = "./characters/michaelMcglen/menu.html"
   characters[12] = "./characters/montereyJack/menu.html"
   characters[13] = "./characters/peteWloczega/menu.html"
   characters[14] = "./characters/siostraMary/menu.html"
   characters[15] = "./characters/vincentLee/menu.html"
   // Koszmar z Dunwich
   characters[16] = "./characters/dianaStanley/menu.html"
   characters[17] = "./characters/jacquelineFine/menu.html"
   characters[18] = "./characters/jimCulver/menu.html"
   characters[19] = "./characters/leoAnderson/menu.html"
   characters[20] = "./characters/marieLambeau/menu.html"
   characters[21] = "./characters/markHarrigan/menu.html"
   characters[22] = "./characters/ritaYoung/menu.html"
   characters[23] = "./characters/wilsonRichards/menu.html"
   let random = Math.round(Math.random() * (characters.length - 1));
   window.location = characters[random];
}