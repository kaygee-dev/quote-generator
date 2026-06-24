// User Prompts
let clientName = prompt("What is your name?");
let serviceType = prompt("What type of service are you interested in? (Photography, Videography, or Both?)");
let numberOfHours = prompt("How many hours of service do you require?");
let travelRequired = prompt("Is Travel Required? (Yes or No)");

//Declare Variables
let rate;
let total;
let travelCost;
let grandTotal;
let performanceType;

// Prompt type conversion
numberOfHours = Number(numberOfHours);

// Functions created
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

const calculateTotal = function (rate, numberOfHours) {
    total = rate * numberOfHours;
}

const travelFee = function () {
    if (travelRequired === "Yes") {
        travelCost = 250;
    } else if (travelRequired === "No") {
        travelCost = 0;
    }
    return travelCost;
}

const discount = function () {
    if (total >= 3000) {
        appliedDiscount = total * 0.10;
    } else {
        appliedDiscount = 0;
    }
}

const calculateTotal2 = function () {
    return total + travelCost - appliedDiscount;
}

const performance = function () {
    if (total <= 3000) {
        performanceType = "Slow day";
    } else if (total > 3000 && total === 6000) {
        performanceType = "Good day";
    } else if (total > 6000) {
        performanceType = "Excellent day";
    }
}

// Call functions
determineRate();
calculateTotal(rate, numberOfHours);
travelFee();
discount();
grandTotal = calculateTotal2();
performance();

// Log results
console.log("R4MZ MEDIA");
console.log("Client Quotation");
console.log(`Client Name: ${clientName}`);
console.log(`Service: ${serviceType}`);
console.log(`Hours Booked: ${numberOfHours}`);
console.log(`Travel fee: R${travelCost}`)
console.log(`Subtotal: R${total}`);
console.log(`Discount: - R${appliedDiscount}`);
console.log(`grandTotal: R${grandTotal}`);
console.log(`Business performance: ${performanceType}`);



