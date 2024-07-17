///////////////////////////////
(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })();
////////////////////////////////  
(() =>{
const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.resolve('Third');
const promise4 = Promise.resolve('Fourth');

const runPromises=async () =>{
    const res1 = await Promise.all([promise1, promise2]);
    const res2 = await Promise.all([promise3,promise4])
    return [res1,res2]
}

runPromises()
.then(res=>console.log(res)
 .catch(err=>console.error(err)  ))
 
    
  })();
 ////////////////////////////////////
 (() => {
    let res=arr.pop();
 console.log(arr);
 console.log(res);
  })();

 ///////////////////////////////////
 (() => {
    let arr=[1,2,3,4];
 const res =arr.push(5);
 console.log(arr);
 console.log(res);
  })();
///////////////////////////
(() => {
    var x= 10;
    function one(){
        console.log(x);
        function two(){
            console.log(x);
        }
        two();
        var x=20;    
    }
    one();
})();

///////////////////////////////////////////////////////////////////////
(() => {
    console.log(1 + +"2");
    console.log(1 + "2"); // type cohersion
    console.log(1 + -"2"); //Any symbole except plus does type cohersion in JS
})();
///////////////////////////////////////////////////////////////////
(() => {
    let name="Raamu";
    function getName(){
        console.log(name);
        let name='Salma';
    }
    getName();    
})();
// Reference error. cos varibale should be hoisted in the given function and should give undefined error but since it is let hence it is not hoisted and gives refernce error.
///////////////////////////////////////////////////////////////////
(() => {
    let arr = [1,"",null,10,true,false];
let result=arr.filter(Boolean);   // it will filter all truthy values
console.log(result);
 //Expected output: [1, 10, true]
})();

///////////////////////////////////////////////////////////////////
(() => {
    const animals={};
let dog={emoji:'🐶'}
let cat ={emoji:'🐈'}

animals[dog]={...dog, name:"Mara"}


animals[cat]={...cat, name:"Sally"}
console.log(animals);
// when we use one object as key for other object then then object converts in to a string as mentioned below
//[object Object] {"emoji": "🐈","name": "Sally"}
//Options
// A: {emoji: "🐶", name:"Mara"}
// B: {emoji: "🐈", name:"Sally"}   //Corrent one
// undefined
// Refrence Error
})();
///////////////////////////////////////////////////////////////////
(() => {
    const fruits=['🍌','🍊','🍅'];
    fruits.slice(0,1);  //dosent affect original array but creates a new array
    fruits.splice(0,1)
    fruits.unshift('🍇')

    console.log(fruits);
    // A: ['🍌','🍊','🍅']
    // B: ['🍊','🍅']
    // C: ['🍇','🍊','🍅']   //Correct answer
    // D: ['🍇','🍌','🍊','🍅']
})();

///////////////////////////////////////////////////////////////////
(() => {
    let randomvalue = {name: "Lydia"}
    randomvalue=23

    //false === 'string' ; typeof proide result in string here it will provide srting "number"

    if(!typeof randomvalue==="string"){
        console.log("Not a string");
    }else {
        console.log("Is a string"); // Answer
    }
  })();
///////////////////////////////////////////////////////////////////
(() => {
    function sayHi(){
        return (()=>0)();
    }
    console.log(typeof sayHi());
})();
// returns number because sayhi returns EFFIE and this EFFIE return 0 its typeof is zero
///////////////////////////////////////////////////////////////////
(() => {
    let a =[1,2,3,4];
    for (let i=0;i<a.length;i++){
        if (a[i]===2) break;
        console.log(a[i])
    }
})();
///////////////////////////////////////////////////////////////////
(() => {
    let a=[1,2,3,4];
    a[a.length-1]++;
    console.log(a);
})();
// Answer: [1,2,3,5]
///////////////////////////////////////////////////////////////////
(() => {
    let a =[1,2,3,4,5,6,7,8]
    let b= Array.filter(element=>{
        return element%2===0
    })
})();
// Answer: [2,4,6,8]
///////////////////////////////////////////////////////////////////
(() => {
    const name={
        name:"Lydia",
        'last name': "Crystal"
    }
    
})();
// Get the last name 
// console.log(name['last name']);
///////////////////////////////////////////////////////////////////
(() => {
    
})();
///////////////////////////////////////////////////////////////////
