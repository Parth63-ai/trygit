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

