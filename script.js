

const requestURL = '../../gameInfo.json';
const request = new XMLHttpRequest();
const downloadJson = () => {
   request.open('GET', requestURL);
   request.responseType = 'json';
   request.send();
   request.onload = () => {
      jsonValues = request.response;
      while (jsonValues === null) alert("Can't find gameInfo.json!");
   };
   if (currentPhase != jsonValues.phase) {
      currentPhase = jsonValues.phase;
      updatePhase();
   }
   console.log(`${jsonValues} | ${currentPhase} | ${currentPhase != jsonValues.phase}`);
};
setInterval(downloadJson, 1000);

const uploadJson = (value) => {
   const jsonObject = {
      phases: value,
   };
   const jsonObjectString = JSON.stringify(jsonObject);
   const fs = require('fs');
   fs.writeFile('../../gameInfo.json', jsonObjectString);
};


