//udemy section 5 object literals
//#37 objects at a glance
//#38 create an object literal

// let user = {
//     name: 'crystal',
//   //key    value  =  one property of the user object
//     age: 30,
//     email: 'rococode@thenet.co.uk',
//     location: 'timbuctoo',
//     blogs: ['how to eat oranges', 'how to squeeze pips']
// };

//     console.log(user);           
    //console.log(user.name);     //dot notation way to access values

    // user.age = 45;              //overides age property
    //console.log(user.age, user.name, user.blogs);      //dot notation way to access values

//    console.log(user['name']);    //square bracket way to access name property (value)
//     //and that's not all!!!  
//     const key = 'location';         //accessing with a constant sq brackets but not with dot notation
//     console.log(user[key]);         //that would be (user.location)  

//     user ['name'] = ['chun-li']; //finally - overiding a value with sq brackets 
//     console.log(user['name']);

//#39 adding methods

// let user = {
//         name: 'crystal',
//       //key    value  =  one property of the user object
//         age: 30,
//         email: 'rococode@thenet.co.uk',
//         location: 'timbuctoo',
//         blogs: ['how to eat oranges', 'how to squeeze pips'],
//         login: function(){ 
//             console.log('user is logged in');          //add another key and value
//         },
//         logout: function(){ 
//             console.log('user is logged out');          //add another key and value
//         }
//     };

//     user.login();
//     user.logout();

//     user.name = 'mario';
//     // user.name.toUpperCase();   these two lines don't log overidden name to console :(
//     // console.log(user.name);
//     console.log(user.name.toUpperCase());

//#40 and now for 'this' (to help create function to log out blogs!!)

    // let user = {
    //     name: 'crystal',
    //   //key    value  =  one property of the user object
    //     age: 30,
    //     email: 'rococode@thenet.co.uk',
    //     location: 'timbuctoo',
    //     blogs: ['how to eat oranges', 'how to squeeze pips'],
        //login: function(){ 
        // login (){                                      //can use shorthand to retain regular function
        //     console.log('user is logged in');          //add another key and value
        // },
        //logout: function(){ 
        // logout (){                                      //can use shorthand to retain regular function
        //     console.log('user is logged out');          //add another key and value
        // },
        //logblogs: function(){           // check 'this' use with arrow/regular functions and shorthand functions!!
        //logblogs (){                   //do not use arrow function here - why? but use short hand to retain regular function
            //console.log(blogs);       //does not work - enter 'this' !!
            //this.blogs;
            //console.log(this.blogs);    //this declared inside function  finds the user object blogs   
            //                             //and when .blogs added will show, yes, the blogs!   
    //         console.log('This blogger has written these blogs');
    //         this.blogs.forEach(eachBlog => {//now we'll 'just' cycle through each blog (console shows it as an array)  
    //             console.log(eachBlog);
              
    //     })
    // }
    // };   
    // user.login();
    // user.logout();
    // user.logblogs();
    //user.logblogs();        // in conjunction with declaration inside logblogs function above 
                            //displays all user keys and values
    //console.log(this);      //declared in global context and global object created in js is window object

//#41 and now to put objects (literal) in that  array

// const blogs = [                                  //nice demo of objects in an array
//     {title: 'how to eat oranges', likes: 35},    //now add array objects to user object
//     {title: 'how to squeeze pips', likes: 56}
// ]
//     console.log(blogs);

    //  let user = {
    //      name: 'crystal',
    //     age: 30,
    //     email: 'rococode@thenet.co.uk',
    //    location: 'timbuctoo',
    //     blogs: [{title: 'how to eat oranges', likes: 35}, {title: 'how to squeeze pips', likes: 56}],       
    //      login (){                                      //can use shorthand to retain regular function
    //          console.log('user is logged in');          //add another key and value
    //      },
    //      logout (){                                      //can use shorthand to retain regular function
    //         console.log('user is logged out');          //add another key and value
    //      },
    //     logblogs (){                   
         
    //           console.log('This blogger has written these blogs');
    //          this.blogs.forEach(eachBlog => {  
    //         //console.log(eachBlog);
    //         console.log(eachBlog.title, eachBlog.likes);
              
    // })
    // }
    // };

    //  user.login();
    // user.logout();

    // user.logblogs();
    // console.log(this);

//# 42 Math objects

//Math random applied to strings not numbers!!

//function to randomly return Rock or Paper or Scissors
// function computerPlay () {
//     //randomly return Rock or Paper or Scissors
//     const shout = ['rock', 'paper', 'scissors'];
//     const random = Math.floor(Math.random() * shout.length);
    
//     console.log(random, shout[random]);
// }        
//     computerPlay()

//back to js ninja # 42 Math objects

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random but also see above
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

//ch 5 #43 see again -  primitive types and reference types
//stored on the         heap                stack
                                  //but pointer stored on heap!
                                  //therefore both values appear to change 
//ready?
//primitive values
// let scoreOne = 50;           //primitive
// let scoreTwo = scoreOne;     //primitive 
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne = 100;              //primitive
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  

//reference values
// const userOne = {name: "June", likes: 100};     //object userOne created - referencetype
// const userTwo = userOne;                        //object userTwo created - referencetype
// console.log(userOne, userTwo);

// userOne.likes = 500;                            //object value changed - reference type changed
// console.log(userOne, userTwo);
