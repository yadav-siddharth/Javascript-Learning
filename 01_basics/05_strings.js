const name = "siddharth"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('siddharth-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// substring
const newString = gameName.substring(0, 4)
console.log(newString);
// slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
// trim
console.log(newStringOne.trim());

const url = "https://siddharth.com/siddharth%20choudhary"
// replace
console.log(url.replace('%20', '-'))
// includes
console.log(url.includes('sundar'))
// split
console.log(gameName.split('-'));

// bold
const boldStr = 'siddharth yadav'
console.log(boldStr.bold())

// substr
const SubStr = 'new substring to test'
console.log(SubStr.substr(2,8))