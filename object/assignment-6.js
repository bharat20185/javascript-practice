/*
Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
*/

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(" --- 1. Print the object before deleting the property ---");
console.log(student);

console.log(" --- 2. Delete the rollno property from the object ---");
delete student.rollno;

console.log(" --- 3. Print the object after deleting the property ---");
console.log(student);