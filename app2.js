//higher order function 

//defination-aise function jo paremeter mai return kre function ya 

// var arr=[1,2,30];
// arr.forEach((val)=>{
//     console.log(val)
// })


//contructor function


//jab apke pass aise koi bhi muka ho ke appko jaise properties wale about sare elents banane hai us 


// function biscuits(){
//     this.width=13;
//     this.height=14;
//     this.color="red";
    
// }


// var bis1=new biscuits();

// console.log(bis1)


// function circularbtn(color,height){
//     this.width=10;
//     this.color=color;
//     this.height=height;

// }

// let circle1=new circularbtn("red",12);
// console.log(circle1)


//first class function 


// forst  class function

//first class function is that function in which we take parameters as a function
//foreach is first class function


// function abc(s){
    
//       s();
   
// }

// abc(function x(){
//     console.log("sujal")

// })

//iife immediately invoked function expression

//imediately invoke function chala ki kala ,is tareeka se ki hum logo private variable bnana paaye
// let ans=(function(){
//     let sujal="mahendra"
//     return{
//         getter:function(){
//             console.log(sujal)
//         },

//         setter:function(val){
//             sujal=val;
           
//         }
//     }

// })();

// ans.setter("shubam")
// ans.getter()



// prototype
//inherit the property one class acquire the property of another class

// var human={
//     canfly:true,
//     cantalk:true,
//     canwalk:true,
//     hasfourlegs:false,
// }

// var shivayframer={
//     app:true,
//     website:true,
//     animation:true,
// }


// shivayframer.__proto__=human;

// console.log(shivayframer.cantalk)


//this =>this is keyword where we use global also 


// var obj={
//     sujal:function(){
//         console.log(this)//object

//     }
// }


//this valaue 
//global =window
//function=>window
//method=>object


// let btn=document.querySelector("button");

// var v=1;
// btn.addEventListener("click",function(){


//     this.style.color="red";
//     this.style.padding="10px"
   
// })


//call apply bind 


// function abcd(){
//     console.log(this.age)
// }

// var sujal={
//     age:23,
// }

// abcd.call(sujal)



//apply


// function sum(val1,val2,val3){
//     console.log(this.mohan,val1,val2,val3)
// }


// var sujal={
//     mohan:"sujal",
// }


// sum.apply(sujal, [1,2,3,])


//2,3,5,7
// let n=10;
// nextprime:
// for(let i=2;i<=n;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             continue nextprime;
//         }
        
//     }
//     console.log(i)
// }

// for(var i=1; i<=4; i++){
//     console.log("s ".repeat(i));
//  }










