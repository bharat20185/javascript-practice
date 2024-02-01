/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]
 
    2. Print out "myPet" to the terminal
 
    3. Add a new property: colour -> "Black"
 
    4. Change "breed" to be "Beagle"
 
    5. Remove "Data" from the list of friends for "myPet"
    6. Print out "myPet" to the terminal again
 
    7. Add "Chip" to the list of friends for "myPet"
 
    8. Print out "myPet" to the terminal again
*/

const myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"]
};

console.log(`--- 2. Print out "myPet" to the terminal ---`);
console.log(myPet);

console.log(`--- 3. Add a new property: colour -> "Black" ---`);
myPet.colour = "Black";
// myPet["colour"] = "Black";

console.log(`--- 4. Change "breed" to be "Beagle" ---`);
myPet.breed = "Beagle";

console.log(`--- 5. Remove "Data" from the list of friends for "myPet" ---`);
myPet.friends.pop();

console.log(`--- 6. Print out "myPet" to the terminal again ---`);
console.log(myPet);

console.log(`--- 7. Add "Chip" to the list of friends for "myPet" ---`);
myPet.friends.push("Chip");

console.log(`--- 8. Print out "myPet" to the terminal again ---`);
console.log(myPet);