// function displaySecondMessage() {

// }

// function displayMessage(displaySecondMessage) {

//     //let promiseObj = new Promise()
    
//     //call another
//     displaySecondMessage();
// }

// displayMessage(displaySecondMessage);




// TOPIC : Promisifying
let promiseObj = new Promise((resolve,reject) => {
   // Production code - takes sometime

   //consumer called.. that is either resolve or reject
   resolve('Sending Food..'); //fullfilled promise state

   //if rejected:
   reject('err..'); //error state
})

promiseObj.then(
    value => {
       console.log('success response: ',value)
       displayMessage(value);
    }  
    ,
    error => console.log(error)
)

function displayMessage(value) {
    console.log('Arrange the Party : ', value)
}
