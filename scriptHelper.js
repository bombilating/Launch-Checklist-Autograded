// Write your helper functions here!

 require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   let planetInfo = document.getElementById("missionTarget");
   planetInfo.innerHTML = ` <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">`
   
 }
 
 function validateInput(testInput) {
    if(testInput === "") {
        return 'Empty'
    }
    if(isNaN(testInput)) {
        return 'Not a Number'
    }
    if(typeof Number(testInput) == 'number') {
        return 'Is a Number'
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("Input cannot be empty");
    }
    if(validateInput(pilot) === 'Is a Number') {
        alert("Pilot cannot be a number")
    }
    if(validateInput(copilot) === 'Is a Number') {
        alert("Copilot cannot be a number")
    }
    if(validateInput(fuelLevel) === 'Not a Number') {
        alert("Fuel Level must be a number")
    }
    if(validateInput(cargoLevel) === 'Not a Number') {
        alert("Cargo Level must be a number")
    }
    if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) === 'Is a Number' && validateInput(cargoLevel) === 'Is a Number') {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
    let launchStatus = document.getElementById("launchStatus")
        if(fuelLevel < 10000){
            list.style = 'visibility: visible'
            console.log(fuelLevel)
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
        }
        if(cargoLevel > 10000){
            list.style = 'visibility: visible'
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.style.color = "green"
        }
        
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;