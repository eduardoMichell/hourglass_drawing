const prompt = require('prompt-sync')({sigint: true});
let n;
do {
    n = prompt("Enter the hourglass size: ");
    if (n < 20) {
        console.log("The size must be greater than or equal to 20");
    }
} while (n < 20);

/**
 * Function that draws the hourglass on Top
 * @param n is the size of hourglass
 * @param character is the character that will be used to draw the hourglass
 */
const calculateHourglassOnTop = (n, character="#") => {
    let hourglass = "";
    let cont = 0;
    let contMax = n;

    console.log("Hourglass with sand on top")
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (cont === j || contMax - 1 === j || j === 0 || j === n - 1 || i === 0 || i === n - 1 || (j > cont && j < contMax)) {
                hourglass += character;
            } else {
                hourglass += " ";
            }
        }
        console.log(hourglass);
        cont++;
        contMax--;
        hourglass = ""
    }
    console.log(`n = ${n}`)
}

/**
 * Function that draws the hourglass on Bottom
 * @param n is the size of hourglass
 * @param character is the character that will be used to draw the hourglass
 */
const calculateHourglassOnBottom = (n, character="#") => {
    let hourglass = "";
    let cont = 0;
    let contMax = n - 1;

    console.log("Hourglass with sand on bottom")
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (cont === j || contMax === j || j === 0 || j === n - 1 || i === 0 || i === n - 1
                || (j < cont && j > contMax)) {
                hourglass += character;
            } else {
                hourglass += " ";
            }
        }
        console.log(hourglass);
        cont++;
        contMax--;
        hourglass = ""
    }
    console.log(`n = ${n}`)
}

calculateHourglassOnTop(n);
console.log("\n")
calculateHourglassOnBottom(n);