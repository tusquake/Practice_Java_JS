const a = () =>{
    console.log('a');
}

const b = () =>{
    console.log('b');
}

const c = 'c';
const d = 'd';

// console.log((a() && b()) || c || d);
//Output: a c
//Explanation: The expression (a() && b()) is evaluated first. The function a() is called, which logs 'a' to the console and returns undefined (a falsy value). Since a() returns a falsy value, the && operator short-circuits and does not call b(). The expression then evaluates to undefined || c || d. Since undefined is falsy, the || operator evaluates the next operand, which is c. The value of c is 'c', which is truthy, so the entire expression evaluates to 'c'. Therefore, 'c' is logged to the console after 'a'.

// Question 1
// console.log([3,4] + [4,9]);
// Output: "3,44,9" (Arrays are converted to strings and concatenated)
// Explanation: In JavaScript, when you use the + operator with arrays, they are first converted to strings. The array [3,4] becomes the string "3,4" and the array [4,9] becomes the string "4,9". When you concatenate these two strings, you get "3,44,9".


// // Question 2
// console.log(typeof NaN);
// Output: "number"
// Explanation: In JavaScript, NaN stands for "Not-a-Number", but its type is actually "number". This is a quirk of the language and can be confusing. NaN is used to represent a value that is not a valid number, but it is still considered to be of the number type.

// // Question 3
// console.log(0.1 + 0.2 === 0.3);
// Output: false
// Explanation: Due to the way floating-point numbers are represented in binary, the sum of 0.1 and 0.2 does not exactly equal 0.3. Instead, it results in a value that is very close to 0.3, but not exactly equal, leading to the comparison returning false.

// // Question 4
// console.log('5' - 3);
//Output: 2
// Explanation: In JavaScript, the - operator triggers type coercion. The string '5' is coerced to the number 5, and then 3 is subtracted from it, resulting in the number 2.

// // Question 5
// console.log(false === '0');
// Output: true
// Explanation: In JavaScript, when using the loose equality operator (==), type coercion occurs. The string '0' is coerced to the number 0, and false is also coerced to the number 0. Since both sides are now 0, the comparison evaluates to true.

// // Question 6
// console.log([1, 2, 3] + [4, 5, 6]);
// Output: "1,2,34,5,6"
// Explanation: Similar to Question 1, the + operator concatenates the string representations of the two arrays. The array [1, 2, 3] becomes the string "1,2,3" and the array [4, 5, 6] becomes the string "4,5,6". When concatenated, they form the string "1,2,34,5,6".

// // Question 7
// console.log({} + []);
// Output: "[object Object]"
// Explanation: When using the + operator with an object and an array, JavaScript first converts both operands to strings. The empty object {} is converted to the string "[object Object]", and the empty array [] is converted to an empty string "". When these two strings are concatenated, the result is "[object Object]".

// // Question 8
// console.log('2' > '12');
// Output: true
// Explanation: When comparing two strings in JavaScript, the comparison is done lexicographically (dictionary order). In this case, the first character of '2' is compared to the first character of '1'. Since '2' comes after '1' in lexicographical order, the comparison evaluates to true.

// // Question 9
// console.log(null == undefined);
// Output: true
// Explanation: In JavaScript, null and undefined are considered equal when using the loose equality operator (==). This is because both represent the absence of a value, and the language treats them as equivalent in this context. However, they are not strictly equal (===), as they are different types.

// // Question 10
// console.log([1] == 1);
// Output: true
// Explanation: When using the loose equality operator (==), JavaScript performs type coercion. The array [1] is coerced to the string "1", and then to the number 1. Since both sides are now the number 1, the comparison evaluates to true.

// Question 11
// console.log(typeof typeof 1);
// Output: "string" 
// Explanation: The inner typeof 1 evaluates to "number", which is a string. Then, the outer typeof checks the type of the string "number", which is "string". Therefore, the final output is "string".

// // Question 12
// console.log([10] == 10);
// Output: true
// Explanation: When using the loose equality operator (==), JavaScript performs type coercion. The array [10] is coerced to the string "10", and then to the number 10. Since both sides are now the number 10, the comparison evaluates to true.

// // Question 13
// console.log([] == false);
// Output: true
// Explanation: When using the loose equality operator (==), JavaScript performs type coercion. The empty array [] is coerced to an empty string "", which is then coerced to the number 0. The boolean false is also coerced to the number 0. Since both sides are now 0, the comparison evaluates to true.

// // Question 14
// console.log('' == 0);
// Output: true
// Explanation: When using the loose equality operator (==), JavaScript performs type coercion. The empty string '' is coerced to the number 0. Since both sides are now 0, the comparison evaluates to true.

// // Question 15
// console.log(!!'false' == !!'true');
// Output: true
// Explanation: The double negation operator (!!) converts a value to its boolean equivalent. Both the string 'false' and the string 'true' are non-empty strings, which are considered truthy values in JavaScript. Therefore, !!'false' evaluates to true, and !!'true' also evaluates to true. Since both sides are true, the comparison evaluates to true.

// // Question 16
// console.log([null] == null);
// Output: false
// Explanation: When using the loose equality operator (==), JavaScript performs type coercion. The array [null] is coerced to the string "null", which is not equal to null. Therefore, the comparison evaluates to false.

// // Question 17
// console.log(false + true);
// Output: 1
// Explanation: In JavaScript, when using the + operator with boolean values, they are coerced to numbers. The boolean false is coerced to 0, and the boolean true is coerced to 1. When you add these two numbers together (0 + 1), the result is 1.

// // Question 18
// console.log('b' + 'a' + + 'a' + 'a');
// Output: "baNaNa"
// Explanation: The expression is evaluated from left to right. 
// First, 'b' + 'a' results in the string "ba". 
// Next, the unary plus operator (+) is applied to the string 'a', which cannot be converted to a number, resulting in NaN (Not-a-Number). 
// Then, "ba" + NaN results in the string "baNaN". Finally, "baNaN" + 'a' results in the string "baNaNa".

// // Question 19
// console.log(1 < 2 < 3);
// Output: true
// Explanation: The expression is evaluated from left to right. 
// First, 1 < 2 evaluates to true. 
// Then, true is coerced to the number 1 when compared with 3. 
// Finally, 1 < 3 evaluates to true. Therefore, the final output is true.

// // Question 20
// console.log(3 > 2 > 1);
// Output: false
// Explanation: The expression is evaluated from left to right. 
// First, 3 > 2 evaluates to true. 
// Then, true is coerced to the number 1 when compared with 1. 
// Finally, 1 > 1 evaluates to false. Therefore, the final output is false.

// Question 21
// console.log([] == []);
// Output: false
// Explanation: In JavaScript, arrays are reference types. 
// When you compare two arrays using the equality operator (==), 
// it checks whether they refer to the same object in memory. 
// Since [] and [] are two different array instances, 
// they do not refer to the same object, and the comparison evaluates to false.

// // Question 22
// console.log([1,2] == "1,2");
// Output: true
// Explanation: When using the loose equality operator (==), 
// JavaScript performs type coercion. The array [1,2] is coerced to the string "1,2". 
// Since both sides are now the string "1,2", the comparison evaluates to true.

// // Question 23
// console.log(!!undefined);
// Output: false
// Explanation: The double negation operator (!!) converts a value to its boolean equivalent. 
// The value undefined is considered falsy in JavaScript. 
// Therefore, !!undefined evaluates to false.

// // Question 24
// console.log(typeof null);
// Output: "object"
// Explanation: In JavaScript, the typeof operator returns "object" for null.
// This is a well-known quirk of the language and is considered a bug that has been retained for backward compatibility. 
// Null is actually a primitive value that represents the intentional absence of any object value, but due to this quirk, typeof null returns "object".

// // Question 25
// console.log(0 == false);
// Output: true
// Explanation: When using the loose equality operator (==), 
// JavaScript performs type coercion. 
// The boolean false is coerced to the number 0. 
// Since both sides are now 0, the comparison evaluates to true.

// // Question 26
// console.log(0 === false);
// Output: false
// Explanation: The strict equality operator (===) does not perform type coercion.
// Since 0 is a number and false is a boolean, they are of different types.
// Therefore, the comparison evaluates to false.

// // Question 27
// console.log('' === false);
// Output: false
// Explanation: The strict equality operator (===) does not perform type coercion.
// Since '' is a string and false is a boolean, they are of different types.
// Therefore, the comparison evaluates to false.

// // Question 28
// console.log([1,2,3].toString());
// Output: "1,2,3"
// Explanation: The toString() method converts an array to a string by joining its elements with commas. 
// In this case, the array [1,2,3] is converted to the string "1,2,3".

// // Question 29
// console.log('5' + 3);
// Output: "53"
// Explanation: In JavaScript, the + operator is used for both addition and string concatenation. 
// When one of the operands is a string, the other operand is coerced to a string as well. 
// In this case, the number 3 is coerced to the string "3", 
// and then concatenated with the string "5", resulting in the string "53".

// // Question 30
console.log(parseInt('08'));
// Output: 8
// Explanation: The parseInt() function converts a string to an integer. 
// In this case, the string '08' is converted to the integer 8. 
// The leading zero does not affect the conversion, and the result is the number 8.
