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

  const calcArea = function(radius){
    // let area = 3.14 * radius**2;
    // //console.log(area);
    // return area;             //code can be cleaned up to:
    return area = 3.14 * radius**2;
  };

  // calcArea(5);
  // console.log(area);
  const a = calcArea(5);    //now that area is saved in memory and not just displayed in console
  console.log(a);           //we can use the area in eg a volume function - yeah great!

//udemy section 4 #33 Arrow functions

