// arrow function
sum = (a, b) => {
    return a*b;
}
console.log(sum(2,5));

// restOperator
function add(name, ...args){
    console.log(arguments);
    console.log(`hello ${name}`);
    let add = 0;
    for(let i in args){
        add += args[i];
    }
    console.log(add);
}
add("sorabh", 10, 5)

//speresOperator
function add(name, ...args){
    console.log(arguments);
    console.log(`hello ${name}`);
    let add = 0;
    for(let i in args){
        add += args[i];
    }
    console.log(add);
}
 let arr = [10, 5];
add("sorabh",...arr);

// destructuring array
let user = ["amit", "male", "haridwar", 23];
let [name, gender, city, age] = user;
console.log(name, gender, city, age);
console.log(typeof user);

// destructuring object
let users = {
    name: "sam",
    gender: "male",
    city: "haridwar",
    age: 23
}
let u = {Name, Gender, City, Age} = users;
console.log(u);
console.log(typeof u);

//classes and object
class car{

    msg(){
        console.log("car is running");
    }
}
let a = new car();
console.log(a.msg());

//inheritance
class employee{
    constructor(name){
        console.log("hello " +name);
    }
    working(){
        console.log("all employee's are in working");
    }
}
class maneger extends employee{
}
let x = new maneger("sam");
x.working();

//promises
let Boolean = true;//prompt("enter a boolean value");
let prom = new Promise(function(resolve, reject){
    if(Boolean){
        resolve("your promis request is resolve")
    }else{
        reject("your promis request is rejects");
    }
});
 let onFullFillment = (result) =>{
    console.log(result);
 }
 let onReject = (error) =>{
    console.log(error);
 }
 prom.then(onFullFillment());
 prom.catch(onReject());
console.log(prom);

//Ajex
function loadDate() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', "content/readme.txt", true);
    xhttp.send();  
}







