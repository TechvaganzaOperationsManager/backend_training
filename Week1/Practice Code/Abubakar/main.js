

//const name = 'john';
//const age = 30;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;


//Concatination
//console.log('My name is ' + name + ' and i am ' + age);

//Template string 
//console.log(`My name is ${name} and i am ${age}`);


//const s ='hello,world,it,code';

//to find length of
//console.log(s.length);

//to get all the values uppercased
//console.log(s.toUpperCase());

//to get the values basis on their index position
//console.log(s.substring(0,4));

//to get the code split in fullname
//console.log(s.split(","));


//to get the code alphabet by alphabet
//console.log(s.split(''));



//Arrays 
//use this to run the array
//const Fruits = ['banana' ,'apple' , 'mango' , 'pineapple'];
//console.log(Fruits);


//use this to know that on which index is our fruit on and it starts from zero.
//console.log(Fruits[2]);



//use this to if we want to add another fruit to your inventory.
// Fruits[4] = 'pears';
// console.log(Fruits);


// if we want to add another fruit and dont know how long the array is it will add this product to the end.
//  Fruits.push('stawberry');
//  console.log(Fruits);

//if we want to add another fruit to first then we use this unshift.
// Fruits.unshift('berries');
// console.log(Fruits);

//when we want to remove the last one we use pop and if want to delete two items then pop two times
//Fruits.pop();
//Fruits.pop();


//to know on which index/position our fruit is.
//console.log( Fruits.indexOf('banana'));



//console.log(Fruits);

// const person =  {
//     firstname: 'Abubaker',
//     lastname: 'Amir',
//     Age: 20,
//     hobbies: ['music' , 'sports' , 'seasons'],
//     address: {
//         street: '50 main st',
//         city: 'Multan',
//         Province: 'punjab'
//     }
// }

//if you want to print something from the array use this method 
//console.log(person.hobbies[1]);


//console.log(person.address.city);


//if you want to object destructing you do this 
// const {firstname, lastname , address:{city}} = person;
// console.log(city);


//if you want to add someting you can do this also

// person.email = 'abubakeramir95@gmail.com';
// console.log(person.email);



// //array of objects
// const todos = [
//     {
//         id:1,
//         text: 'canceled',
//         iscompleted: true
//     },
//     {
        
//         id: 2,
//         text: 'successfully',
//         iscompleted: false
//     },
//     {
        
//         id: 3,
//         text: 'done',
//         iscompleted: true
//     }
// ];

// console.log(todos[2].text);


// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// //for loop
// for (let i=0 ; i<5 ; i++){
//     console.log(`abuaker: ${i}`);
// }

// //while loop

// let i=0;
// while(i<10){
//     console.log(`hi: ${i}`);
//     i++;
// }

//if you want to run array through loops
// for (let i=0 ; i<todos.length ; i++){
//     console.log(todos[i].text);
// }

// for (let todo of todos){
//     console.log(todo.id);
// }

//conditional statements
// const x =18;
// if(x<10){
//     console.log('less')
// }else if(x>15){
//     console.log('okay')
// }
// else{
//     console.log('greater')
// }

//switch cases

// const x=11;
// const color = 'green';

// switch(color){
// case 'red' :
//     console.log('color is red')
//     break;
// case 'blue' :
//     console.log('color is blue')
//     break;
// default :
// console.log ('color is not red or blue')
// break;
// }


//functions

// function addnums(num1=5 , num2=10){
//     return (num1 + num2);
// }
// console.log(addnums(50,50));


// const addnums = (num1=10 , num2 =1) => {
//     return num1 + num2;
// }

// console.log(addnums(12,12));


//------------------------------------------------------------------------------------------------------------------------------------------------------
//object-oriented-programming

// function person (firstname , lastname ,dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     this.getbirthyear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getfullname = function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }       

// const person1 = new person('abubaker' , 'amir' , '2004-09-18');
// const person2 = new person('mary' , 'doe' , '10-10-2000');
// console.log(person1.getbirthyear());
// console.log(person1.getfullname());


// console.log(person2.dob.getFullYear());


// window.alert(1);
// console.warn("don't do this");



// function subject (name , teacher , hours) {
//    this.name = name ;
//    this.teacher= teacher;
//    this.hours =hours ;  
// }
// const subject1 = new subject ('oop' , 'burhan' , '35');
// console.log (subject1);


// const array = [1,2,4,5];
// const mySet = new Set(array);

// console.log(array);


//set is used to remove the duplicates values 
// console.log(mySet);


//convery an set back to an array which contain only unique values
// const uniqueArray = [ ...mySet];

//to add something 
// mySet.add([1,2,3]);
// console.log(mySet);

//to delete something
// mySet.delete(3);
// console.log(mySet);


//to know the size of it
//console.log(mySet.size);

//to know that if it contains this value or not 
//console.log(mySet.has(1));

//console.log(array[3]);


// const myMap = new Map([['name' , 'abubaker'], ['surname' , 'amir']]);
// console.log(myMap);


// const a = {};
// const b = {};

// const myMap = new Map ( [ [{}, 'a'] , [{} , 'b'] ] );
// myMap.set('z' , 'c');
// console.log(myMap);

//const names = ["omer" , "hasnat" , "abdullah"];

// const person = {
//     "name" : "abdullah",
//     "age" : 20 ,
//     "isEmployeed" : true ,
//     "hobbies" : ["sports" , "seasons"]

// }

// fetch("people.json")   
// .then(response => response.json())
// .then(values => values.forEach (value => console.log(value.names)))

// fetch ('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=> response.json())
// .then(data => console.log(data))

// setTimeout(() => {
//     console.log("hello to the world")
// }, 1000);

// setTimeout(() => {
//     console.log("I am hacking your website")
// }, 4000);

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response => console.log(response))
// .then(data => console.log(data))


// function task1(callback){
//     setTimeout(() => {
//         console.log("task 1 completed"); 
//         callback();
//     }, 2000);  
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("task 2 completed"); 
//         callback();
//     }, 1000);  
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("task 3 completed"); 
//         callback();
//     }, 3000);  

// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("task 4 completed");
//         callback(); 
//     }, 1500);  
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log('All tasks Completed');
//             })
//         })
//     })
// })


// function walkdog(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You walk out the dog 🐩")
//         }, 1500);  
//     });
// }

// function cleankitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You Clean the kitchen 🧹")
//          }, 2500);
//     });
// }

// function takeouttrash(){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("You take out the trash 🗑️")
//     }, 500);
//    });
// }
        

// walkdog().then(value => {console.log(value) ; return cleankitchen()})
//          .then(value => {console.log(value) ; return takeouttrash()})
//          .then(value => {console.log(value) ; console.log ("All task completed")})
//          .catch(error=> console.error(error));


         
         
         
//  function walkdog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true ;

//             if (dogwalked) {
//                 resolve("You walk out the dog 🐩")
//             } else {
//                 reject("You didnot walk the dog")    
//             }
//         }, 1500);  
//     });
// }

// function cleankitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchencleand = true;
//             if (kitchencleand) {
//                 resolve("You Clean the kitchen 🧹")
//             } else {
//                 reject("You didnot clean the kitchen")
//             }
            
//          }, 2500);
//     });
// }

// function takeouttrash(){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const takenouttrash = true;
//         if (takenouttrash) {
//             resolve("You take out the trash 🗑")
//         } else {
//             reject("You didnot taken out trash")
//         }
        
//     }, 500);
//    });
// }

// async function dochores() {
//     try {
//         const walkdogresult = await walkdog();
//     console.log(walkdogresult);

//     const cleankitchenresult  = await cleankitchen();
//     console.log (cleankitchenresult);

//     const takeouttrashresult = await takeouttrash();
//     console.log(takeouttrashresult);

//     console.log("Alll chores completed!")
//     } catch (error) {
//         console.error(error);
//     }
// }

// dochores();


// fetch('https://jsonplaceholder.typicode.com/todos/1').then((Data) => {
//     console.log(Data);
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((Data) => {
//     return Data.json
// })
// .then((jsonedData) => {
//     console.log(jsonedData);
// })
// .catch((err) => {
//     console.assert.log(err)
// })

// async function todo() {
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      const data = await response.json()   
//     console.log(response);
//     console.log(1);
//     console.log(data);

// }
// todo();




// async function fetchData() {

//     try {

//         // undefined?.value
//         // undefined ?? ""
//         const PokemonName = document.getElementById("PokemonName")?.value?.toLowerCase();
//         const response = await fetch(`https:pokeapi.co/api/v2/pokemon/${PokemonName ??  "pikachu"}`)

//         if(!response.ok){
//             throw new Error("COuld not get data");
//         }

//         const data =await response.json()
//        console.log(data)
        
//     } 
//     catch (error) {
//         console.error(error);
//     }

// }


//  START Q#3  
// const person = {
//     firstName : 'Abubaker',
//     lastName : 'Amir',
//     email : 'abubakeramir95@gmail.com',
//     contact : 123-3445-65656,
//     address : {
//         country : 'Pakistan',
//         city : 'Multan',
//         zip : 66000,
//         province : 'Punjab'},
//     hobbies : ['sports' , 'seasons']
// }

// const updatedPerson = {
//     ...person, 
//     email : 'omerawan45@gmail.com'
//   };

// const {address:{zip,province}} = person;
// console.log(updatedPerson);
// console.log(person);
// console.log(zip,province);
// END Q3




//START Q#4
// async function  fetchAndProcessTitles(){

//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/posts');

//         if(!response.ok){
//             throw new Error("Network Issue");
//         }

//     const data = await response.json();
//        // console.log(data);
//         const id = data.map(data => data.id);  
//         console.log(id);
//     } 

//     catch (error) {
//         console.error(error);
//     }
// }

// fetchAndProcessTitles();

// async function  fetchAndProcessTitles(){
//     const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
// }

// fetchAndProcessTitles();
//END Q4




//START Q#1
// function formatUserInfo(name, age, email) {

//     if (typeof name !== 'string') return "Invalid name.";
      
//     if (typeof age !== 'number') return "Invalid age";
    
//     if( !email.includes("@")) return "invalid email";
    
//   else 
//   return (`My Name is ${name}`+` and i am ${age} years old. `+ ` This is my Email: ${email}`)    
  
// }

// console.log(formatUserInfo('abubaker' , 20 , 'abubakeramir@gmai.com')); 


// function userinfo(name ,age ,email){

//   if(typeof name !== 'string') return 'Invalid Name';

//   if(typeof age !== 'number') return 'Invalid Age';

//   if(!email.includes('@')) return 'Invalid Email';

//   else
//   return(`My Name is ${name}` + ` and I am ${age} years old` + ` and this is my email:${email}`);
// }

// console.log(userinfo('abubaker' , 20 , 'abubakeramir95@gmail.com'));
//END Q1

//START Q2
// const library = {
//     name: 'Tariqabad Library',
//     books: [
//       { title: 'James Bond',
//         author: 'Tom cruise',
//         isbn: '9780743273565', 
//         isAvailable: true
//      },
//       { title: 'Munna bhai mbbs',
//         author: 'Hasnat', 
//         isbn: '9780451524935',
//         isAvailable: true 
//     },
//       { title: 'Three idiots',
//         author: 'asdasd',
//         isbn: '9780060935467',
//         isAvailable: false 
//       },
//       {
//         title: 'Mr Beam',
//         author: 'Tom cruise',
//         isbn: '9780060935467',
//         isAvailable: false 
//       }
//     ]
//   };

  //   1
  //   function addBook(library ,book){
  //   library.books.push(book);
  //   console.log("Added New Book");
  // }

  //   const newbook = {title: 'Captain America' , author: 'Imrankhan' , isbn: '132336786' , isAvailable: true};
  //   addBook(library , newbook);

  
    //   2
    // function chekoutBook(library, isbn){
    //   const book = library.books.find(khan => book.isbn ===isbn) 
    //   // console.log(books)
    //   if (book) {
    //     book.isAvailable=false;
    //     console.log("Book Checked Out", book);
    //   } else {
    //     console.log("Book is not Found in the library");
    //   }
    // }
    // chekoutBook(library,'9780451524935');

//     3 by isbn
//     function returnBook (library , isbn){
//       const books = library.books.find(book => book.isbn===isbn)
//       //console.log(books)
//       if(books){
//      books. isAvailable=true;
//      console.log("book Returned")
//       }
//     else{
//       console.log('Book not found in the library')
//     }
//     }
//     returnBook(library,'9780743273565');
    
//     by title

//     function returnbook(library,title){
//       const  books =library.books.find(book => book.title==title)
//       if(books){
//       books.isAvailable=true;
//       console.log("Book Returnd")
//       }
//       else{
//         console.log("Book is not Found in the library")
//       }
// }
// returnbook(library,'James Bond');

// 4
// function listAllBookTitles(library) {
//   library.books.forEach(book => console.log(book.title));
// }

//   listAllBookTitles(library);

 
 //5
//  function listallavailablebook (library){
//   library.books
//           .filter(books =>books.isAvailable)
//           .map(books =>console.log(books.title))
                      
// }

// function listallavailablebook(library) {
//   const availableBooks = library.books.filter(book => book.isAvailable);
//   availableBooks.map(book => console.log(book.title))

// }

//listallavailablebook(library);



// function countBooksByAuthor(library , author) {
//   return library.books.reduce((count , book) =>{
//     return book.author === author ? count+1 : count ;
//   } , 0)
// }


// console.log(countBooksByAuthor(library , 'Tom cruise'));




// function countBooksByAuthor(library, author) {
//  return  library.books.reduce((count,book) => {
//    //console.log(book.author ===author  ) 
//     return book.author === author ? count+1 : count;
//   },0)
// }

//  console.log(countBooksByAuthor(library,'Tom cruise'));










