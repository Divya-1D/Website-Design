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

    for (let i = 0; i < objects.length; i++) {
      if (objects[i].Age <= 25) {
        console.log(objects[i].Name)
      }
    }   


//3.
function func(item) {
    return item * 3;
 }
 var arr = [10, 40, 50, 60];
 var newArr = arr.map(func);
 console.log(newArr)


//4.
var myArray = [10 , 40, 50 , 60, 5, 23, 24];

const modulo = myArray.map((num) => num % 2);
console.log(modulo)

//5.
for (let i = 1; i < 6;i++) {
  setTimeout( () => {
    console.log(`${i}`)
  }, i * 2000)
}