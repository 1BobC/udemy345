// udemy section 4 #30 function declaration and expressions
//function declaration
 //speak();                           //function expression does not hoist for this call!                        
 // greet();                           //function hoisting - capisce!
// function greet(){                  //function that hoists
//     console.log('hello there');
//   }
  
  // function expression  (as oposed to a function declaration) does not hoist
  //but shaun prefers function expressions for clarity of code

  // const speak = function(){           //function expression in a const cannot be changed
  //   console.log('good day!');
  // };        //semi-colon used because this is an expression!! (function expression) goddit!!
  
  //greet();          //calling or invoking the function
  // greet();          //multiple times!!
  // greet();         //function hoisting
  
  //speak();             //can also be called multiples times
  //greet();            //function hoisting
// function greet(){                     //function that hoists
//     console.log('hello there');
//   }

//udemy section 4 #31 arguements and parameters

// const speak = function(){                //function expression
//   console.log("G'day from WA!");
// }
// speak();

// const speak = function(name = 'bob', time = 'night'){               //function expression
//    console.log(`Good ${time} ${name}`); //the order of listing parameters must be the same as
//  }                                                //shown in the declaration speak()
//                                                   //but can be DSPLAYED in the order of your choice
//   console.log(name);    //empty string can only be accessed inside function expression block

//   speak('mario', 'morning');        //the order of parameters must be the same as in the function expression
//   speak();                          //will result in undefined therefor add values to function expression!!

  //udemy section 4 #32 returning values eg not just console log

  // const calcArea = function(radius){
  //   // let area = 3.14 * radius**2;
  //   // //console.log(area);
  //   // return area;             //code can be cleaned up to:
  //   return area = 3.14 * radius**2;
  // };

  // // calcArea(5);
  // // console.log(area);
  // const a = calcArea(5);    //now that area is saved in memory and not just displayed in console
  // console.log(a);           //we can use the area in eg a volume function - yeah great!

//udemy section 4 #33 Arrow functions

// const calcArea = radius => {     //create arrow function (expression!) remove word add arrow and parenthesis
//   return area = 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;  //cleanup extra!! compare with function expression 
//                                               //immedialtely above!!
//BEWARE !! binding with 'this' LOOK for it later!!!
// const a = calcArea(5);    
//   console.log('this area is: ' + a);    

//practice arrow functions    Turn regular function expressions into arrow functions:
//BEWARE !! binding with 'this' LOOK for it later!!! or can be an advantage

// const greet = function()
// {
//   return "Hello, World";
// }

// const greet = () => "Hello, World";   //that's it
// const result = greet();               //these two lines 
// console.log(result);                  //to check it in console

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//   total += products[i] + products[i] * tax;
// }
//   return total;
// }

// //console.log(bill([10, 15, 30], 0.2))
// const result = bill (products = [10, 15, 30], tax = 0.2);    //PS - I did this!!
// console.log(result);

//udemy section 4 #34 functions and methods how to declare

// const name = 'RobertC';

// //function
// const greet = () => 'Hello!'        //(arrow) function declaration created with string 'Hello!'

// let resultOne = greet();
// console.log(resultOne + " " + name);

// //method
// let resultTwo = name.toUpperCase();       //method declaration 'objectName.methodName() 
// console.log(resultOne + " " + resultTwo);

//udemy section 4 #35 callbacks in principle then for each method and callback

// const myFunc = (callBack) => {      //this callback function is called into the 
//   //code to do something            //function below as a value
//   let value = 50;
//   callBack(value);
// };

// //myFunc (function(value){      //regular function change to arrow function, see next line
// myFunc (value => {              //look carefully at the difference!
//   //code to do something
//   console.log(value);           //yes, console shows 50
// })

//now a callback using an array and array method - hold on for the ride!
// let people = ['bob', 'june', 'kelly', 'shona**2', 'finn', 'freya'];

// people.forEach(function(){        //each iteration of this callback function on the array        
//   console.log('iterating now!');       //shows this message
// })

// const logPerson = (person, index) => {          //2 - create callback and log directly
//   console.log(`${index} - Hello ${person}`);
// };
// people.forEach(logPerson);        //mainly put callbacks in directly as this line 

// people.forEach((person, index) => {   //1 - now add values (pararmeters)nto function() and change to arrow function
//   console.log(index, person);             //and log person to console
// });

//Call back functions in ACTION!

const ul = document.querySelector('.people');

const people = ['bob', 'june', 'kelly', 'shona**2', 'finn', 'freya'];

let html = ``;    //needed for creation of html template

//people.forEach(function(person){          //change to arrow function
  people.forEach(person => {                       
 html += `<li style= "color: purple">${person}</li>` //create html template to append each person to html
});
    console.log(html);
    ul.innerHTML = html;    //to display in DOM start with ul from above





