let sanityValueMax;
let enduranceValueMax;

const chosenCharacter = document.cookie
   .split('; ')
   .find((row) => row.startsWith('character='))
   .split('=')[1];

const fillCharacter = (character) => {
   const lore = document.querySelector('aside');
   const profession = document.querySelector('main#player>h5');
   const photo = document.querySelector('main#player>img');
   const name = document.querySelector('main#player>h1');
   const startingPosition = document.querySelector('main#player>table>tbody>tr:nth-of-type(1)>td');
   const equipment = document.querySelector('main#player>table>tbody>tr:nth-of-type(2)>td>ul');
   const randomEquipment = document.querySelector('main#player>table>tbody>tr:nth-of-type(3)>td>ul');
   const skills = document.querySelector('main#player>section#skills');
   const sanity = document.querySelector('main#player>div.sanity>div.value');
   const endurance = document.querySelector('main#player>div.endurance>div.value');
   const speed = document.querySelector('main#player div.speed');
   const sneak = document.querySelector('main#player div.sneak');
   const prowess = document.querySelector('main#player div.prowess');
   const will = document.querySelector('main#player div.will');
   const knowledge = document.querySelector('main#player div.knowledge');
   const luck = document.querySelector('main#player div.luck');
   const concentration = document.querySelector('main#player p.concentration>span');

   document.title = `${character.name} - character`;
   character.lore.forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = text;
      lore.append(paragraph);
   });
   profession.innerHTML = character.profession;
   photo.src = character.photo;
   if (character.expansion == 'dunwichHorror')
      photo.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--dunwichHorror');
   name.innerHTML = character.name;
   startingPosition.innerHTML = character.startingPosition;
   character.equipment.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item;
      equipment.appendChild(li);
   });
   character.randomEquipment.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item;
      randomEquipment.appendChild(li);
   });
   character.skills.forEach((skill) => {
      const div = document.createElement('div');
      div.innerHTML = `<h4>${skill.name}</h4><p>${skill.description}</p>${
         skill.postscriptum != undefined ? '<p class="postscriptum">' + skill.postscriptum + '</p>' : ''
      }`;
      skills.appendChild(div);
   });
   sanity.innerHTML = character.sanity;
   sanityValueMax = character.sanity;
   endurance.innerHTML = character.endurance;
   enduranceValueMax = character.endurance;
   character.speed.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      speed.appendChild(paragraph);
   });
   character.sneak.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      sneak.appendChild(paragraph);
   });
   character.prowess.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      prowess.appendChild(paragraph);
   });
   character.will.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      will.appendChild(paragraph);
   });
   character.knowledge.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      knowledge.appendChild(paragraph);
   });
   character.luck.forEach((value) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = value;
      luck.appendChild(paragraph);
   });
   concentration.innerHTML = character.concentration;
};

const loadCharacter = () => {
   const requestURL = `./characters/${chosenCharacter}.json`;
   const request = new XMLHttpRequest();
   request.open('GET', requestURL);
   request.responseType = 'json';
   request.send();
   request.onload = () => {
      const character = request.response;
      while (character === null) alert(`Can't find ${chosenCharacter}.json!`);
      fillCharacter(character);
      preloaderFadeOut(500, 250);
   };
};

loadCharacter();

const loreButton = document.querySelector('button#loreClick');

function loreToggle() {
   loreButton.classList.toggle('clicked');
   if (loreButton.classList.contains('clicked')) navButton.style.transform = 'translateX(-150%)';
   else navButton.style.transform = 'initial';
}

loreButton.addEventListener('click', loreToggle);

const sanityMinus = document.querySelector('div.sanity>div.minus');
const sanityPlus = document.querySelector('div.sanity>div.plus');
const sanityValue = document.querySelector('div.sanity>div.value');

function sanityValueMinus() {
   let value = parseInt(sanityValue.textContent);
   value <= 0 ? (value = 0) : value--;
   sanityValue.textContent = value;
   if (sanityValue.textContent == sanityValueMax) {
      sanityValue.style.color = 'rgb(0, 100, 170)';
      sanityValue.style.fontWeight = '700';
   } else if (sanityValue.textContent < sanityValueMax) {
      sanityValue.style.fontWeight = '300';
   } else {
      sanityValue.style.color = '#000';
      sanityValue.style.fontWeight = '700';
   }
}
sanityMinus.addEventListener('click', sanityValueMinus);

function sanityValuePlus() {
   let value = parseInt(sanityValue.textContent);
   value >= 99 ? (value = 99) : value++;
   sanityValue.textContent = value;
   if (sanityValue.textContent == sanityValueMax) {
      sanityValue.style.color = 'rgb(0, 100, 170)';
      sanityValue.style.fontWeight = '700';
   } else if (sanityValue.textContent < sanityValueMax) {
      sanityValue.style.fontWeight = '300';
   } else {
      sanityValue.style.color = '#000';
      sanityValue.style.fontWeight = '700';
   }
}
sanityPlus.addEventListener('click', sanityValuePlus);

const enduranceMinus = document.querySelector('div.endurance>div.minus');
const endurancePlus = document.querySelector('div.endurance>div.plus');
const enduranceValue = document.querySelector('div.endurance>div.value');

function enduranceValueMinus() {
   let value = parseInt(enduranceValue.textContent);
   value <= 0 ? (value = 0) : value--;
   enduranceValue.textContent = value;
   if (enduranceValue.textContent == enduranceValueMax) {
      enduranceValue.style.color = 'rgb(175,30,0)';
      enduranceValue.style.fontWeight = '700';
   } else if (enduranceValue.textContent < enduranceValueMax) {
      enduranceValue.style.fontWeight = '300';
   } else {
      enduranceValue.style.color = '#000';
      enduranceValue.style.fontWeight = '700';
   }
}
enduranceMinus.addEventListener('click', enduranceValueMinus);

function enduranceValuePlus() {
   let value = parseInt(enduranceValue.textContent);
   value >= 99 ? (value = 99) : value++;
   enduranceValue.textContent = value;
   if (enduranceValue.textContent == enduranceValueMax) {
      enduranceValue.style.color = 'rgb(175,30,0)';
      enduranceValue.style.fontWeight = '700';
   } else if (enduranceValue.textContent < enduranceValueMax) {
      enduranceValue.style.fontWeight = '300';
   } else {
      enduranceValue.style.color = '#000';
      enduranceValue.style.fontWeight = '700';
   }
}
endurancePlus.addEventListener('click', enduranceValuePlus);

// Phases
const phaseSection = document.querySelector('section#phase');
const adminSwitch = document.querySelector('nav div#admin > input');
const previousPhaseButton = document.querySelector('button#previousPhase');
const nextPhaseButton = document.querySelector('button#nextPhase');
const resetPhaseButton = document.querySelector('button#resetPhase');

adminSwitch.checked ? (adminSwitch.checked = false) : false;

const adminPanelToggle = () => {
   previousPhaseButton.classList.toggle('shown');
   nextPhaseButton.classList.toggle('shown');
   resetPhaseButton.classList.toggle('shown');
};

adminSwitch.addEventListener('input', adminPanelToggle);

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

let currentPhase;

firebase
   .database()
   .ref('phase')
   .on('value', (snapshot) => {
      currentPhase = snapshot.val();
      updatePhase(currentPhase);
   });

const updatePhase = (value) => {
   let currentPhase = value;
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
      const sliders = document.querySelectorAll('input[type="range"]');

      if (currentPhase === 5) currentPhase = sendFirebaseData('phase', 0);
      else if (currentPhase === -1) sendFirebaseData('phase', 4);

      if (currentPhase === 0) {
         phaseName.textContent = phases.first;
         phaseNumber.textContent = 'I';
         nextPhaseName.textContent = phases.second;
         nextPhaseNumber.textContent = 'II';
         sliders.forEach((slider) => slider.removeAttribute('disabled'));
      } else if (currentPhase === 1) {
         phaseName.textContent = phases.second;
         phaseNumber.textContent = 'II';
         nextPhaseName.textContent = phases.third;
         nextPhaseNumber.textContent = 'III';
         sliders.forEach((slider) => slider.setAttribute('disabled', 'disabled'));
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
         sliders.forEach((slider) => slider.setAttribute('disabled', 'disabled'));
      }
   }, 500);
};

previousPhaseButton.addEventListener('click', function () {
   sendFirebaseData('phase', currentPhase - 1);
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
   sendFirebaseData('phase', currentPhase + 1);
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
   sendFirebaseData('phase', 0);
   this.querySelector('i').style.transform = 'rotate(360deg)';
   setTimeout(() => {
      this.querySelector('i').style.transition = 'none';
      this.querySelector('i').style.transform = 'rotate(0)';
   }, 500);
   setTimeout(() => {
      this.querySelector('i').style.transition = '.5s';
   }, 550);
});
