// let marks = 50
// if (marks >40) {
//     console.log("you are passed");
// }else{
//     console.log("you are fail");
    
// }

//for loop -^-
// const attendence = [ "sumit","amit","sakshi","aman","kavya","jyoti"]
// for(let i = 0; i < attendence.length; i++){
//     console.log(attendence);
// }

// const prices = [ 100,200,300];
// for(let price of prices){
//     console.log(price);
    
// }
// let light = false;
// let bulb = light? "on":"off"
// console.log(bulb);
function nameCaller(){
    const names = ["aman","tillu-badmsh","pink-gunda","raju-hatela"]
    let index=0;
    return function(){
        if(index < names.length){
            console.log(names[index]);
            index++
        }else{
             index= 0
            names[index]
            index++
        }
    }
}
const paji = nameCaller()
paji()
paji()
paji()
paji()
paji()
paji()
paji()
paji()
paji()
paji()