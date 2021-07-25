const characters = [];
characters[0] = 'amandaSharpe';
characters[1] = 'bobJenkins';
characters[2] = 'carolynFern';
characters[3] = 'darrellSimmons';
characters[4] = 'dexterDrake';
characters[5] = 'gloriaGoldberg';
characters[6] = 'harveyWalters';
characters[7] = 'jennyBarnes';
characters[8] = 'joeDiamond';
characters[9] = 'kateWinthrop';
characters[10] = 'mandyThompson';
characters[11] = 'michaelMcglen';
characters[12] = 'montereyJack';
characters[13] = 'peteWloczega';
characters[14] = 'siostraMary';
characters[15] = 'vincentLee';
// Koszmar z Dunwich
characters[16] = 'dianaStanley';
characters[17] = 'jacquelineFine';
characters[18] = 'jimCulver';
characters[19] = 'leoAnderson';
characters[20] = 'marieLambeau';
characters[21] = 'markHarrigan';
characters[22] = 'ritaYoung';
characters[23] = 'wilsonRichards';

const loadCharacters = () => {
   const commonChars = document.querySelector('main>div.characters');
   const dunwichHorrorChars = document.querySelector('main>div.characters.dunwichHorror');
   characters.forEach((name, index) => {
      const createCharacter = (value) => {
         const character = document.createElement('div');
         character.classList.add('character');
         character.innerHTML = value.name;
         character.style.backgroundImage = `url(${value.photo})`;
         character.addEventListener('click', () => {
            createCookie('character', name);
            window.location = './character.html';
         });
         if (!value.expansion) commonChars.appendChild(character);
         if (value.expansion === 'dunwichHorror') dunwichHorrorChars.appendChild(character);
         index === characters.length - 1 ? preloaderFadeOut(500, 250) : false;
      };
      getCharacter(name).then((value) => createCharacter(value));
   });
};

loadCharacters();

const randomCharacterButton = document.querySelector('button#randomCharacter');

const randomCharacter = () => {
   let random = Math.round(Math.random() * (characters.length - 1));
   createCookie('character', characters[random]);
   window.location = './character.html';
};

randomCharacterButton.addEventListener('click', randomCharacter);
