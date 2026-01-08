// const products = [
//   ['Electronics', 'Laptop', 999],
//   ['Clothing', 'Shirt', 29],
//   ['Electronics', 'Mouse', 25],
//   ['Clothing', 'Pants', 49],
//   ['Electronics', 'Keyboard', 75],
//   ['Clothing', 'Jacket', 89]
// ];

// //output
// // {
// //   Electronics: [ { name, price } ],
// //   Clothing:   [ { name, price } ]
// // }

// const transformed = products.reduce((acc, curr)=>{

//        const dept = curr[0];
//        if(!acc[dept]){
//         acc[dept]=[];
//        }
//        acc[dept].push({name :curr[1] , price:curr[2]})
//   return acc
// }, {})

// for(const dept in transformed){
//     transformed[dept].sort((a, b)=> (a.price - b.price));
// }
// console.log(transformed);


const users = [
  {
    id: 1,
    name: 'Alice',
    courses: [
      { title: 'React', rating: 4.5, completed: true },
      { title: 'Node', rating: 3.8, completed: true },
      { title: 'CSS', rating: 2.2, completed: true }
    ]
  },
  {
    id: 2,
    name: 'Bob',
    courses: [
      { title: 'React', rating: 4.7, completed: true },
      { title: 'Vue', rating: 1.3, completed: false }
    ]
  },
  {
    id: 3,
    name: 'Charlie',
    courses: [
      { title: 'Angular', rating: 4.6, completed: true },
      { title: 'React', rating: 4.8, completed: true },
      { title: 'Node', rating: 4.1, completed: true }
    ]
  }
];

// **Expected Output:**

// [
//   { id: 1, name: 'Alice' },
//   { id: 3, name: 'Charlie' }
// ]


const arr = [];

for(const data of users){
   let courses = data.courses;
    let count =0
   for(const course of courses){
   
    if(course.rating>4.0){
          count ++;
          if(count>=2){
                         arr.push({id:data.id, name:data.name})

          }
    }
   }
}
console.log(arr);