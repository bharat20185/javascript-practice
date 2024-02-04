/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]
 
    2. Print out "mexico" to the terminal
 
    3. Change "id" to be 25
 
    4. Add "Honduras" to the list of neighbours to "mexico"
    5. Print out "mexico" to the terminal again
*/

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};

const { id, name, capital, neighbours } = mexico;

console.log(`--- 2. Print out "mexico" to the terminal ---`);
console.log(mexico);

console.log(`--- 3. Change "id" to be 25 ---`);
mexico.id = 25;
console.log(mexico);

console.log(`--- 4. Add "Honduras" to the list of neighbours to "mexico" ---`);
neighbours.push("Honduras");

console.log(`--- 5. Print out "mexico" to the terminal again ---`);
console.log(mexico);
