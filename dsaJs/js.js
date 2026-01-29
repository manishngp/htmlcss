const original = {
  name: "MDN",
  details: {
    age: 3,
    dates: [new Date(), new Date()]
  }
};

// Create a deep copy
const clone = structuredClone(original);
console.log(clone == original); 
console.log(clone === original); // false (different objects)
console.log(clone.details.age === original.details.age); // true (primitive value is copied)
console.log(clone.details.dates === original.details.dates); // false (nested objects/arrays are new copies)

// Modifying the clone does not affect the original
clone.details.age = 4;
console.log(original.details.age); // 3
