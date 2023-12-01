/*
 * Instructions
 * To run code open terminal inside folder and run 'node <output filename.js>'
 * This requires node to be installed and accessible
 */

const useExample = false; // Use input-example if true, input if false
let fs = require("fs");
let inputArray = [];
if (useExample) {
    inputArray = fs
        .readFileSync("./input-example").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean); // Remove empty lines
} else {
    inputArray = fs
        .readFileSync("./input").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean); // Remove empty lines
}

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A
function partA(inputArray) {
    let sum = 0;
    for (const i in inputArray) {
        let rawString = inputArray[i];
        let numString = rawString.replace(/\D/g,'');
        let output = parseInt(numString[0]+numString.slice(-1));
        sum += output;
    }
    return sum;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray) {
    const map = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
    };

    let sum = 0;
    for (const i in inputArray) {
        let string = inputArray[i];
        
        // Create array of object determining first and last position of each element in the map
        let arr = []
        for (const key in map){
            let obj = {};
            let first_position = string.indexOf(key);
            let last_position = string.lastIndexOf(key);
            obj.key = key;
            obj.value = map[key];
            obj.first_position = first_position;
            obj.last_position = last_position;
            arr.push(obj);
        }
        
        // For the first digit remove those not found, and return the value of the first found element
        fdigitarr = arr.filter((ele) => ele.first_position !== -1);
        fdigit = fdigitarr.reduce(function(res, obj){
            return (obj.first_position < res.first_position) ? obj : res;
        });

        // For the last digit remove those not found, and return the value of the last found element
        ldigitarr = arr.filter((ele) => ele.last_position !== -1);
        ldigit = ldigitarr.reduce(function(res, obj){
            return (obj.last_position > res.last_position) ? obj : res;
        });
    
        // Combine digits and add them to the sum
        let firstDigit = fdigit.value;
        let lastDigit = ldigit.value;
        var num = parseInt(("" + firstDigit + lastDigit));
        sum += num;
    }
    return sum;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////