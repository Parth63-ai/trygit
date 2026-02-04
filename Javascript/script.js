// let obj = {
//     name:"Champ",
//     address:"Delhi",
//     age:7
// }

// console.log(obj.name);
// console.log(obj.address);
// console.log(obj.age);

// obj.age = 8;

// console.log("After updating the age:");
// console.log(obj.age);

let para = document.getElementsByClassName('para');
para[0].innerText = "This is the updated paragraph.";
para[0].style.color = "blue";
console.log(para);



const container = document.querySelector('.container').innerHTML = "<h1>Hello World</h1>";
const container2 = document.querySelector('.container').innerText = "";

console.log(container);
console.log(container2);

const button = document.querySelector('#btn')
button.classList.add('btn');
button.classList.remove('btn');

function message(event)
{
    console.log(event.key)
    alert("Button Clicked!");
}

button.addEventListener('click', function(){
    alert("Button Clicked!");
});

button.removeEventListener('click', message);
   
button.addEventListener('keyup', message);

const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("Form Submitted");
})
 

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const bts = document.querySelector('#bts');

outer.addEventListener('click',()=>{
    console.log("Outer Div Clicked");
},true)

inner.addEventListener('click',()=>{
    console.log("Inner Div Clicked");
},true)

bts.addEventListener('click',(event)=>{
    console.log("Button Clicked");
});


let a =4567
var b =8999

console.log(a)
console.log(b)

function print(){
    var c= 867
    console.log(c)
    console.log("Inside fn")
}

print()

// Call stack
function first(){
    second ();
}
function second(){
    third();
}
function third(){
    console.trace();
}

first();

// function infinite(){
//     infinite();
// }

// infinite();

// console.log(c)
// var c = 345
// let b = 789

// console.log(c)
// console.log(b)


// let total=40;

// function calculate(){
//     let total=100;
//     console.log(total); 
// }
// calculate();




// console.log("First line");
// setTimeout(()=>{
//     console.log("After 2 seconds");
// },2000);
// console.log("Second line");


// setTimeout(()=>{
//     alert("After 5 seconds");
// },5000);


// setTimeout(()=>{
//     console.log("After 2 seconds");
// },2000);

// setInterval(()=>{
//     console.log("Every 3 seconds");
// },3000);

// const timeID = setInterval(()=>{
//     console.log("setTimeout");
// },3000);

// const timoutID = setTimeout(()=>{
//     clearInterval(timeID);
//     console.log("Cleared Interval");
// },10000);

// let num = 1;
// const id = setInterval(()=>{
//     if (num === 10){
//         clearInterval(id);
//     }
//     console.log(num)
//     num+=1;
// },1000);


// console.log("before timeout");
// setTimeout(()=>{
//     console.log("inside timeout");
// },0);
// console.log("after timeout");


// const name = document.querySelector('#name');
// const btm = document.querySelector('.btm');
// const list = document.querySelector('.list');
// btm.addEventListener('click',()=>{
//     if(name.value === ""){
//         alert("Please enter a name");
//         return;
//     }
//     const li = document.createElement('li');
//     const dlt = document.createElement('button');
//     dlt.innerText = "Delete";
//     li.innerText = name.value;
//     dlt.addEventListener('click',()=>{
//         list.removeChild(li);
//     });
//     li.appendChild(dlt);
//     list.appendChild(li);
//     name.value = "";
    
// });
console.log("First line");
setTimeout(()=>{
    console.log("Inside timeout");
},2000);
console.log("Second line");

function print(num){
    setTimeout(()=>{
        console.log("Inside setTimeout");
        num();
    },3000);
    
}

function callback(){
    console.log("Inside callback");
}
print(callback);


console.log("Starting homework...");

setTimeout(() => {
    console.log("Homework completed!");
    console.log("Starting dinner...");

    setTimeout(() => {
        console.log("Dinner done!");
        console.log("Getting ready to go out...");

        setTimeout(() => {
            console.log("Going to the playground!");
        }, 1000); // after dinner
    }, 1500); // dinner time
}, 2000); // homework time


function finishHomework(callback) {
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework done!");
        callback();
    }, 2000);
}

function eatDinner(callback) {
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done!");
        callback();
    }, 1500);
}

function goToPlayground() {
    console.log("Going to the playground!");
}

// Chained in steps, but cleaner
finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});

console.log("Before Promise");
const p = new Promise((resolve, reject) => {
    let done = true;
    setTimeout(() => {
        if (done) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise process completed.");
});
console.log("After Promise");


function dohomework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let done = true;
            if(done){
                console.log("Homework completed!");
                resolve("Homework done!");
            }else{
                reject("Homework not done!");
            }
        }, 3000);
    });
}

function eatdinner(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let done = true;
            if(done){
                console.log("Dinner done!");
                resolve("Dinner done!");
            }else{
                reject("Dinner not done!");
            }
        },2000);
    });
}

function gotoPlayground(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let permission = true;
            if(permission){
                console.log("Going to the playground!");
                resolve("Went to playground!");
            }else{
                reject("Couldn't go to playground!");
            }
        },1000);
    });
}