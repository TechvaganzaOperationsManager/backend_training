//const name ='abdulah'
//onst age= 30
//console.log(`my name is ${name} and my age is ${age}`)
//const hello =`my name is ${name} and my age is ${age}`
//console.log(hello)
//const s='Hello, world'
//console.log(s.substring(0 , 8))
//const numbers = new Array(1,2,3,4,5,6,7,8,9,10,11,12)
//console.log(numbers)
/*const fruits =['apple', 'banna', 'orange']
fruits.push('strawberry')
fruits.unshift('orange'
console.log(fruits)/*
*/

/*const person ={
    firstname: 'John',
    lastname: 'Doe',
    hobbies: ['music', 'playing instruments' , 'working'],
    address: {
        street:'5',
        country: 'United states'
    }
}

console.log(person.hobbies[2]);*/
/*
const todos = [
{
    id:1,
    text:'what is up',
    iscomplete: true
},

{
    id:2,
    text:'what is up brother us',
    iscomplete: true
},
{
    id:3,
    text:'what is up gand boi',
    iscomplete: false
}

]equal
/*
for(let i = 0; i <todos.length; i++) {
    console.log(todos[i].text);
}*/

//for(let todo of todos){
  //  console.log(todo.iscomplete);
//}

// foreach, map , filter 
/*todos.forEach(function(todo){
  //  console.log(todo.id)
*/

/*const   todotext = todos.map(function(todo){
    return todo.text;
})
console.log(todotext)


const todocompleted = todos.filter(function(todo){
return todo.iscomplete ===true    
}).map(function(todo){
   return todo.text
})
console.log(todocompleted)


const x= 20
if(x===20){
    console.log("x is equal to 20")
}


function addnumber(num1 , num2){
    return (num1+num2)
}
console.log(addnumber(5 , 5))

function person(firstname, lastname, dob){
    this.firstname = firstname
    this.lastname = lastname
    this.dob = dob
}
person=new person('aki', 'qwi', '4-5-3213'
)
console.log(person)


class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    get birthyear() {
        return this.dob.getFullYear();
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const Person1 = new Person('john', 'omer', '2011-04-01');

console.log(Person1.fullname());


const myMap = new Map([[{},'a'],[{},'b']]);


myMap.set({},'c')
console.log(myMap)


function first (){
    console.log(1)
}
function second (){
   setTimeout(() =>{
    console.log(2)
   },100)
}


    function third (){
        console.log(3)}

        first()
        second  ()
        third   ()
        import * as feature from './feature.js'
        const result = feature.multiply(5,6)
        const adddition = feature.add(1,1)
        console.log(result)
        console.log(adddition)



let jasonobj = {
    nmae: 'abdullah',
    channel:' it takes heart to bleed',
    friend: 'deserted',
    food :'poision'

}
console.log(jasonobj)

let myjason = JSON.stringify(jasonobj)
console.log(myjason) 

myjason=myjason.replace('poision', 'love')
console.log(myjason)*/

//const promise = new Promise((resolve, reject) =>{
    //resolve("we did it baby"
    //)
//})

//promise.then ((data) => console.log(data)
//)

// https://jsonplaceholder.typicode.com/todos/1

// EXPECTED OUTPUT 
/* {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
} 


  const promise = new Promise((resolve, reject) =>{
    resolve({userId : '1',
  id : '1',
  title : "delectus aut autem",
  completed : 'false'
  })}
)

  promise.then((data) =>{   
    const user=data
    return fetch('https://jsonplaceholder.typicode.com/todos/1')

  })


const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('this is my data request'),100)
        
    })

    promise.then((res) => {
        console.log(res)
    })
        
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
        console.log(data)}
    )

       async function gettodos() {
            const response = await fetch("https://jsonplaceholder.typicode.com")
        console.log(response)    
        }


            gettodos();
        



            


            function userinfo (name, age, email){
                
                return true;
            }

            
 function information (){
    username = 'abdullha'
    id = '23'
    {
address = 'pakistna '
city ='multan'

        }


    
function Information() {
    const username = 'abdullah';
    const id = '23';
    const address = {
        pata: 'pakistan',
        city: 'multan'
    };

    const { city, pata } = address;
    console.log(city, pata,username);
    console.log(id)
}

Information();




function user_info(name , age , text) {
    if (typeof name !== "string") return"invalid name"
    if (typeof age  !== "number") return"invalid age"
    if ( !text.includes('@') ) return "invalid email"

    else 
    return (`name is ${name}`+`email is ${text}`+`age is ${age}`)

}
console.log(user_info("abdulla", 23, 'abdullah@gmail.com' ))






async function getdata(){
    try {
        
    
   const x =  await fetch ("https://jsonplacehlder.typicode.com/posts");
   const data =  await x.json();
  console.log(data);

  const title = data.map(data=> data.title)
console.log(title);
} catch (error) {
 console.error("error"  );       
}
}
getdata();
*/




// const islibrary = {
// library : 'city',
// book :[
//     {
// title: 'love kills',
// author : 'eran',
// isban : 1,
// isAvaliable : true

// },
// {
//     title: 'james bonds',
//     author : 'mikisa',
//     isban : 2,
//     isAvaliable : true
    
//     },
    
//     {
//         title: 'smartness kills',
//         author : 'eran',
//         isban : 3,
//         isAvaliable : false
        
//         }
// ],


// }
// function addbook(islibrary,book){
//     islibrary.book.push(book);
    // console.log(newbook );
}

//console.log(islibrary.book[2])
// const newbook = {title:`asdas`, author:'sadasdsad',isban:5,isAvaliable:true};
// addbook(islibrary,newbook)

// function checkbook (islibrary , isban)    {
//  const book = islibrary.book.find((b    ) =>
//       b.isban ===  isban);
//         if (book.isAvaliable){
//             console.log("book checked out");
//             book.isAvaliable = false;
//         }
//         else{
//             console.log("book not found");
            
//         }



// }

// checkbook(islibrary, 5)


// function returnbook(islibrary,isban){
//     const book = islibrary.book.find((b)=>b.isban=== isban);
//     if(book.isAvaliable){
//         console.log('book is returned');}
//         else
//         {
//             console.log('book is not returned');
//         }
// }
// returnbook(islibrary,2)



// function titles(islibrary) {
//     const allTitles = islibrary.book.map((book) => book.title);
//     return allTitles;
// }

// const allTitles = titles(islibrary);
// console.log(allTitles)

// function titles(islibrary) {
//     islibrary.book.forEach((book) =>  {
//         console.log(book.ti(tle)
//     })
// }


// function listAvailableBooks(islibrary) {
// const listavalbooks = islibrary.book.filter((book) => book.isAvaliable)
// return listavalbooks;
// }


// const allavailableBooks = listAvailableBooks(islibrary)
// console.log(allavailableBooks)

// function countbookbyauthor(library , author) { 
// const count = islibrary.book.reduce((count, book)=>{
//     if(book.author === author){
//         return count+1;
//     }
//     else {
//         return count;
//     }      
// } ,0)

// return count;
// }       
// console.log( countbookbyauthor(islibrary,'eran~'))


// async function getdata(){
//     try {
        
    
//    const x =  await fetch ("https://jsonplacehlder.typicode.com/posts");
//    const data =  await x.json();
//   console.log(data);

//   const title = data.map(data=> data.title)
// console.log(title);
// } catch (error) {
//  console.error("error"  );       
// }
// }
// getdata();
// */



async function fetchecommerdata() {
    
const ecommer_data= await fetche("https://fakestoreapi.com/products")
const data=await ecommer_data.json()
console.log(data)
}