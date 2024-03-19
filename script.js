// Write your JavaScript code here!

window.addEventListener("load", function() {

     let listedPlanets;
     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
     let listedPlanetsResponse = myFetch();
     listedPlanetsResponse.then(function (result) {
         listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
         console.log(listedPlanets);
         let randomPlanet = pickPlanet(listedPlanets)
         console.log(randomPlanet)
         let name = randomPlanet.name
         let diameter = randomPlanet.diameter
         let star = randomPlanet.star
         let distance = randomPlanet.distance
         let moons = randomPlanet.moons
         let imageUrl = randomPlanet.image
         addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
})
    this.window.addEventListener("submit", function() {
        event.preventDefault()
        let list = document.getElementById("faultyItems"); 
        let form = document.querySelector("form");
        let pilot = document.querySelector("input[name=pilotName]").value; 
        let copilot = document.querySelector("input[name=copilotName]").value; 
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value; 
        let cargoLevel = document.querySelector("input[name=cargoMass]").value; 
        console.log(fuelLevel)
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel)
    })
  });