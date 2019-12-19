const sanityMinus = document.querySelector('div.sanity>div.minus');
const sanityPlus = document.querySelector('div.sanity>div.plus');
const sanityValue = document.querySelector('div.sanity>div.value');

function sanityValueMinus() {
   let value = parseInt(sanityValue.textContent);
   if (value <= 0) {
      value = 0;
   } else {
      value--;
   }
   sanityValue.textContent = value;
   if (sanityValue.textContent == sanityValueMax) {
      sanityValue.style.color = "rgb(0, 100, 170)";
      sanityValue.style.fontWeight = "700";
   } else if (sanityValue.textContent < sanityValueMax) {
      sanityValue.style.fontWeight = "300";
   } else {
      sanityValue.style.color = "#000";
      sanityValue.style.fontWeight = "700";
   }
}
sanityMinus.addEventListener('click', sanityValueMinus);

function sanityValuePlus() {
   let value = parseInt(sanityValue.textContent);
   if (value >= 99) {
      value = 99;
   } else {
      value++;
   }
   sanityValue.textContent = value;
   if (sanityValue.textContent == sanityValueMax) {
      sanityValue.style.color = "rgb(0, 100, 170)";
      sanityValue.style.fontWeight = "700";
   } else if (sanityValue.textContent < sanityValueMax) {
      sanityValue.style.fontWeight = "300";
   } else {
      sanityValue.style.color = "#000";
      sanityValue.style.fontWeight = "700";
   }
}
sanityPlus.addEventListener('click', sanityValuePlus);

const enduranceMinus = document.querySelector('div.endurance>div.minus');
const endurancePlus = document.querySelector('div.endurance>div.plus');
const enduranceValue = document.querySelector('div.endurance>div.value');

function enduranceValueMinus() {
   let value = parseInt(enduranceValue.textContent);
   if (value <= 0) {
      value = 0;
   } else {
      value--;
   }
   enduranceValue.textContent = value;
   if (enduranceValue.textContent == enduranceValueMax) {
      enduranceValue.style.color = "rgb(175,30,0)";
      enduranceValue.style.fontWeight = "700";
   } else if (enduranceValue.textContent < enduranceValueMax) {
      enduranceValue.style.fontWeight = "300";
   } else {
      enduranceValue.style.color = "#000";
      enduranceValue.style.fontWeight = "700";
   }
}
enduranceMinus.addEventListener('click', enduranceValueMinus);

function enduranceValuePlus() {
   let value = parseInt(enduranceValue.textContent);
   if (value >= 99) {
      value = 99;
   } else {
      value++;
   }
   enduranceValue.textContent = value;
   if (enduranceValue.textContent == enduranceValueMax) {
      enduranceValue.style.color = "rgb(175,30,0)";
      enduranceValue.style.fontWeight = "700";
   } else if (enduranceValue.textContent < enduranceValueMax) {
      enduranceValue.style.fontWeight = "300";
   } else {
      enduranceValue.style.color = "#000";
      enduranceValue.style.fontWeight = "700";
   }
}
endurancePlus.addEventListener('click', enduranceValuePlus);

let sanityValueMax;
let enduranceValueMax;

function valueCheck() {
   sanityValueMax = parseInt(sanityValue.textContent);
   enduranceValueMax = parseInt(enduranceValue.textContent);
}