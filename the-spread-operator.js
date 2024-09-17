/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1,2,3];
let arr2 =  arr1; //Sont des doublons l'un de l'autre et changent ensemble
arr2.push(4);
console.log("Second array=", arr2);
console.log("First array=", arr1); //How can I had 4 to the 2nd array only

// Copying an array

let arr3 = [4,5,6];
let arr4 = [...arr3] //Spread fonction

arr4.push(7);
console.log("Third array=", arr3);
console.log("Fourth array=", arr4);

// Copying an object
let obj1 = {a:1, b:2, c:3}; //object with pairs, key:value
let obj2 = {...obj1, d:4}; //adding a forth pair
let obj3 = {...obj1, b:7}; //overwriting the second pair
console.log ("First object:", obj1);
console.log ("Second object:", obj2);
console.log ("Third object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y"];
console.log ("Fith array:", arr5);