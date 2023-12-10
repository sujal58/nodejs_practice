// let str = 12321;

// let str1 = str.toString();
// console.log(str1);
// let str2 = str1.split(" ").reverse().join("");
// console.log(str1);

// checkPalindrome(str1, str2);

// function checkPalindrome(str1, str2) {
//   if (str1 === str2) console.log("Word is palindrome");
//   else console.log("Word isnot palindrome");
// }

// const var1 = "sujal";
// let var2 = 0;

// setTimeout(() => {
//   var2 = 3;
//   console.log(var2);
// }, 2000);

//--------------------promises-----------
let a = 1,
  b = 0;

let pro = new Promise((resolve, reject) => {
  if (b < 0) {
    reject("undefined");
  } else {
    resolve(a / b);
  }
});

pro
  .then((pro) => {
    console.log(pro);
  })
  .catch((value) => {
    console.log(value);
  });

//--------------------cord operation(file)-----------

const fol = require("fs");
//fol.mkdirSync("sujal");

//fol.writeFileSync("sujal/bio.txt", "My name is sujal Pandey.");

//add text behind without replacing
//fol.appendFileSync("sujal/bio.txt", "add vayo hola");
