// // spread operator 
// const arr = [ 1,2,3];
// const arr2 = [ 4,5,6];
// const merge = [ ...arr,...arr2]
// console.log(merge);

// const arr = ["sumit singh", " sumitsingh@email.com" ]
// const details = [ ...arr, "age : 26"]
// console.log(details);
const students = {
    name : "sumit singh",
    email : " sumitsingh@gmail.com"
}
const add_moredata = {
    ...students, age : 20
}

