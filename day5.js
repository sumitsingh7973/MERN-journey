// // spread operator 
// const arr = [ 1,2,3];
// const arr2 = [ 4,5,6];
// const merge = [ ...arr,...arr2]
// console.log(merge);

const { useState } = require("react");

// const arr = ["sumit singh", " sumitsingh@email.com" ]
// const details = [ ...arr, "age : 26"]
// console.log(details);
// const students = {
//     name : "sumit singh",
//     email : " sumitsingh@gmail.com"
// }
// const add_moredata = {
//     ...students, age : 20
// }


// const student = {
//     name : " sumit singh",
//     age : 20,
//     rollno : 2429725
// }
// const new_data ={
//     ...student, name: "rahul chaurasiya"
// }
// const { name , rollno} =new_data
// console.log(name);
// console.log(rollno);

const [form , setForm ] = useState({
    email : "",
    number : ""
})
 const handleChange = (e) =>{
    setForm({
        ...form,[e.target.name] : e.target.value
    })
 }

