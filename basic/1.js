// let arr=[1,2,3];
// let arr2=arr;
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

// stack operator
// let arr2=[...arr];
// arr2.push(4);console.log(arr);console.log(arr2);
// let obj={
//     name:"udai",
//     add:{

//     }
// }
// let arr=["Hi","l","ar","ab"];
// let[a,b,c,d,extra='hlo']=arr;
// console.log(a,b,c,d,extra);
let arr=[1,2,3,4,5];
let narr=[];
// narr=arr.map((value,idx)=>{
//     return value*2;
// }) map uses
narr=arr.filter(function(value){
    return value>2;
})
console.log(arr);
console.log(narr);