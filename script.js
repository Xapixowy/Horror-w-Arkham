const navButton = document.querySelector('button#navClick');
const navBurgerLine1 = document.querySelector('button#navClick>div.burger:nth-of-type(1)');
const navBurgerLine2 = document.querySelector('button#navClick>div.burger:nth-of-type(2)');
const navBurgerLine3 = document.querySelector('button#navClick>div.burger:nth-of-type(3)');
const nav = document.querySelector('nav');

function navBurgerToggle() {
   navButton.classList.toggle('buttonClicked');
   navBurgerLine1.classList.toggle('burgerClicked1');
   navBurgerLine2.classList.toggle('burgerClicked2');
   navBurgerLine3.classList.toggle('burgerClicked3');
   nav.classList.toggle('navClicked');
}

navButton.addEventListener('click', navBurgerToggle);

const randomCharacterButton = document.querySelector('button#randomCharacter');

function randomCharacter() {
   let characters = new Array();
   // Podstawowe
   characters[0] = "./characters/amandaSharpe/menu.html"
   characters[1] = "./characters/bobJenkins/menu.html"
   characters[2] = "./characters/carolynFern/menu.html"
   characters[3] = "./characters/darrellSimons/menu.html"
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