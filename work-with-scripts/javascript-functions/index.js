//Function definition/Body
function showMessage(param1) { //Parameters

    console.log('Message from normal function :-> ' + param1);

}

showMessage('Classes Began'); //Function calling statement also arguments can be included



const a = 0;
function showMessage1(param1) { 
    let sum = 10 + param1;
    console.log('Message from normal function :-> ' + param1);
    return sum;

}
const returnedSum = showMessage1(10);
console.log('Inside regular function: ' , returnedSum);


//E6+ has arrow functions, higher order functions(map, filter, reduce), let, const
//Arrow Function
showMessageWithArrow = () => {

    console.log('Message from arrow function');

}

showMessageWithArrow();



showMessageWithArrow1 = (arg1) => {
    let sum1 = 10;
    console.log('Message from arrow1 : ' + arg1);
    return sum1;
}
const result = showMessageWithArrow1('hello');


//used when there is single argument : use of E6
showMessageWithArrow2 = arg2 => arg2;
const result1 = showMessageWithArrow2('Hello');
console.log(result1);


function ShowMess(funct) {
    console.log('Message ');
    funct();
    return 'Value'
}