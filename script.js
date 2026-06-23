let clientName = prompt("What is your name?");
let serviceType = prompt("What type of service are you interested in? (Photography, Videography, or Both?)");
let numberOfHours = prompt("How many hours of service do you require?");
let travelRequired = prompt("Is Travel Required? (Yes or No)");

let rate;

const determineRate = function () {
    if (serviceType === "Photography") {
        rate = 500;
    } else if (serviceType === "Videography") {
        rate = 800;
    } else if (serviceType === "Both") {
        rate = 1200;
    }
    return rate;
}

const rate2 = determineRate()

console.log("R4MZ MEDIA");
console.log("Client Quotation");

console.log(`Client Name: ${clientName}`);
console.log(`Service: ${serviceType}`);
console.log(`Hours Booked: ${numberOfHours}`);

numberOfHours = Number(numberOfHours);

let total;

const calculateTotal = function (rate, numberOfHours) {
    total = rate * numberOfHours;
    console.log(`Subtotal: ${total}`);
}

calculateTotal(rate2, numberOfHours);

let travelCost;

const travelFee = function () {
    if (travelRequired === "Yes") {
        console.log('Travel Fee: R250')
        travelCost = 250;
    } else if (travelRequired === "No") {
        console.log('Travel Fee: 0');
        travelCost = 0;
    }
}

travelFee();

let appliedDiscount;

const discount = function () {
    if (total >= 3000) {
        appliedDiscount = total * 0.10;
    } else {
        appliedDiscount = 0;
    }
}

discount();

const calculateTotal2 = function () {
    if (total >= 3000) {
        console.log(`Final Total: ${total + travelCost - appliedDiscount}`);
    } else {
        console.log(`Final Total: ${total + travelCost}`);
    }
}

calculateTotal2();

console.log('Business performance:');

const performance = function () {
    if (total > 3000) {
        console.log("Slow day");
    } else if (total > 3000 & total == 6000) {
        console.log("Good Day");
    } else if (total > 6000) {
        console.log("Excellent Day");
    }
}

performance();



