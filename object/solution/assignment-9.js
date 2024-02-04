/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */

const makePairs = (object) => {
  return Object.entries(object);
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]


// other way to do (not recommended)
const makePairs2 = (object) => {
    const results = [];
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        results.push([key, object[key]]);      
    }
    return results;
}

console.log(makePairs2(data)); // [['a', 1], ['b', 2]]