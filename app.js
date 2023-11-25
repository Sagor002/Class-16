const marks = 85;

if(marks >= 80) {
  console.log("A+");
}else if(marks >= 70) {
  console.log("A");
}else if(marks >= 60) {
  console.log("A-");
}else if(marks >= 50) {
  console.log("B");
}else if(marks >= 40) {
  console.log("C");
}else if(marks >= 33) {
  console.log("D");
}else {
  console.log("F");
}




const marks = 95;

if (marks >= 80) {
  console.log("A+");
}
if (marks >= 70) {
  console.log("A");
}
if (marks >= 60) {
  console.log("A-");
}
if (marks >= 50) {
  console.log("B");
}
if (marks >= 40) {
  console.log("C");
}
if (marks >= 33) {
  console.log("D");
}

const burgerPrice = 280;
const pizzaPrice = 350;
const money = 100;

if (money >= pizzaPrice) {
  console.log("pizza");
}else if (money >= burgerPrice) {
  console.log("burger")
}else{
  console.log("Nothing")
}


const burgerPrice = 280;
const pizzaPrice = 350;
const money = 400;

if (money >= pizzaPrice) {
  console.log("pizza");
}
if (money >= burgerPrice) {
  console.log("burger")
}else{
  console.log("Nothing")
}

type conversion

const num = 100;
// const convertedNum = num.toString();
const convertedNum = String(num);
console.log(typeof convertedNum);

const firstName = "Nezuko";
// string to number
const convertedFirstName = Number(firstName);
console.log(convertedFirstName); 
// NaN not a number
 type coercion
console.log(10 + 10);
console.log(10 + "10");
console.log(10 - "10")
console.log(10 * "10")
console.log(10 / "10")
// console.log("Satouro " + "Gojo")

console.log("5" + "2" - 3 + "1")
// console.log(5 + 2 - 3 + 1)

falsy
false
0
""
null
undefined
NaN

// equality operators
console.log(5 == 5);
console.log(5 == 6);
console.log(5 == "5");
console.log(5 === "5");

boolean logic
AND -- && (fulfill all logics)
OR -- || (fulfill any one logic)
NOT -- !

const age = 20;
const balance = 50000;
const isShTiktoker = false;
const isGovtJob = true;

if((age >= 18 && balance >= 100000) || isGovtJob){
  if(isShTiktoker){
    console.log("Rasel biye korbe na.");
  }else{
    console.log("Rasel biye korbe.");
  }
}

year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

const year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year.`);
}else{
  console.log(`${year} is not leap year.`);
}

switch-case

const marks = 8;

switch (true) {
  case marks >= 80:
    console.log("A+");
    break;
  case marks >= 70:
    console.log("A");
    break;
  case marks >= 60:
    console.log("A-");
    break;
  case marks >= 50:
    console.log("B");
    break;
  case marks >= 40:
    console.log("C");
    break;
  case marks >= 33:
    console.log("D");
    break;
  default:
    console.log("F");

}

const day = "Fri";

switch (true) {
  case day === "Sat":
  case day === "Mon":
  case day === "Wed":
  case day === "Fri":
    console.log("offday");
    break;

  case day === "Sun":
  case day === "Tue":
  case day === "Thu":
    console.log("classday");
    break;

  default:
    console.log("Invalid day");
}

const day = "10";

switch (true) {
  case day === "Sat":
  case day === "Mon":
  case day === "Wed":
  case day === "Fri":
    console.log("off day");
    break;

  case day === "Sun":
  case day === "Tue":
  case day === "Thu":
    console.log("class day");
    break;

  default:
    console.log("Invalid day");
}

ternary operator
const a = 10;
const c = 20;
const sum = a + c;

if (a === 10) {
    const b = 20;
  
    console.log(b);
  }
  statement vs expression
  ternary operator

  const TeamA = 1;
  const TeamB = 2;

  const winner = TeamA > TeamB ? "Team A" : "Team B";
  console.log(winner);

  const number = 23;
  const result = number % 2 ===0 ? "Even" : "odd";
  console.log(result);