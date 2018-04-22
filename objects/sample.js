
// var dog = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
// };

// var bark;
// if (dog.weight > 20){
//     bark = "WOOF WOOF";
// } else {
//     bark = "woof woof";
// }
// var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
// console.log(speak);



// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// };

// var cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };

// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000
// };

// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
// };

// function prequal(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// var worthALook = prequal(chevy);

//    if (worthALook) {
//     console.log("You gotta check out this " + chevy.make + " " + chevy.model);
//    } else {
//     console.log("You should really pass on the " + chevy.make + " " + chevy.model);
//    }




// var superSecretFile = {
//     level: "classified",
//     opened: 0,
//     password: 2,
//     contents: "Dr. Eval's next meeting is in Detroit."
// };

// function getSecret(file, secretPassword){
//     file.opened = file.opened + 1;
//     if(secretPassword == file.password){
//         return file.contents;
//     }
//     else {
//         return "Invalid password! No secret for you.";
//     }
// }

// function setSecret (file, secretPassword, secret){
//     if(secretPassword == file.password){
//         file.opened = 0;
//         file.contents = secret;
//     }
// }

// var secret = getSecret(superSecretFile, 2);
// console.log(secret);

// setSecret(superSecretFile, 2, "Dr. Eval's next meeting is in Philadelphia.");
// secret = getSecret(superSecretFile, 2);
// console.log(secret);





// function makeCar() {
//     var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//     var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//     var years = [1955, 1957, 1948, 1954, 1961];
//     var colors = ["red", "blue", "tan", "yellow", "white"];
//     var convertible = [true, false];
//     var rand1 = Math.floor(Math.random() * makes.length);
//     var rand2 = Math.floor(Math.random() * models.length);
//     var rand3 = Math.floor(Math.random() * years.length);
//     var rand4 = Math.floor(Math.random() * colors.length);
//     var rand5 = Math.floor(Math.random() * 5) + 1;
//     var rand6 = Math.floor(Math.random() * 2);
//     var car = {
//         make: makes[rand1],
//         model: models[rand2],
//         year: years[rand3],
//         color: colors[rand4],
//         passengers: rand5,
//         convertible: convertible[rand6],
//         mileage: 0
//     };
//     return car;
// }

// function displayCar(car) {
// console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + " " + car.passengers + " " + car.convertible);
// }

// var carToSell = makeCar();
// displayCar(carToSell);





// var eightBall = {
//     index: 0,
//     advice: ["yes", "no", "maybe", "not a chance"],
//     shake: function(){
//         this.index = this.index + 1;
//         if(this.index >= this.advice.length){
//             this.index = 0;
//         }
//     },
//     look: function(){
//         return this.advice[this.index];
//     }
// };

// eightBall.shake();
// console.log(eightBall.look());

// eightBall.shake();
// console.log(eightBall.look());

// eightBall.shake();
// console.log(eightBall.look());
   