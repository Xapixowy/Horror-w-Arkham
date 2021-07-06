const navButton = document.querySelector('button#navClick');
const navBurgerLine1 = document.querySelector('button#navClick>div.burger:nth-of-type(1)');
const navBurgerLine2 = document.querySelector('button#navClick>div.burger:nth-of-type(2)');
const navBurgerLine3 = document.querySelector('button#navClick>div.burger:nth-of-type(3)');
const nav = document.querySelector('nav');

const loreButton = document.querySelector('button#loreClick');
const loreQuestion = document.querySelector('button#loreClick>i');
const aside = document.querySelector('aside');

const adminSwitch = document.querySelector('nav div#admin > input');
const previousPhaseButton = document.querySelector('button#previousPhase');
const nextPhaseButton = document.querySelector('button#nextPhase');
const resetPhaseButton = document.querySelector('button#resetPhase');

let currentPhase = 0;

// const requestURL = '../../gameInfo.json';
// const request = new XMLHttpRequest();
// let jsonValues;
// const downloadJson = () => {
//    request.open('GET', requestURL);
//    request.responseType = 'json';
//    request.send();
//    request.onload = () => {
//       jsonValues = request.response;
//       while (jsonValues === null) alert("Can't find gameInfo.json!");
//    };
//    console.log(jsonValues);
// };
// setInterval(downloadJson, 1000);

function navBurgerToggle() {
   if (navButton.classList.contains('clicked') == false) {
      navButton.style.backgroundColor = '#808080';
      navBurgerLine1.style.transform = 'translateY(15px) rotate(45deg)';
      navBurgerLine2.style.transform = 'translateX(-42px)';
      navBurgerLine3.style.transform = 'translateY(-15px) rotate(-45deg)';
      nav.style.transform = 'translateX(0%)';
      navButton.classList.add('clicked');
   } else {
      navButton.style.backgroundColor = '#C4C4C4';
      navBurgerLine1.style.transform = 'initial';
      navBurgerLine2.style.transform = 'initial';
      navBurgerLine3.style.transform = 'initial';
      nav.style.transform = 'translateX(-100%)';
      navButton.classList.remove('clicked');
   }
   nav.classList.toggle('shown');
   if (nav.classList.contains('shown')) {
      loreButton.style.transform = 'translateX(150%)';
      previousPhaseButton.style.transform = 'translateX(150%)';
      nextPhaseButton.style.transform = 'translateX(150%)';
      resetPhaseButton.style.transform = 'translateX(150%)';
   } else {
      loreButton.style.transform = 'translateX(0%)';
      previousPhaseButton.style.transform = 'translateX(0)';
      nextPhaseButton.style.transform = 'translateX(0)';
      resetPhaseButton.style.transform = 'translateX(0)';
   }
}
navButton.addEventListener('click', navBurgerToggle);

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
   let characters = [];
   characters[0] = './characters/amandaSharpe/player.html';
   characters[1] = './characters/bobJenkins/player.html';
   characters[2] = './characters/carolynFern/player.html';
   characters[3] = './characters/darrellSimmons/player.html';
   characters[4] = './characters/dexterDrake/player.html';
   characters[5] = './characters/gloriaGoldberg/player.html';
   characters[6] = './characters/harveyWalters/player.html';
   characters[7] = './characters/jennyBarnes/player.html';
   characters[8] = './characters/joeDiamond/player.html';
   characters[9] = './characters/kateWinthrop/player.html';
   characters[10] = './characters/mandyThompson/player.html';
   characters[11] = './characters/michaelMcglen/player.html';
   characters[12] = './characters/montereyJack/player.html';
   characters[13] = './characters/peteWloczega/player.html';
   characters[14] = './characters/siostraMary/player.html';
   characters[15] = './characters/vincentLee/player.html';
   // Koszmar z Dunwich
   characters[16] = './characters/dianaStanley/player.html';
   characters[17] = './characters/jacquelineFine/player.html';
   characters[18] = './characters/jimCulver/player.html';
   characters[19] = './characters/leoAnderson/player.html';
   characters[20] = './characters/marieLambeau/player.html';
   characters[21] = './characters/markHarrigan/player.html';
   characters[22] = './characters/ritaYoung/player.html';
   characters[23] = './characters/wilsonRichards/player.html';
   let random = Math.round(Math.random() * (characters.length - 1));
   window.location = characters[random];
}

const slideToLeft = (duration) => {
   // duration i ms
   const item = document.querySelector('section#phase div.slidebox');
   item.style.transition = `${duration}ms`;
   item.style.left = '0';
   setTimeout(() => {
      item.style.left = '-100%';
   }, duration * 2);
   setTimeout(() => {
      item.style.transition = '';
      item.style.left = '100%';
   }, duration * 3);
};

const updatePhase = (type) => {
   slideToLeft(500);
   setTimeout(() => {
      const phases = {
         first: 'Utrzymanie',
         second: 'Ruch',
         third: 'Spotkania w Arkham',
         fourth: 'Spotkania w Innych Światach',
         fifth: 'Mity',
      };
      const phaseName = document.querySelector('section#phase>div.current>p');
      const phaseNumber = document.querySelector('section#phase>div.current>div.bigbox');
      const nextPhaseName = document.querySelector('section#phase>div.next>p');
      const nextPhaseNumber = document.querySelector('section#phase>div.next>div.box');

      if (type === 'next') currentPhase++;
      else if (type === 'previous') currentPhase--;
      else currentPhase = 0;

      if (currentPhase === 5) currentPhase = 0;
      else if (currentPhase === -1) currentPhase = 4;

      if (currentPhase === 0) {
         phaseName.textContent = phases.first;
         phaseNumber.textContent = 'I';
         nextPhaseName.textContent = phases.second;
         nextPhaseNumber.textContent = 'II';
      } else if (currentPhase === 1) {
         phaseName.textContent = phases.second;
         phaseNumber.textContent = 'II';
         nextPhaseName.textContent = phases.third;
         nextPhaseNumber.textContent = 'III';
      } else if (currentPhase === 2) {
         phaseName.textContent = phases.third;
         phaseNumber.textContent = 'III';
         nextPhaseName.textContent = phases.fourth;
         nextPhaseNumber.textContent = 'IV';
      } else if (currentPhase === 3) {
         phaseName.textContent = phases.fourth;
         phaseNumber.textContent = 'IV';
         nextPhaseName.textContent = phases.fifth;
         nextPhaseNumber.textContent = 'V';
      } else {
         phaseName.textContent = phases.fifth;
         phaseNumber.textContent = 'V';
         nextPhaseName.textContent = phases.first;
         nextPhaseNumber.textContent = 'I';
      }
   }, 500);
};

const adminPanelToggle = () => {
   previousPhaseButton.classList.toggle('shown');
   nextPhaseButton.classList.toggle('shown');
   resetPhaseButton.classList.toggle('shown');
};

adminSwitch.addEventListener('input', adminPanelToggle);

previousPhaseButton.addEventListener('click', function () {
   updatePhase('previous');
   this.querySelector('i').style.transform = 'translateX(-200%)';
   setTimeout(() => {
      this.querySelector('i').style.transition = 'none';
      this.querySelector('i').style.transform = 'translateX(200%)';
   }, 250);
   setTimeout(() => {
      this.querySelector('i').style.transition = '.5s';
      this.querySelector('i').style.transform = 'translateX(0)';
   }, 500);
});

nextPhaseButton.addEventListener('click', function () {
   updatePhase('next');
   this.querySelector('i').style.transform = 'translateX(200%)';
   setTimeout(() => {
      this.querySelector('i').style.transition = 'none';
      this.querySelector('i').style.transform = 'translateX(-200%)';
   }, 250);
   setTimeout(() => {
      this.querySelector('i').style.transition = '.5s';
      this.querySelector('i').style.transform = 'translateX(0)';
   }, 500);
});

resetPhaseButton.addEventListener('click', function () {
   updatePhase('reset');
   this.querySelector('i').style.transform = 'rotate(360deg)';
   setTimeout(() => {
      this.querySelector('i').style.transition = 'none';
      this.querySelector('i').style.transform = 'rotate(0)';
   }, 500);
   setTimeout(() => {
      this.querySelector('i').style.transition = '.5s';
   }, 550);
});
