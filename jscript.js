//control flow - for loop

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
//control flow - while loop
    const names= ['bob', 'june', 'kelly', 'shona', 'ben'];  //now add in names array
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

//control flow - do while loop          //enables code block to run even if condition not met! how?
    // let i= 8;                           //try it with different values of i
    // do{
    //     console.log('the value of i is ', i);
    //     i++;
    // }while(i < 5);

//control flow - if statement       if is a conditional boolean statement
// const age= 21;                  //executed once only if true
// if(age > 20){
//     console.log('you are over 20 years of age');
// }
  
// const ninjas= ['bob', 'june', 'kelly', 'shona', 'ben'];
//     if(ninjas.length > 4){
//         console.log("that's a lot of ninjas");
//     }

    const password= 'passingby';
    if(password.length >= 8){
        console.log('that password is long enough');
    }
    
