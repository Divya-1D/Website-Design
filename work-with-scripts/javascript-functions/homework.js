//1.
const sumOfArray = [10, 40, 50, 60];
let result = [];

const initialValue = 0;
const sumWithInitial = sumOfArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);


//2.
let objects = [
    {
    Id: 1,
    Name: "John",
    Age: 25
    },
    {
    Id: 2,
    Name: "Sam",
    Age: 28
    },
    {
    Id: 3,
    Name: "Sara",
    Age: 23
    }
    ]
    
//a.
for (let object in objects) {
    console.log(objects);
}

//b.
// Not Finished yet
//c.


//3.
function func(item) {
    return item * 3;
 }
 var arr = [10, 40, 50, 60];
 var newArr = arr.map(func);
 console.log(newArr)


 //4.
 //Not finished yet

 //5.
 function setDelay(i){
    myVar=setTimeout(function(){
       console.log(i);
       if(i==5){
         clearTimeout(myVar);
         return;
       }
      setDelay(i+1)
    },2000)
}

var i=1; 
setDelay(i);