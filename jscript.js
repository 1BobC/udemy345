//control flow - # 19 for loop

    // for(let i= 0; i < 5; i++){     //between curly braces is called a code block - goddit?
    //     console.log('in loop', i);
    // }                               //NO semicolon at the end of a LOOP!
    //     console.log('finished!');

    // const names= ['bob', 'june', 'kelly', 'shona', 'ben'];  //each name/ item - cycle through / iteration
    // for (i = 0; i < names.length; i++){
    //     //console.log(names[i]);                 // console.log expression is built on
    //     let html= `<div>${names[i]}</div>`;
    //     console.log(html);
    // }
//control flow - # 20 while loop
    //const names= ['bob', 'june', 'kelly', 'shona', 'ben'];  //now add in names array
    // let i= 0;                          //whoa - if run with i= 0 and i < 5 only loop would be INFINITE 
    // while( i < 5 ) {                   //and loop INDEFINITELY so take care! i must be incremented!
    //     console.log('in loop', i);
    //     i++;                           // i++ prevents infinite looping!!
    // }
    // let i= 0;
    // while(i < names.length) {
    //     console.log('the names are ', names[i]);  
    //     i++;
    // }

//control flow - #21 do while loop          //enables code block to run even if condition not met! how?
    // let i= 8;                           //try it with different values of i
    // do{
    //     console.log('the value of i is ', i);
    //     i++;
    // }while(i < 5);

//control flow - # 22 if statement       if is a conditional boolean statement
// const age= 21;                  //executed once only if true
// if(age > 20){
//     console.log('you are over 20 years of age');
// }
  
// const ninjas= ['bob', 'june', 'kelly', 'shona', 'ben'];
//     if(ninjas.length > 4){
//         console.log("that's a lot of ninjas");
//     }

    // const password= 'passingby';
    // if(password.length >= 8){
    //     console.log('that password is long enough');
    // }

//control flow # 23 else & else if           the whole deal!

    // const password= 'passwor';

    // if(password.length >= 12) {
    //     console.log("that's a mighty fine password");
    // }else if(password.length >= 8) {
    //     console.log("that's a good password");
    // }else {
    //     console.log('we need a longer password');
    // }

//control flow - #24 logical operators  OR || and AND && for multiple check conditions
//Look carefully at logical operators - ambitious or messy??

    //  const password= 'pass@abcdefghijk';

    // if(password.length >= 12 && password.includes('@')) {
    //     console.log("that's a mighty fine password");
    // }else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
    //     console.log("that's a good password");
    // }else {
    //     console.log('we need a longer password');
    // }

//control flow - #25 logical NOT ! operator

    // console.log(!true);                 //v clever - you can do double negs (??)
    // console.log(!false);

    // let user = false    //meaning not logged in
    // if(!user){
    //     console.log('to continue please log in' );
    // }

//control flow back to loops - #26 break and continue

    // const scores = [50, 25, 0, 30, 100, 20, 10];
    // for(let i = 0; i < scores.length; i++){

    //     if(scores[i] === 0){
    //         continue;
    //     }

    //     console.log('your score is: ', scores[i]);
    
    // if(scores[i] === 100){
    //     console.log('congrats - top score!');
    //     break;
    // }
    // }

//control flow #27 switch statements

const grade = 'A';                  //checks for strict equality in case

// switch(grade){
//   case 'A':                         //checks for strict equality in case
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got a B!');
//     break;
//   case 'C':
//     console.log('you got a C!');
//     break;
//   case 'D':
//     console.log('you got a D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

// using if statements
// if(grade === 'A'){
//     console.log('you got an A!');
// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E'){

// } else {

// }

//# 28 variables and block level scope (with variables)
//shows how const and let act differently to var (and how!!)

let age = 30;       //outside blocks age has global scope, any block can use it
//let age = 50;     //cannot do this because it is in the same (global) scope
 let name = 'bob';  //has global scope
if(true){
// age = 40;        //refers to the original declaration (global) and therefore changes 2 blocks AND outside
   let age = 40;    //re defines only within the 2 blocks not outside
   let name = 'shaun';
    //var test = 'hi-di-hi'     //WOW look at how var works - doesn't recognise blocks only order of execution!!
  console.log('inside 1st code block:', age, name, test);
  var test = 'hi-di-hi'     //WOW look at how var works - doesn't recognise blocks only order of execution!!
//}
if(true){
    let age = 50;
    let name = 'june';
    console.log('inside 2nd code block:', age, name, test);
    //var test = 'hi-di-hi' //WOW look at how var works - doesn't recognise blocks only order of execution!!

  }             //NESTED blocks why? experiment with nesting - it's fun!

}               //and now try const instead of let...

console.log('outside code block:', age, name, test);
    
