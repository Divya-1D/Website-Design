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
        document.write(objects[i].Age)
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


//5.
for (let i = 1; i < 6;i++) {
  setTimeout( () => {
    console.log(`${i}`)
  }, i * 2000)
}