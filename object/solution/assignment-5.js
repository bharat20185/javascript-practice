/*
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
Sample Output: name,sclass,rollno
*/

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(" --- 1. List the properties of a JavaScript object ---");
const studentProperties = Object.keys(student);

// The join() method returns the array as a string.
// It accept a separator as an argument.
console.log(studentProperties.join(','));