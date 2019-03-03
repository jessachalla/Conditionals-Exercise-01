alert("This exercie takes place in the console.")

//First part of the exersice
// let actualTemp = 90;
// let desiredTemp = 80;

// if (actualTemp > desiredTemp) {
// console.log("Run A/C");
// }
// else if (actualTemp < desiredTemp) {
// console.log("Run heat");
// }
// else {
// console.log("Standby"); 
// }

//Extended Challenge - Switch Statement
let tempCelsius = 20; //This is the current temp in CELSIUS
let targetUnit = "K"; //This is the unit I want to change the temp to

switch(targetUnit) {
    case "F":
        console.log ((tempCelsius * 9/5 + 32)+ "F");
        break;
    case "K":
        console.log ((tempCelsius + 273.5)+ "K");
        break;
    case "C":
        console.log (tempCelsius + "C");
}