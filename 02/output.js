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

    let redCount = 12;
    let greenCount = 13;
    let blueCount = 14;

    let fobj = {};
    let result = 0;
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index].split(":").pop();
        const set = element.trim().split("; ");
        
        let arr = [];
        for (let index2 = 0; index2 < set.length; index2++) {
            
            const element2 = set[index2];
            const game = element2.trim().split(", ");
            for (let index3 = 0; index3 < game.length; index3++) {
                let obj = {};
                const element = game[index3].split(" ");
                obj.color = element[1];
                obj.count = parseInt(element[0]);
                arr.push(obj);
            }            
        }

        let impossibleGames = arr.filter(function (el){
            if (el.color == 'blue' && el.count > blueCount){
                return el;
            }
            if (el.color == 'red' && el.count > redCount){
                return el;
            }
            if (el.color == 'green' && el.count > greenCount){
                return el;
            }
        });

        if (impossibleGames.length == 0){
            result += parseInt(index) + 1;
        }
    }
    return result;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray) {
    let fobj = {};
    let result = 0;
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index].split(":").pop();
        const set = element.trim().split("; ");
        
        let arr = [];
        for (let index2 = 0; index2 < set.length; index2++) {
            
            const element2 = set[index2];
            const game = element2.trim().split(", ");
            for (let index3 = 0; index3 < game.length; index3++) {
                let obj = {};
                const element = game[index3].split(" ");
                obj.color = element[1];
                obj.count = parseInt(element[0]);
                arr.push(obj);
            }            
        }

        let blue = arr.filter(function (el){
            if (el.color == 'blue'){
                return el;
            }
        });
        let blueMax = blue.reduce(function(prev, current){
            return (prev && prev.count > current.count) ? prev : current
        }).count;

        let green = arr.filter(function (el){
            if (el.color == 'green'){
                return el;
            }
        });
        let greenMax = green.reduce(function(prev, current){
            return (prev && prev.count > current.count) ? prev : current
        }).count;

        let red = arr.filter(function (el){
            if (el.color == 'red'){
                return el;
            }
        });
        let redMax = red.reduce(function(prev, current){
            return (prev && prev.count > current.count) ? prev : current
        }).count;
        result += (redMax*greenMax*blueMax);
    }
    return result;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////

function sumByKey(arr, key, value){
    const map = new Map();
    for(const obj of arr) {
      const currSum = map.get(obj[key]) || 0;
      map.set(obj[key], currSum + obj[value]);
    }
    const res = Array.from(map, ([k, v]) => ({[key]: k, [value]: v}));
    return res;
  }