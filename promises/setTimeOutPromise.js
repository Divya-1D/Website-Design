// //NOTE: Regular Function
// setTimeout( () => {
//     //timeOutDisplay();
// },3000)





let myPromiseObj = new Promise(function(myResolve,myReject) {
    
    //Production code - takes some time
    setTimeout(() => {
        // Calls to a consumer code
        myResolve('I Promised to return back');
    },3000)
})


//Must wait until promise is returned
myPromiseObj.then(function (value) {
    //What to do once a promise is fullfilled - success is here
    timeOutDisplay(value);
},

function() {
    console.log(err);
})


timeOutDisplay = (someValue) => {
    document.getElementById('setTimeOutValue').innerHTML = someValue
}

//timeOutDisplay();