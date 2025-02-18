// console.log(s===undefined)

// const s=55;


// (function (){
//     console.log(s)
//     console.log("vijay");
//     console.log(a);
//     const a=10;
// }())


// console.log(x === undefined); // true
// var x = 3;

// (function () {
//   console.log(x); // undefined
//   var x = "local value";
// })();


/* You can /* nest comments *\/ by escaping slashes */

// const bar=foo
// console.log(bar);

// let s=54;

// function sum(){

//     console.log(s)
// }
// sum();
// console.log(s);


// if (Math.random() < 0.5) {
//     const y = 5;
//     console.log(y);
//   }
  // ReferenceError: y is not defined

  // x is 5

//   console.log(x === undefined); 
//   var x=45;
//   console.log(x === 45); 


// console.log(x === undefined); // true
// var x = 3;

// (function () {
//   console.log(x); // undefined
// //   var x = "local value";
// })();


// var x;
// console.log(x === undefined); // true
// x = 3;

// (function () {
//   var x;
//   console.log(x); // undefined
// })();


// THIS WILL CAUSE AN ERROR
// function m() {
//     console.log("a")
// }
// const f = 5;
// console.log(f)
// console.log(m())

// THIS WILL CAUSE AN ERROR TOO
// function f() {
//   const g = 5;
//   var g;
// }



// const arvind={
//     "shivam":"mohan",
//     virat:"ankit"
// }
//  arvind.virat="sujal"
//  console.log(arvind)


// const MY_ARRAY = ["HTML", "CSS"];
// MY_ARRAY.unshift("fndjnfjkn");
// console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];


// let s=45+(+"45");
// console.log((s))

// let m="45"
// console.log(typeof(+m))


// const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;

// }

// const car = { myCar: "Saturn",
//      getCar: carTypes("Hond"), 
//      special: sales };

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Toyota

// console.log(carTypes("Honda"))


// const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

// console.log(car.manyCars.a); // Jeep
// console.log(car); // Mazda


// const a={
//     mohan:"fndn",
//     arvind
// }
// console.log(a.arvind)

// console.log(Math.trunc(2.9))44


  // var a=54;
  // function sum(num){
  //   var ans=num*num;
  //   return ans;

  // }
  

  // var square1=sum(a);
  // console.log(square1)
  // var square2=sum(4);
  // console.log(square2);



  //  var x=54;
  //  function sum(){
  //   var x=64;
  //   console.log(x);
  //  }
  //  sum();
  //  console.log(x);


  // var x=1;
  // a();
  // b();
  // console.log(x);

  // function a(){
  //   var x=45;
  //   console.log(x)
  // }
  // function b(){
  //   var x=4;
  //   console.log(x)
  // }
  

  // var b=54;
  // console.log(b)

  // function a(){

  //   c();

  //   function c(){
  //     console.log(b)
  //   }
  // }
  // var  b=10;
  // a();



  // function x(){
  //   var a=10;
  //   function b(){
  //     var b=20;
  //     function c(){
  //       console.log(b,a)
  //     }
  //     c();
  //   }
  //   b();
  // }

  // x();


  // function x(){
  //   for(let i=0;i<=5;i++){
  //     setTimeout(
  //       function(){
  //         console.log(i)
  //       },i*1000
  //     )
  //   }
  // }
  // x();


//    function sum(){
//     var a=10;
//     function sub(){
//       console.log(a);
//     }
//     return sub;
//    }


// function x(){
//   for(var i=1;i<=5;i++){
//     setTimeout(function (){
//       console.log(i);
//     },i*3000);
//   }
// //   setTimeout(function (){
// //     console.log(i);
// //   },3000);
// //   console.log("namaste javascript");
// // 
// }

// x();




// function outer(){
//   function inner(){
//     console.log(a)

//   }
//   let a=7;
//   return inner;
// }
// let s=outer()();
// // console.log(s())
// console.log(s)

//function statment 

// function a(){
//   console.log("A")
// }
// //

// let admin,name;
// name="john";
// admin=name;
// console.log(admin)



// let a=prompt("first no");
// if(a>10){
//   alert("adult");
// }
// else{
//   alert("it is not adult" )
// }


// let year =prompt("it condition of leap year");
// if(year==366){
//   alert("leep year")
// }
// else if(year==365){
//   alert("normal year");
// }
// else{
//   alert("not a year")
// }



// let age=prompt("age",18);

// let name=prompt("Name of javascript?")

// if(name=="ecmascript"){
//   alert("right")
// }
// else{
//   alert("wrong")
// }



// let number=prompt("numbers")

// if(number>0){
//   alert(1)
// }
// else if(number<0){
//   alert(-1)
// }
// else{
//   alert(0)
// }

// let login=prompt("name")
// let message=(login=="employee")?"hello":(login=="director")?"greeting":(login=="")?"nologin":'';
// console.log(message);


//or
//true ||true=>true
//true ||false=>true
//true ||false=>true
//false ||false=>false


//and


// console.log(null||2||undefined);
// let begin=prompt("who is there");
// if(begin=="cancel"){
//   console.log("canceled")
// }
// else if(begin=="other"){
//   console.log("i dont know")
// }

// else if(begin=="admin"){
//   let password=prompt("enter the password");
//   if(password=="cancel"){
//     console.log("cancel")
//   }
//   else if(password=="other"){
//     console.log("wrong password")
//   }
//   else if(password=="themaster"){
//     console.log("welcome");
//   }
// }



// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }



// let i=0;
// while(i<3){
//   alert( `number ${i}!` );
//   i++;


// }



// let i=1;
// while(i){

//   let val=prompt("enter a value",0);
//   if(val>100){
//     break;

//   }
//   else{
//     continue;
//   }
// }


// let val=prompt("enter a valaue in string")

// if(val=="edge"){
//   alert("you have got the edge");
 

// }

// else if(val=='chrome'|| val=='Firefox'|| val=='safari'){
//   alert("you correct");

// }

// else{
//   alert("we didnot hope")
// }








  