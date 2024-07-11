{
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
}
 ////////////////////////////////////
 {
 let res=arr.pop();
 console.log(arr);
 console.log(res);
 }
 ///////////////////////////////////let arr=[1,2,3,4];
 {
 let arr=[1,2,3,4];
 const res =arr.push(5);
 console.log(arr);
 console.log(res);
}
///////////////////////////
{
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
}
///////////////////////////////////////////////////////////////////////
{
    console.log(1 + +"2");
    console.log(1 + "2");
    console.log(1 + -"2");
    
}
///////////////////////////////////////////////////////////////////
let name="Raamu";
function getName(){
    console.log(name);
    let name='Salma';
}
getName();
///////////////////////////////////////////////////////////////////
let arr = [1,"",null,10,true,false];
let result=arr.filter(Boolean);   
console.log(result);
 //Expected output: [1, 10, true]
///////////////////////////////////////////////////////////////////
const animals={};
let dog={emoji:'🐶'}
let cat ={emoji:'🐈'}

animals[dog]={...dog, name:"Mara"}
animals[cat]={...cat, name:"Sally"}
console.log(animals);

//Options
// A: {emoji: "🐶", name:"Mara"}
// B: {emoji: "🐈", name:"Sally"}   //Corrent one
// undefined
// Refrence Error


///////////////////////////////////////////////////////////////////
{
    const fruits=['🍌','🍊','🍅'];
    fruits.slice(0,1);
    fruits.splice(0,1)
    fruits.unshift('🍇')

    console.log(fruits);
    // A: ['🍌','🍊','🍅']
    // B: ['🍊','🍅']
    // C: ['🍇','🍊','🍅']   //Correct answer
    // D: ['🍇','🍌','🍊','🍅']
}
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
