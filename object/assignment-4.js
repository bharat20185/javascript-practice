/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]
 
    2. Print out "houseForSale" to the terminal
 
    3. Delete the property with the key "built"
 
    4. Change the age of the owner to be 30 inside "houseForSale"
 
    5. Print out the maximum offerPrice
 
    6. Add a new property: "sale price" -> 312000
 
    7. Print out "houseForSale" to the terminal
 
    *This is a challenging exercise - take it slow and step by step
*/

const houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000]
}

console.log('--- 2. Print out "houseForSale" to the terminal ---');
console.log(houseForSale);

console.log('--- 3. Delete the property with the key "built" ---');
delete houseForSale.built;

console.log('--- 4. Change the age of the owner to be 30 inside "houseForSale" ---');
houseForSale.owner.age = 30;

console.log('--- 5. Print out the maximum offerPrice ---');
//console.log(Math.max(...houseForSale.offers));
let maxOffer = 0;
for(let i = 0; i < houseForSale.offers.length; i++) {
    if(houseForSale.offers[i] > maxOffer) {
        maxOffer = houseForSale.offers[i];
    }
}
console.log(maxOffer);

console.log('--- 6. Add a new property: "sale price" -> 312000 ---');
houseForSale['sale price'] = 312000;

console.log('--- 7. Print out "houseForSale" to the terminal ---');
console.log(houseForSale);