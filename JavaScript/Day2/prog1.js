// // // // let x = [1, 2, 5, 8, 9];
// // // // console.log(x[x.length-1])

// // // // let y = [2, 6,8, 3];
// // // // let z = [...x,...y];
// // // // console.log(z);

// // // // console.log((Math.random(0,18)*100).toFixed(0));

// // // // let a = [1,2,3,4,5 , "tushar","mushar", "bushar", "sushar"];
// // // // let c = a.map((b)=>{
// // // //     if(typeof b === "string"){
// // // //         return b.toUpperCase();
// // // //     }
// // // //     else{
// // // //         return b*2;
// // // //     }
// // // // })

// // // // console.log(c.sort());
// // // // // output: [ 10, 2, 4, 6, 8, 'BUSHAR', 'MUSHAR', 'SUSHAR', 'TUSHAR' ]
// // // // //Explanation: The default sort() method converts elements to strings and sorts them lexicographically.


// // // // let d = Math.max(...a.filter((b)=> typeof b === "number"));
// // // // console.log(d);

// // // // let obj1 = [{name: "Tushar", age: 26, gender:"Male"}, {name: "Mushar", age: 24, gender:"Female"}];
// // // // console.log(obj1.filter((x)=>{
// // // //     return x.gender === "Male"
// // // // }));

// // // // let last = x.slice(-1)[0];

// // // // let last = x.pop();

// // // // let last = x.at(-1);
// // // // console.log(last);

// // // // let x = [1, 2, 5, 8, 9];
// // // // let y = [2, 6,8, 3];
// // // // let arr1 = [...x];
// // // // let arr2 = [...y]; 

// // // // // let combined =arr1.push(...arr2)
// // // // // console.log(arr1); // arr1 now contains all elements

// // // // let combined = [];
// // // // for (let item of arr1) combined.push(item);
// // // // for (let item of arr2) combined.push(item);

// // // // console.log(combined);
// // // // arr2.unshift(...arr1)
// // // // console.log(arr2); // arr2 now contains all elements

// // // // console.log(Math.round(Math.random()*18));

// // // // let names = ["Tushar", "Mushar", "Bushar", "Sushar"];
// // // // let namess = names.map((name)=>{
// // // //     return name.toUpperCase();
// // // // })
// // // // console.log(namess);

// // // // function fetchtodo() {
// // // //   return fetch('https://jsonplaceholder.typicode.com/todos/1')
// // // //     .then(response => response.json());
// // // // }

// // // // let promise = new Promise((resolve, reject) => {
// // // //   setTimeout(() => {
// // // //     fetchtodo()
// // // //       .then(data => resolve(data))
// // // //       .catch(err => reject(err));
// // // //   }, 3000);
// // // // });

// // // // promise.then(data => {
// // // //   console.log('Dummy API response:', data);
// // // //   console.log('hello');
// // // // }).catch(err => {
// // // //   console.log(err);
// // // // });

// // // // console.log('End of the script');




// // // // let obj2 = {name: "Tushar", age :  19};

// // // // console.log(Object.keys(obj2)); // false if not empty, true if empty


// // // // let arr1 = ["High", "Medium", "Low"];
// // // // // let newArr = arr1.map((x)=>{
// // // // //     // if(x === "High"){
// // // // //     //     return 2;
// // // // //     // }
// // // // //     // else
// // // // //     // if(x === "Medium"){
// // // // //     //     return 1;
// // // // //     // }
// // // // //     // else{
// // // // //     //     return 0;
// // // // //     // }
// // // // // })

// // // // let newArr = arr1.map(x => x === "High" ? 2 : x === "Medium" ? 1 : 0);
// // // // // console.log(newArr);

// // // // let city = ["Pune", "Mumbai", "Banglore", "Chennai"];
// // // // console.log(city.toString()); // Output: Pune,Mumbai,Banglore,Chennai

// // // // function flattenArray(arr) {
// // // //   return arr.flat(Infinity);
// // // // }

// // // // // // Example usage:
// // // // let nested = [1, [2, [3, [4]], 5], 6];
// // // // // console.log(flattenArray(nested)); // Output: [1, 2, 3, 4, 5, 6]


// // // // function flattenArrayRecursive(arr) {
// // // //   return arr.reduce((acc, val) => 
// // // //     Array.isArray(val) ? acc.concat(flattenArrayRecursive(val)) : acc.concat(val), []);
// // // // }

// // // // // Example usage:
// // // // console.log(flattenArrayRecursive(nested)); // Output: [1, 2, 3, 4, 5,


// // // // let mixnumberandstring = [1, "Tushar", 2, "Mushar", 3, "Bushar", 4, "Sushar", {name: "Ramesh"}, {name: "Suresh"}];
// // // // let oonlynumber = mixnumberandstring.filter((x)=>{
// // // //     if(typeof x === "number" || typeof x === "string"){
// // // //         return false;
// // // //     }
// // // //     return true;
// // // // })

// // // // console.log(oonlynumber);

// // // // function isPrime(x){
// // // //     for(let i=2;i<=Math.sqrt(x);i++){
// // // //         if(x%i===0){
// // // //             return false;
// // // //         }
// // // // }
// // // // return true;
// // // // }

// // // // console.log(isPrime(19));

// // // // let duplicatearray = [1,2,3,4,5,1,2,3,4,5];
// // // // let remduplicate = [...new Set(duplicatearray)];
// // // // console.log(remduplicate);

// // // // let obj = {};
// // // // let remduplicate = [];
// // // // for (let item of duplicatearray) {
// // // //   if (!obj[item]) {
// // // //     obj[item] = true;
// // // //     remduplicate.push(item);
// // // //   }
// // // // }
// // // // console.log(obj);


// // // let number = [1,2,3,4,5,6,7,8,9,10];
// // // let sum = number.reduce((acc,val)=>{
// // //     return acc + val;
// // // },90)

// // // console.log(sum);

// // // // let arr= = [1,2,3,4,5,6,7,8,9,10];
// // // let odd = number.filter((x)=>{
// // //     if(x%2==0) return false;
// // //     return true;
// // // })
// // // console.log(odd);
// // // let even = number.filter((x)=>{
// // //     if(x%2!=0) return false;
// // //     return true;
// // // })
// // // console.log(even);

// // // let arr = [5, 2, 9, 1, 7];
// // // let max = arr.reduce((acc, val) => val > acc ? val : acc, arr[0]);
// // // console.log(max); // Output: 9

// // // let filtersumeven = number.filter((x)=>{
// // //     if(x%2==0) return true;
// // //     return false;
// // // }).reduce((acc,val)=>{
// // //     return acc + val;
// // // },0)

// // // console.log(filtersumeven);


// // let obj2 = [{
// //     name: "Mushar",
// //     gender:"Female",
// //     age: 24
// // },{
// //     name: "Bushar",
// //     gender:"Female",
// //     age: 24
// // },{
// //     name: "Tushar", 
// //     gender: "Female"   ,
// //     age: 26
// // },{
// //     name: "Sushar",
// //     gender:"Male",
// //     age: 24 
// // }
// // ]

// // let ans = obj2.reduce((acc,student)=>{
// //     acc[student.gender] = acc[student.gender] || [];
// //     acc[student.gender].push(student);
// //     return acc;
// // })

// // console.log(ans);


const person = {
    /**
     * Logs a greeting message including the name property of the current object.
     * @function
     */
    greet() {
        console.log("Hello from " + this.name + " and age is " + this.age);
        console.log("Gender is " + this.gender);
    }
}

const user = {
    name: "Mushar",
    age: 24,
    gender: "Female"
}

// ===== CALL vs APPLY - KEY DIFFERENCES =====

console.log("=== CALL vs APPLY DIFFERENCES ===");

// 1. PARAMETER PASSING
console.log("\n1. PARAMETER PASSING:");

// Function that accepts multiple parameters
function introduce(greeting, age, city) {
    console.log(`${greeting}, I'm ${this.name}, ${age} years old, from ${city}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// CALL - passes arguments individually
console.log("Using CALL:");
introduce.call(person1, "Hello", 25, "New York");

// APPLY - passes arguments as an array
console.log("Using APPLY:");
introduce.apply(person2, ["Hi", 30, "London"]);

// 2. WHEN TO USE WHICH
console.log("\n2. WHEN TO USE WHICH:");

// CALL - When you know the exact number of arguments
function calculate(a, b, c) {
    return (this.base + a) * b + c;
}

const calculator = { base: 10 };
const result1 = calculate.call(calculator, 5, 2, 3);
console.log("CALL result:", result1); // (10 + 5) * 2 + 3 = 33

// APPLY - When you have an array of arguments or variable arguments
const numbers = [3, 4, 2];
const result2 = calculate.apply(calculator, numbers);
console.log("APPLY result:", result2); // (10 + 3) * 4 + 2 = 54

// 3. REAL-WORLD EXAMPLES
console.log("\n3. REAL-WORLD EXAMPLES:");

// Example 1: Math operations with arrays
const scores = [85, 92, 78, 96, 88];
const maxScore = Math.max.call(null, ...scores); // Using call with spread
const maxScore2 = Math.max.apply(null, scores);  // Using apply with array
console.log("Max score (call):", maxScore);
console.log("Max score (apply):", maxScore2);

// Example 2: Array methods
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using call to push individual elements
arr1.push.call(arr1, 7, 8, 9);
console.log("After call:", arr1);

// Using apply to push array elements
arr1.push.apply(arr1, [10, 11, 12]);
console.log("After apply:", arr1);

// Example 3: Function borrowing with different argument types
const user1 = {
    name: "John",
    displayInfo: function(prefix, suffix) {
        console.log(`${prefix} ${this.name} ${suffix}`);
    }
};

const user2 = { name: "Jane" };

// CALL - individual arguments
user1.displayInfo.call(user2, "Hello", "!");

// APPLY - array of arguments
user1.displayInfo.apply(user2, ["Hi", "?"]);

// 4. PERFORMANCE CONSIDERATIONS
console.log("\n4. PERFORMANCE CONSIDERATIONS:");

// CALL is generally faster for known arguments
function testCall() {
    const start = performance.now();
    for (let i = 0; i < 100000; i++) {
        calculate.call(calculator, 1, 2, 3);
    }
    const end = performance.now();
    console.log("CALL time:", (end - start).toFixed(2), "ms");
}

// APPLY has slight overhead due to array handling
function testApply() {
    const start = performance.now();
    for (let i = 0; i < 100000; i++) {
        calculate.apply(calculator, [1, 2, 3]);
    }
    const end = performance.now();
    console.log("APPLY time:", (end - start).toFixed(2), "ms");
}

testCall();
testApply();

// 5. MODERN ALTERNATIVES
console.log("\n5. MODERN ALTERNATIVES:");

// With ES6 spread operator, you can often use call instead of apply
const modernMax = Math.max(...scores); // Instead of Math.max.apply(null, scores)
console.log("Modern max:", modernMax);

// But apply is still useful for dynamic argument arrays
function dynamicSum(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

const dynamicArgs = [1, 2, 3, 4, 5];
const sum1 = dynamicSum.apply(null, dynamicArgs);
const sum2 = dynamicSum(...dynamicArgs); // Modern way
console.log("Sum (apply):", sum1);
console.log("Sum (spread):", sum2);

// 6. SUMMARY
console.log("\n6. SUMMARY:");
console.log("CALL:   function.call(thisArg, arg1, arg2, arg3)");
console.log("APPLY:  function.apply(thisArg, [arg1, arg2, arg3])");
console.log("\nUse CALL when:");
console.log("- You know the exact number of arguments");
console.log("- Arguments are individual values");
console.log("- Performance is critical");
console.log("\nUse APPLY when:");
console.log("- You have an array of arguments");
console.log("- Number of arguments is variable");
console.log("- Working with array-like objects");
