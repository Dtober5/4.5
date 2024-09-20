let car = "Porche";
let owed = 30613.54534;

let carUppercase = car.toUpperCase();

let roundedOwed = owed.toFixed(0);

let suma = "David still owes " + roundedOwed + " on his " + carUppercase;

console.log(suma);

if (owed > 30613) {}

switch (car) {
    case "Porche":
        console.log("David drives a luxury sports car.");
        break;
    case "Toyota":
        console.log("David drives the most reliable car like a 17 Camry like this student would be driving.");
        break;
    default:
        console.log("David drives a blank car.");
}
