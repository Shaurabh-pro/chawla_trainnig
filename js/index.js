/*learn frtch APIs
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => console.log(data));

// post methods
  const data = {
    title: "post title",
    name: "sam",
    userId:2
};
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json",
    },
}).then((res) => res.json())
   .then((result) => console.log(result));*/


    // file upload using java script 
   /*const inpFile = document.getElementById('inpFile');
   inpFile.addEventListener("change", function(){
    console.log(inpFile.files);
    for(const file of inpFile.files){
        if(file.size > 300000){
            alert(`${file.name} is too big max 30kb`);
        }
    }

   })*/

   //rest operator
   /*function sum(name, ...args){
    console.log(arguments);
    document.write(`hello ${name}`)
    let sum = 0;
    for(let i in args)
    sum += args[i];
    document.write(sum + " <br>");
   }
   sum("sam", 20,40)
   sum("amit", 20,4,6)*/

   //spread operator
   /*function sum(name, ...args){
    console.log(arguments);
    document.write(`hello ${name}`)
    let sum = 0;
    for(let i in args)
    sum += args[i];
    document.write(sum + " <br>");
   }
   let arr = [20,40];
   sum("sam", ...arr);*/

   //destructuring array
   /*let users = ["amit", 22, "haridwar",["male", 25000]];
   let [name, age, city,[gender, salary]] = users;
   console.log(name, age, city, gender, salary);*/

   let product =[
    {
        name: "sam",
        price: 6999
    },
    {
        name: "amit",
        price: 8999
    },
    {
        name: "shivam",
        price: 7999
    },


   ];

   console.table(product);



