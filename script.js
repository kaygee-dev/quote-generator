let clientName = prompt("What is your name?");
let serviceType = prompt("What type of service are you interested in? (Photography, Videography, or Both?)");
let numberOfHours = prompt("How many hours of service do you require?");
let travelRequired = prompt("Is Travel Required? (Yes or No)");

let photographyRate;
let videographyRate;
let comboRate;

if (serviceType === "Photography") {
    photographyRate = 500; // Price per  hour
} else if (serviceType === "Videography") {
    videographyRate = 800; // Price per hour
} else if (serviceType === "Both") {
    comboRate = 1200 // Price per hour
};

console.log("R4MZ MEDIA");
console.log("Client Quotation");

console.log(`Client Name: ${clientName}`);
console.log(`Service: ${serviceType}`);
console.log(`Hours Booked: ${numberOfHours}`);

numberOfHours = Number(numberOfHours);

let subtotal;

if (serviceType === "Photography") {
    subtotal = numberOfHours * photographyRate;
} else if (serviceType === "Videography") {
    subtotal = numberOfHours * videographyRate;
} else if (serviceType === "Both") {
    subtotal = numberOfHours * comboRate;
}

console.log(`Subtotal: ${subtotal}`);

let travelFee;

if (travelRequired === "Yes") {
    console.log('Travel Fee: R250')
    travelFee = 250;
} else if (travelRequired === "No") {
    console.log('Travel Fee: 0');
    travelFee = 0;
}

let discount;

if (subtotal >= 3000) {
    discount = subtotal * 0.10;
} else {
    discount = 0;
}

console.log(`Final Total: ${subtotal + travelFee - discount}`);



