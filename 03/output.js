/*
 * Instructions
 * To run code open terminal inside folder and run 'node <output filename.js>'
 * This requires node to be installed and accessible
 */

const useExample = true; // Use input-example if true, input if false
let fs = require("fs");
let inputArray = [];
if (useExample) {
    inputArray = fs
        .readFileSync("./input-example").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean) // Remove empty lines
} else {
    inputArray = fs
        .readFileSync("./input").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean) // Remove empty lines
}

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A
function partA(inputArray) {

    let rows = inputArray.length;
    let cols = inputArray[0].length;

    let result = 0;
    for (let i = 0; i < rows; i++) {
        let value = "";
        let obj = {};
        for (let j = 0; j < cols; j++) {
            // Get value
            const element = inputArray[i][j];

            // Check surrounding values as symbole
            let surroundBySym = false;
            let top = checkSym(inputArray, i - 1, j);
            let topright = checkSym(inputArray, i - 1, j + 1);
            let right = checkSym(inputArray, i, j + 1);
            let bottomright = checkSym(inputArray, i + 1, j + 1);
            let bottom = checkSym(inputArray, i + 1, j);
            let bottomleft = checkSym(inputArray, i + 1, j - 1);
            let left = checkSym(inputArray, i, j - 1);
            let topleft = checkSym(inputArray, i - 1, j - 1);
            if (top || topright || right || bottomright || bottom || bottomleft || left || topleft) {
                surroundBySym = true;
            }

            // Determine if current element is a number
            let elementIsNum = Number.isInteger(parseInt(element));
            if (elementIsNum) { // Update value to track number, and object to track if this digit is surrounded by symbol
                value += element;
                let key = i + '-' + j; // Unique key
                obj[key] = surroundBySym;

                // If end of line, end number and check it
                if (right === undefined) {
                    if (value) { // Number had value
                        if (Object.values(obj).indexOf(true) > -1) { // If object contained true a digit was surrounded by num
                            result += parseInt(value); // Add value
                        }
                        value = ""; // Clear value for next iter
                        obj = {}; // Clear obj for next iter
                    }
                }
            } else { // Number ended
                if (value) { // Number had value
                    if (Object.values(obj).indexOf(true) > -1) { // If object contained true a digit was surrounded by num
                        result += parseInt(value); // Add value
                    }
                    value = ""; // Clear value for next iter
                    obj = {}; // Clear obj for next iter
                }
            }
        }
    }
    return result;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray) {
    return 'TBD';
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////

function checkSym(array, i, j) {
    const regexSym = /[^0-9.]/;
    let rows = array.length;
    let cols = array[0].length;
    if ((i >= 0 && i < rows) && (j >= 0 && j < cols)) {
        return regexSym.test(array[i][j]);
    }
    return undefined; // Not valid in the array
}

function checkStar(array, i, j) {
    let rows = array.length;
    let cols = array[0].length;
    if ((i >= 0 && i < rows) && (j >= 0 && j < cols)) {
        if (array[i][j] === "*"){
            return i + ',' + j;
        } else {
            return false;
        }
    }
    return false; // Not valid in the array
}