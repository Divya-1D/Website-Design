function callAfterThreeSeconds() {
    const time = 3;
    // console.log('Called After', time);
    console.log(`Called after : ${time} seconds`);
}

callAfterThreeSeconds();



//handle delay function = setTimeout = higher order function
setTimeout(function(){
    const time = 3;
    console.log(`Call after: ${time} seconds`);
}, 3000);  //Takes in 2 arguments: 1.Callback Function 2.Delay




//Call back without even function name
setTimeout( () => {
    const time1 = 3;
    console.log(`Call after: ${time1} seconds`);
}, 3000);




//call back with function name
console.log('S1')
setTimeout(callAfterThreeSecond = () => {
    const time1 = 5;
    console.log(`Call after: ${time1} seconds`);
}, 5000);

console.log('S2')
function f2() {
    console.log('f2');
}
f2();



//Creating Array
const arrayOfNumber = [10, 20, 30, 40, 50];
let results = [];


for (let i = 0; i < arrayOfNumber.length; i++) {
    results.push(arrayOfNumber[i] * 2);
    //results[] = arrrayOfNumber[0] : 10 * 2
}
console.log(arrayOfNumber);
console.log(results);



//Map Function = .map() : It is a higher order function used on arrays
const result2 = arrayOfNumber.map((element) => { //element points to array-elements
    return element *  2;

})
console.log(`Obtained from map() : ${result2}`);





const result3 = arrayOfNumber.map(element => element * 2)
console.log(`Obtained from map() : ${result3}`)
