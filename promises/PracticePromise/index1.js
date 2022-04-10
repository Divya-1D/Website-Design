//1.
let myPromise1 = new Promise(function(myResolve,myReject) {
    let x = 5;

    if (x == 6) {
        myResolve("All Good!");
    } else {
        myReject("Not Good!");
    }
});


myPromise1.then(
    value => {
        console.log(`This is a success response:`, value)
        myDisplay(value);
    },
    error => console.log(`This is a failure response:` ,error)
    
    
);

function myDisplay (value) {
    console.log("Promise maintained")
}

//2.
var add = function(x, y) {
    return new Promise((resolve,reject) => {
        var sum = x + y;
        if (sum) {
            resolve(sum);
        }
        else {
            reject(Error(`No addition!`));
        }
    });
};

add(2, 3).then(
    value => {
        console.log(`My result is : `,value)
        myAnswer(value);
    },
    error => console.log(`Fail`, error)
);

function myAnswer(value){
    console.log("All Good")
}

//3.
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log(`This is ok then  ` + message)
}).catch((message) => {
    console.log(`This is not ok catch  ` + message)
})


//4.
const studentLeft = false
const studentAbsent = false

function doPracticePromise() {
    return new Promise((resolve,reject) => {
        if (studentLeft) {
            reject({
                name:'Student left',
                message: ':(:('
            })
        } else if(studentAbsent) {
            reject({
                name: 'Student is absent',
                message: ':( mention reason'
            })
        } else {
            resolve('Thumbs Up:Good for you :)')
        }
    })
}

doPracticePromise().then((message) => {
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

//5.

function isEven(n) {
      var promise = new Promise(function(resolve, reject) {
          setTimeout(function() {
              if(n%2 == 0) {
                  resolve(n + ' is an even number');
                } else {
                  reject(n + ' is an odd number');
                }
            }, 1500);
        });
         return promise;
}

isEven(13).then(function(response) {
    console.log(response);
}, function(error) {
    console.log(error);
});



