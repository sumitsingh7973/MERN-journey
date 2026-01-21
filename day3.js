// const number = [ 2,3,6,12,18,5]
// const newNumber = number.filter((n => n % 2 === 0))
// console.log("even numbers", newNumber);
// const numbers = [ 1,2,3,4,5,6,7,8,9]
// const newNumbers = numbers.filter(n => n%2 !==0 )
// console.log(newNumbers); //ye filter bilkul real life filter ke jea hi h , is ilter m vo values enter ni kr skti ko statement ya given condition ko satisfy nhi krti 
//ye b same map method jessa h kyuki ye b original array ko nhi cherta balki ek nyi copy bnata h 
//  const students = [
//     {name: "kavya", marks:100},
//     {name:"gunjan", marks:84},
//     {name:"ruhi", marks:80},
//     {name:"rupinder", marks:15},
//     {name:"gourav", marks:20}
//  ]
//  const newStudents = students.filter((student)=>{
//     return student.marks >= 50;
//  })
//  console.log("congrats you guys are passed",newStudents);

// const arr = [ 10,15,20];
// const out = arr.filter((n => n > 15))
// console.log(out);

//array.reduce((accumulator, currentValue) => {
  //return updatedAccumulator;
//}, initialValue);

// const arr = [ 2,4,6,8]
// const newArr = arr.reduce((acc,curr)=>{
//     return acc +curr
// })
// console.log(newArr)
// const arr = [ 2,1,20,5]
// const newArr = arr.reduce((acc , curr)=>{
//     return curr < acc? curr:acc
// },arr[0])
// console.log(newArr);
// const users = [
//     { name : "sumit", age:21},
//     {name : "amit", age : 20},
//     {name : "ananya", age: 22},
//     {name : "kavya", age:6},
//     {name : "karan", age:5}
// ]
// const newUsers = users.filter(user => user.age >= 18 )
// .map(user => user.age)
// .reduce((sum,age)=> sum + age,0);
// console.log(newUsers);
 

//const users = [ 
//     { name : "sumit", age : 20},
//     { name : "ananya", age : 22},
//     { name : "kavya", age : 6},
//     { name : "karan", age : 5}
// ]

//     const newUsers = users.filter(user => user.age >= 18)
//     .map(user => user.age)
//     .reduce((sum , age) => sum + age,0)
//     console.log(newUsers);

// const students = [ 
//     {name : "Ananya-saini", marks: 99.9},
//     {name : " Sumit-singh", marks: 15},
//     {name : "Amit-Singh", marks:85},
//     {name : "Deepak-mishra", marks:20}
// ]

// const newStudents = students.filter((student => student.marks >= 60))
// const passedStudents = newStudents.reduce((acc , student)=>{
//     return acc + student.marks
// },0)
// console.log(passedStudents);

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = arr.map(n => n*5)
// const newTable = arr.map(n => n*18)
// const Arr = arr.map(n => n*25)
// console.log(newArr);
// console.log(newTable);
// console.log(Arr);
