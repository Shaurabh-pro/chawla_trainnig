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
   const inpFile = document.getElementById('inpFile');
   inpFile.addEventListener("change", function(){
    console.log(inpFile.files);
    for(const file of inpFile.files){
        if(file.size > 300000){
            alert(`${file.name} is too big max 30kb`);
        }
    }

   })


