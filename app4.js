let num=[1,5,6];
let b=num.toString()
console.log(b);
console.log(num.join("_"));

let sum=[10,11,15,45];
console.log(sum.push(47));
console.log(sum);
console.log(sum.length)

const salary=[11,22,45];
delete salary[0];
console.log(salary);
console.log(salary.length)

const even_no=[22,44,66,88];
const odd_no=[11,13,17,19];
let divible_3=[3,6,9,12];
console.log(even_no.concat(odd_no,divible_3))


sort
let num=[11,56,44,66,7];
num.sort()
console.log(num);






let compare=((a,b)=>{
    return a-b;
})

const a=[10,20,70,40,11,6];
a.sort(compare);
console.log(a);



let array="harry";
let ars=Array.from(array);
console.log(ars);



filter foreach map reduce

let arr=[10,20,30,40];
arr.forEach((val)=>{
    console.log(val);
})

//map returns new array

let new_array=arr.map((val)=>{
    console.log(val);
    return val+10;
})
console.log(new_array)


//reduce return single value 

let new_key=arr.reduce((first,second)=>{
    return first+second;
},0)
console.log(new_key)


map

let array_map=[10,20,30,40];

 let new_array=array_map.map((val)=>{
    return val*val;
})
console.log(new_array)

let nextarray=array_map.filter((val)=>{
    return val>90;
})
console.log(new_array)

let num=Math.random()*100;

console.log(num);

let guessing_number=parseInt(prompt("enter a number"));
console.log(guessing_number); 

const obj={
    name:"shivam",
    payment_mode:"netbanking",
    salary:25000,
}
console.table(obj)

let age=prompt("enter a age");
age=Number.parseInt(age);
if(age>=18){
    console.log("you are elligible for vote")
}
else{
    console.log("you are not elligible for vote")
}


let s=prompt("enter a no");
s=Number.parseInt(s);
if(s>4){
    location.href="https://www.google.com/";
}


let color=prompt("enter a color");
document.body.style.backgroundColor=color;

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild);
 
const a=document.querySelector("p");
a.innerText="hy it's over right";
console.log(a);

console.log(document.body.childNodes);

let arr=Array.from(document.body.childNodes);
console.log(arr);

let a=document.querySelector(".first");
console.log(a)

const a=document.body.firstChild;
console.log(a);
const b=document.querySelector(".first");
console.log(b.innerText)

const changecolor=()=>{
    document.body.firstElementChild.style.backgroundColor="red"
}
changecolor();

const firstelement=document.querySelectorAll("li");
console.log(firstelement);

const colorchange=()=>{
   const a= document.querySelectorAll("li");
   console.log(a);
   a.style.color="red";
}

colorchange();


const a=document.getElementsByClassName("first")
console.log(a);
a.style.backgroundColor="red";

const prmoise =new Promise(function(resolve,reject){
    let a=true;
    if(!a){
        resolve({
            name:"sujal",
        })
    }
    else{
        reject("data not passed")
    }
}).then(function(user){
    console.log(user)
}).catch(function(error){
    console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/todos/1").then((resolve)=>{
    return resolve.json();
}).then((solved)=>{
    if(solved.id===5){
        console.log("this is correct code")
    }
    else{
        console.log("wrong output")
    }
}).catch((err)=>{
    console.log(err)
})


fetch("https://jsonplaceholder.typicode.com/todos/1").then((resolve)=>{
    return resolve.json()
}).then((data)=>{
    console.log(data.id)
}).catch((err)=>{
    console.log(err);
})


async function apikey(){
    try{
        const apidemo=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const demo=await apidemo.json();
    if(demo.completed===false){
        console.log("right score")
    }
    else{
        console.log("conditon failed")
    }
    }
    catch(err){
        console.log(err)
    }
}
apikey();



let promiseone=new Promise((resolve,reject)=>{
    let color="red";

    if(color==="re"){
        resolve({
            moviename:"hollister",
            daterelease:"11-12-2021"
        })
    }
    reject();
   
}).then((data)=>{
    console.log(data.moviename)
}).catch((error)=>{
    console.log("error")
})


async function demoapiuse(){
    try{
        const api= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const demodata=await api.json();
    demodata.id===5?console.log("resolved"):console.log("content_not resolved")
      
    }
    catch(error){
        console.log(error)
    }
}

demoapiuse();





