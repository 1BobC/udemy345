

//Revise function return section 4 #32 Create jscriptC and create own exercises look at rock paper scissors

//udemy section 4 #32 returning values eg not just console log
//function expression to calculate area from any radius value
const calcArea = function(radius) {
  // let area = 3.14 * radius**2;
  // //console.log(area);
  // return area;             //code can be cleaned up to:
  return area = 3.14 * radius ** 2;
};

//function expression to calculate voume from any height value
const calcVol = function (height) {
  return area * height;
}

// calcArea(5)
const a = calcArea(5);    //now that area is saved in memory and not just displayed in console
console.log(a);           //we can use the area in eg a volume function - yeah great!
document.getElementById("bob").innerHTML = "If the radius is 5, the area is: " + a;

//calcVol(10) rad 5 and height 10
const v = calcVol(10);
console.log(v);
document.getElementById("bob1").innerHTML = "If the height is 10, the volume is: " + v;

//calcArea(12)
const b = calcArea(12);
console.log(b);
document.getElementById("bob2").innerHTML = "If the radius is 12, the area is: " + b;

//calcVol(20) rad 12 and height 20
const w = calcVol(20);
console.log(w);
document.getElementById("bob3").innerHTML = "If the height is 20, the volume is: " + w;

//calcArea(18)
const c = calcArea(18);
console.log(c);
document.getElementById("bob4").innerHTML = "If the radius is 18, the area is: " + c;

//calcVol(25) rad 18 and height 25
const x = calcVol(25);
console.log(x);
document.getElementById("bob5").innerHTML = "If the height is 25, the volume is: " + x;



//udemy section 4 #34 functions and methods how to declare
const name = 'RobertC';

//function
const greet = () => 'Hello!'        //(arrow) function declaration created with string 'Hello!'

let resultOne = greet();
console.log(resultOne + " " + name);
document.getElementById("bob5a").innerHTML = resultOne + " " + name;

//method
let resultTwo = name.toUpperCase();       //method declaration 'objectName.methodName() 
console.log(resultOne + " " + resultTwo);
document.getElementById("bob5b").innerHTML = resultOne + " " + resultTwo;

//My try at declaring a function 
const fruit1 = "a big banana";
const fruit2 = "a big orange";
const fruit3 = "a medium sized pear";
const fruit4 = "two apples, any size";

const buy = () => "I would like to buy ";

const sell = function(){
  return "I would like to sell ";
}

const have = () => "Do you have ";

const not = () => "I don't want ";

let resultThree = buy();
console.log(resultThree + fruit1);
document.getElementById("bob6a").innerHTML = resultThree + fruit1;

let resultFour = have();
console.log(resultFour + fruit4);
document.getElementById("bob6b").innerHTML = resultFour + fruit4;

let resultFive = not();
console.log(resultFive + fruit3);
document.getElementById("bob6c").innerHTML = resultFive + fruit3;

let resultSix = sell();
console.log(resultSix + fruit4);
document.getElementById("bob6").innerHTML = resultSix + fruit4;
