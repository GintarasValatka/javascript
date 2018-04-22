// function whatShallWear(temp){
//     if (temp < 60) {
//         console.log("Wear a jacket"); 
//     }
//     else if (temp < 70){
//         console.log("Wear a sweater");
//     }
//     else {
//         console.log("Wear t-shirt");
//     }
// }

// whatShallWear(50);
// whatShallWear(80);
// whatShallWear(60);

// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//     display("clunk");
//     num = num - 1;
//     }
//    }
//    function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//     display("clank");
//     } else if (size == 1) {
//     display("thunk");
//     } else {
//     while (size > 1) {
//     facky = facky * size;
//     size = size - 1;
//     }
//     clunk(facky);
//     }
//    }
//    function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
//    }
//    var clunkCounter = 0;
//    thingamajig(5);
//    console.log(clunkCounter);



// Istikruju del shadow kintamuju nepavoge
// var balance = 10500;
// var cameraOn = true;

// function steal(balance, amount) {
//  cameraOn = false;
//  if (amount < balance) {
//  balance = balance - amount;
//  }
//  return amount;
//  cameraOn = true;
// }

// var amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");




// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var hasBubbleGum = [false, false, false, true]; 
// var i = 0;

// while (i < hasBubbleGum.length){
//     if (hasBubbleGum[i]){
//         console.log(products[i] + " contains bubble gum");
//     }
//     i = i + 1;
// }

// for(var i = 0; i < hasBubbleGum.length; i = i + 1){
//     if (hasBubbleGum[i]){
//         console.log(products[i] + " contains bubble gum");
//     }
// }




var scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
            .33, .31, .25, .29, .27, .22,
            .31, .25, .25, .33, .21, .25,
            .25, .25, .28, .25, .24, .22,
            .20, .25, .30, .25, .24, .25,
            .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores){
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++){
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore){
        highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore){
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++){
        if (highScore == scores[i]){
        bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

function getMostCostEffectiveSolution(scores, costs, highScore){
    var cost = 100;
    var index;
        for(var i = 0; i < scores.length; i++){
            if(scores[i] == highScore){
                if(cost > costs[i]){
                    index = i;
                    cost = costs[i];
                }
            }
        }
        return index; 
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");

