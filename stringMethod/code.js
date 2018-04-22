// Take a phone number of the form:
// and write code to accept or reject it.
// To be accepted the number should
// have seven digits, 0 through 9, with
// a dash in the middle.
// “123-4567”


// 1 variantas
// function validate(phoneNumber) {
//     if (phoneNumber.length > 8 ||
//         phoneNumber.length < 7) {
//         return false;
//     }
//     var first = phoneNumber.substring(0,3);
//     var second = phoneNumber.substring(phoneNumber.length - 4);
//     if (isNaN(first) || isNaN(second)) {
//         return false;
//     }
//     if (phoneNumber.length === 8) {
//         return (phoneNumber.charAt(3) === "-");
//     }
//     return true;
// }

// console.log(validate("1234567"));


// 2variantas
// function validate(phoneNumber) {
//     if (phoneNumber.length > 8 ||
//         phoneNumber.length < 7) {
//         return false;
//     }
//     var first = phoneNumber.split("-");
//     if (isNaN(first[0]) || isNaN(first[1])) {
//         return false;
//     }
//     return true;
// }

// console.log(validate("123-4567"));



function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);