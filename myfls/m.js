
//  console.log(this);
// const user= {
//     name :"lalchandan",
//     greet: function(){
//         setTimeout(function (){
//           console.log(this.name);
//         },1000)

       
//     }
// };


// user.greet();



// const user = {
//   name: "Manish",
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet();
// const user = {
//   name: "Manish",
//   greet: function () {
//     console.log("greet called"); // 👈 add this

//     setTimeout(function () {
//       console.log("timeout fired"); // 👈 add this
//       console.log(this.name);
//       console.log("name is:", this.name);

//     }, 1000);
//   }
// };

// user.greet();
// console.log(this);

// function fun(){
//     console.log(this);;
// }

// //  console.log(this);;
// fun()

// const user = {
//     value:10,
//     greet: function (){
//            console.log(this.value);
//     }
// }
// user.greet(); // 10

// const user = {
//     value:10,
//     greet:()=>{
//            console.log(this.value);
//     }
// }
// user.greet();   // undefine


// const user = {
//     value:10,
//     greet: function (){
//     return ()=>{
//            console.log(this.value);
//     }
// }
// }
// user.greet()();   // 10



// const user = {
//     value:10,
//     greet:()=>{
//            console.log(this.value);
//     }
// }
// user.greet();   // undefine

// const person = {
//   name: 'Alice',
//   sayName: () => {
//     console.log(this.name);
//   }
// };
// person.sayName();



// const obj = {
//   a:10,
//   x:function(){
//     console.log(this);
//   }
// }

// obj.x();


// const obj = {
//   val : "dedanadan",
//   x:()=>{
//     console.log(this);
//   }
// }
// obj.x();
// const d= obj.x
// d();

// const obj = {
//   x() {
//     console.log(this);
//   }
// };

// obj.x(); // obj

// const obj = {
//   x: () => {
//     console.log(this);
//   }
// };

// obj.x(); // NOT obj

// function outer() {
//   console.log(this);
//   const inner = () => console.log(this);
//   inner();
// }

// outer();
// "use strict"
// function f() { console.log(this); }
// f();          // global / undefined
// obj.f = f;
// obj.f();      // obj

function outer() {
  const inner = function (){  console.log(this);}
  inner();
}

outer() 