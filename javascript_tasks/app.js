// // task 1:
// var firstName = "Hassan";
// let lastName = "Irfan";
// const Val = 3.14;
// console.log(firstName);
// console.log(lastName);
// console.log(Val);

// Yes, they are accessible globally.

//   task2:
// function testScope() {
//   var num1 = 100;
//   let num2 = 200;
//   const num3 = 3.14;
// }

// console.log(num1);
// console.log(num2);
// console.log(num3);
// error as they are not assecible outside function

//   //task3:
//   let condition = true;
// if (condition == true) {
//   var Name = "hassan";
//   let lastName = "irfan";
//   const value1 = "hassanirfan";
// };
// console.log(Name);
// console.log(lastName);
// console.log(value1);
// //var is assecible outside block not let amd const

// //task4:

// console.log(Name);
// var Name = "hassan";
// // undefined because variable should be initailaized first

// //task5:
// console.log(hoistLet);
// console.log(hoistConst);

// let hoistLet = "Let variable";
// const hoistConst = "Const variable";
// //Cannot access 'hoistLet' before initialization
// // Cannot access 'hoistConst' before initialization

// task6:
// var x = 10;
// let y = 20;
// const z = 30;

// var x = 50;
// let y = 60;
// const z = 70;

// console.log(x); // 50  Redeclaration with var is allowed and updates the value
// console.log(y); // Error Identifier y has already been declared
// console.log(z); // Error  Identifier yz has already been declared

// //task7:
// var x = 10;
// let y = 20;
// const z = 30;

// x = 100;
// y = 200;
// z = 300;

// console.log(x); // 100 reassign is allowed
// console.log(y); // 200 reassign is allowed
// console.log(y); // Error cant assign consts

// //task8:
// console.log(tempLet); // cannot access tempLet before initialization
// console.log(tempConst); //cannot access tempConst before initialization

// {
//   let tempLet = 50;
//   const tempConst = 3.14;
// }

// task9:
// var
// function countItems() {
//   var count = 0; // function-scoped
//   for (var i = 0; i < 5; i++) {
//     count += i;
//   }
//   console.log("Total count:", count); // Works inside function
// }

// countItems();

// //let
// function processList() {
//   let items = [10, 20, 30];
//   for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//   }
// }
// processList();

// //const
// const PI = 3.14159; // value should not change

// function calculateArea(radius) {
//   return PI * radius * radius;
// }

// console.log(calculateArea(5)); // Uses constant PI

// var: Use when you need functionscoped variables
// let: Use when you need blockscoped variables
// const: Use when the value should never change

// task10:
// let firstName = "hassan";
// let lastName = "irfan";
// let templiterals = `My name is ${firstName} and my last name is ${lastName}`;
// console.log(templiterals);

// task11:

// let firstName = "hassan";
// let address = "Garden west karachi";
// let contact = 999999;
// let profession = "computer engineer";

// let details = `Hello my name is ${firstName}
// i live in karachi my address is ${address}
// My contact no is ${contact}
// I'm a professional ${profession}`
// console.log(details);

// task12

// let num1 = 5;
// let num2 = 10;
// let sum = `The sum of two numbers is ${num1 + num2}`
// console.log(sum);

// //task13:
// // Function to calculate the product of two numbers
// function multiply(a, b) {
//   return a * b;
// }
// let result = `The product of 5 and 3 is: ${multiply(5, 3)}`;
// console.log(result);

// task14:
// function tagFunction(strings) {
//   console.log(`Templatetag strings : ${strings}`);
// }

// tagFunction`my name is hassan.`;

// task15:
// function tagFunction(string) {
//   return string
// }
// let result = tagFunction`hello i am hassan.`
// console.log(result);

// task16:
// let currentHour = new Date().getHours();
// let message = ` hello good ${currentHour < 12 ? "Morning" : "Afternoon"}! The current hour is now ${currentHour}.`;
// console.log(message);

// task17:
// let shoppingList = ["apple", "orange", "mango"];

// let htmlList = `<ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
// </ul>`;
// console.log(htmlList);

// task18
// let string = `backtick: \` inside the string `;
// console.log(string);

// task19:

// Array of table data
// let tableData = [
//   { name: "hassan", age: 32, profession: "Developer" },
//   { name: "irfan", age: 22, profession: "Designer" },
//   { name: "rehan", age: 39, profession: "Manager" }
// ];

// // Generate the table using nested template literals
// let tableHTML = `
// <table border="1">
//     <thead>
//         <tr><th>Name</th><th>Age</th><th>Profession</th></tr>
//     </thead>
//     <tbody>
//         ${tableData.map(row => `
//             <tr>
//                 <td>${row.name}</td>
//                 <td>${row.age}</td>
//                 <td>${row.profession}</td>
//             </tr>
//         `).join('')}
//     </tbody>
// </table>`;

// console.log(tableHTML);

// task20:

// let age = +prompt("enter your age");
// let eligiblity = age >= 18 ? "Yes" : "No";
// console.log(eligiblity);

// evenoddtask
// let num = prompt("enter number");
// let resuult = (num % 2 == 0) ? "even" : "odd";
// console.log(resuult);

// // gradingtask:
// let score = 85;
// let grade = (score >= 90) ? "A" :
//   (score >= 80) ? "B" :
//     (score >= 70) ? "C" :
//       (score >= 60) ? "D" : "F";
// console.log(grade);

// //logintask:
// let isLoggedIn = true;
// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);

// //Discount Eligibility:
// let isMember = true;
// let purchaseAmount = 190;
// let isdiscount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;
// console.log(isdiscount);

// //maxvalue:
// function maxValue(a, b) {
//   return (a > b) ? a : b;
// }
// let result = maxValue(6, 20);
// console.log(result);

//  Greet Message
// function greet(name) {
//   if (name === '') {
//     return 'Hello, guest!'
//   }
//   return `Hello, ${name}`
// }

// console.log(greet("Hassan"));
// console.log(greet(""));

// Map Implementation
// const numbers = [1, 2, 3, 4, 5];
// const mappedNumbers = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3));
// console.log(mappedNumbers);

//  Filter Values
// const strings = ["cat", "house", "dog", "elephant"];
// const filteredStrings = strings.filter(str => str.length > 3);
// console.log(filteredStrings);

//  Reconstructing An Array
// const originalArray = [10, 20, 30];
// const copiedArray = [...originalArray];
// console.log(originalArray);
// console.log(copiedArray);

// Combining Two Arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//  Adding Elements to an Array
// const nums = [10, 20, 30];
// const updatedNums = [0, ...nums, 40];
// console.log(updatedNums);

//  Copying an Object
// const originalObject = { a: 1, b: 2, c: 3 };
// const copiedObject = { ...originalObject };
// console.log(originalObject);
// console.log(copiedObject);

//  Merging Objects
// const object1 = { x: 10, y: 20 };
// const object2 = { y: 30, z: 40 };
// const mergedObject = { ...object1, ...object2 };
// console.log(mergedObject);

// Updating Object Properties
// const user = { name: "hassan", age: 24, email: "hassan@#mail.com" };
// const updatedUser = { ...user, email: "hassan12@gmail.co,", address: "gardeb strt" };
// console.log(updatedUser);

// //  Passing Array Elements as Arguments
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numArray = [5, 10, 15];
// console.log(sum(...numArray));

//  Combining Multiple Arrays
// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }
// const combined = combineArrays([1, 2], [3, 4], [5, 6]);
// console.log(combined);

//  Rest Parameter with Spread Operator
// function multiply(multiplier, ...args) {
//   return args.map(num => num * multiplier);
// }
// console.log(multiply(2, 3, 4, 5));

//  Spread Operator with Nested Structures
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const shallowCopy = [...nestedArray];
// shallowCopy[0][0] = 99;
// console.log(nestedArray);
// console.log(shallowCopy);

//  Sum Function
// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4));

//  Average Function
// function average(...numbers) {
//   return sum(...numbers) / numbers.length;
// }
// console.log(average(10, 20, 30));

// First and Rest
// const numbers = [1, 2, 3, 4, 5];
// const [first, ...rest] = numbers;
// console.log(first);
// console.log(rest);

// Skip and Rest
// const colors = ["red", "green", "blue", "yellow", "purple"];
// const [, , ...remainingColors] = colors;
// console.log(remainingColors);

//  Basic Destructuring
// const person =
//   { name: "hassan", age: 24, email: "hassan@gmail.com", address: "garden" };
// const { namee, emmail, ...restProps } = person;
// console.log(namee, emmail);
// console.log(restProps);

// Nested Destructuring
// const student = {
//   id: 101, name: "hassan", grades: [90, 85, 88], info: { age: 24, major: "CS" }
// };
// const { id, name: studentName, info: { major }, ...restDetails } = student;
// console.log(id, studentName, major);
// console.log(restDetails);

// //  Filter Even Numbers
// function filterEven(...numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5));

//  Combine and Sort Arrays
// function combineAndSort(...arrays) {
//   return [].concat(...arrays).sort((a, b) => a - b);
// }
// console.log(combineAndSort([3, 1], [4, 2], [6, 5]));

//  Basic Destructuring(Array)
// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit, secondFruit, thirdFruit);

//  Skipping Elements
// const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor, tertiaryColor);

//  Rest Operator(Array)
// const [firstNumber, ...remainingNumbers] = numbers;
// console.log(firstNumber, remainingNumbers);

//  Basic Destructuring(Object)
// const { name: personName, agee, city = "Unknown" } = { name: "hassan", agee: 24, city: "karachi" };
// console.log(personName, agee, city);

//  Renaming Variables
// const car = { make: "Toyota", model: "Corolla", year: 2021 };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log(carMake, carModel, carYear);

// Default Values
// const settings = { theme: "dark" };
// const { theme, language = "English" } = settings;
// console.log(theme, language);

// Array of Arrays
// const nested = [[1, 2], [3, 4], [5, 6]];
// const [[a], [b], [c]] = nested;
// console.log(a, b, c);

// Object within an Object
// const profile = {
//   username: "hassan", details: { email: "hassan@gmail.com", address: "garden" }
// };
// const { username, details: { email, address } } = profile;
// console.log(username, email, address);

// Mix of Arrays and Objects
// const data = { id: 1001, info: [{ name: "hassan" }, { age: 24 }] };
// const { id: dataId, info: [{ name }, { age }] } = data;
// console.log(dataId, name, age);

//  Array Parameters
// function printCoordinates([x, y]) {
//   console.log(`x: ${x}, y: ${y}`);
// }
// printCoordinates([10, 20]);

// Object Parameters
// function displayUser({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// displayUser({ name: "hassan", age: 24 });

// List Property Names
// let book = {
//   title: "Book Title", author: "xyz", year: 2020
// };
// let propertyNames = Object.keys(book);
// console.log(propertyNames);

// // Count Properties
// let student = {
//   name: "Hassan", age: 23, grade: "A", school: "XYZ School"
// };
// let numProperties = Object.keys(student).length;
// console.log(numProperties);

// // Iterate Over Keys
// let product = {
//   name: "Laptop", price: 1000, category: "Electronics"
// };
// let productKeys = Object.keys(product);
// productKeys.forEach(key => {
//   console.log(key + ": " + product[key]);
// });

// // List Property Values
// let movie = { title: "Inception", director: "xyz", year: 2010, genre: "SciFi" };
// let propertyValues = Object.values(movie);
// console.log(propertyValues);

// // Sum Values
// let scores = { math: 90, science: 85, english: 88 };
// let sumOfScores = Object.values(scores).reduce((total, score) => total + score, 0);
// console.log(sumOfScores);

// // Iterate Over Values
// let user = { username: "hassan123", email: "hassan@gmail.com", location: "Pakistan" };
// let userValues = Object.values(user);
// userValues.forEach(value => {
//   console.log(value);
// });

// // List Entries
// let car = { make: "Toyota", model: "Corolla", year: 2021 };
// let carEntries = Object.entries(car);
// console.log(carEntries);

// // Convert Object to Array
// let person = { firstName: "Hassan", lastName: "Irfan", age: 23 };
// let personArray = Object.entries(person);
// console.log(personArray);

// // Iterate Over Entries
// let settings = { theme: "dark", notifications: true, privacy: "high" };
// let settingsEntries = Object.entries(settings);
// settingsEntries.forEach(([key, value]) => {
//   console.log(key + ": " + value);
// });

// // Filter Keys
// let inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
// let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
// console.log(filteredKeys);

// // Transform Values
// let temperatures = { morning: 15, afternoon: 25, evening: 18 };
// let transformedTemperatures = Object.entries(temperatures)
//   .map(([key, value]) => [key, (value * 9 / 5) + 32])
//   .reduce((obj, [key, value]) => {
//     obj[key] = value;
//     return obj;
//   }, {});
// console.log(transformedTemperatures);

// // Key-Value Swap
// let roles = { admin: "hasan", editor: "rehan", viewer: "umer" };
// let swappedRoles = Object.entries(roles)
//   .map(([key, value]) => [value, key])
//   .reduce((obj, [key, value]) => {
//     obj[key] = value;
//     return obj;
//   }, {});
// console.log(swappedRoles);

// // Filter and Map
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filterAndMap = (arr, filterFn, mapFn) => arr.filter(filterFn).map(mapFn);
// let result = filterAndMap(numbers, num => num % 2 !== 0, num => num * num);
// console.log(result);

// Sort and Reduce
// let words = ["apple", "banana", "cherry", "date"];
// let sortAndReduce = (arr, sortFn, reduceFn) => arr.sort(sortFn).reduce(reduceFn);
// let sortedWords = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + word);
// console.log(sortedWords);

// Simple Callback
// let greet = (name, callback) => {
//   callback("Hello " + name);
// };
// let printGreeting = (message) => {
//   console.log(message);
// };
// greet("Hassan", printGreeting);

// Asynchronous Callback
// let fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Data fetched");
//   }, 1000);
// };
// let displayData = (data) => {
//   console.log(data);
// };
// fetchData(displayData);

// Simple Arrow Function
// let add = (a, b) => a + b;
// console.log(add(3, 5));

// Arrow Function with Array Methods
// let numbersArray = [1, 2, 3, 4, 5];
// let squaredNumbers = numbersArray.map(num => num * num);
// console.log(squaredNumbers);

// Variable Scope
// let outer = () => {
//   let x = 10;
//   let inner = () => {
//     console.log(x);
//   };
//   inner();
// };
// outer();

// Closure
// let createCounter = () => {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// };
// let counter1 = createCounter();
// let counter2 = createCounter();
// counter1();
// counter1();
// counter2();

// Simple Default Parameters
// let greet = (name, message = "Hello") => {
//   console.log(message + " " + name);
// };
// greet("Hassan");
// greet("Umer", "Good Morning");

// Default Parameters with Other Arguments
// let calculateArea = (width = 10, height = 5) => width * height;
// console.log(calculateArea());
// console.log(calculateArea(7, 3));

// Square Numbers
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// // Convert to Uppercase
// let words = ["apple", "banana", "cherry"];
// let uppercaseWords = words.map(word => word.toUpperCase());
// console.log(uppercaseWords);

//filter even
// let numbers = [1, 2, 3, 4, 5, 6, 7,8, 9, 10];

// let filterNum = numbers.filter((data)=> {
//     return data % 2 == 0
// });

// console.log(filterNum);

//filter long words
// let words = ["apple", "banana", "cherry", "date"];

// let filterWords = words.filter((data)=> {
//     return data.length>5;
// });

// console.log(filterWords);

//log numbers
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((data)=>{
//     console.log(data);
// });

// log word legnths:
// let words = ["apple", "banana","cherry"];
// words.forEach((data)=>{
//     console.log(data.length);
// });

//sumofnumbers
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc,current)=>{
//     return acc + current;
// },0);
// console.log(sum);

// concentrate string:
// let words = ["Hello", "world","this", "is", "JavaScript"];

// let conString = words.reduce((acc,curr)=>{
//     return `${acc} ${curr}`
// })

// console.log(conString);

// check for even:
// let numbers = [1, 3, 5, 7, 8];
//  let result = numbers.some((data)=>{
//     return data % 2 == 0;
//  });

// console.log(result);

// check for long word:
// let words = ["apple", "banana","cherry", "date"];
// let result = words.some((data)=>{
//     return data.length>5;
// });
// console.log(result);

//check for all even:
// let numbers = [2, 4, 6, 8, 10];
// let check = numbers.every((data)=>{
//     return data % 2 === 0;
// });
// console.log(check);

//check for all long words
// let words = ["elephant", "giraffe", "hippopotamus"];
// let allWordsLong = words.every(word => word.length > 5);
// console.log(allWordsLong);

// Find first even number
// let numbers = [1, 3, 5, 7, 8];
// let firstEven = numbers.find((num) => num % 2 === 0);
// console.log(firstEven);

// // Find the first word with more than 5 characters
// let wordsList = ["apple", "banana", "cherry", "date"];
// let longWord = wordsList.find((word) => word.length > 5);
// console.log(longWord);

// // Find the index of the first even number
// let numbersList = [1, 3, 5, 7, 8];
// let firstEvenIndex = numbersList.findIndex((num) => num % 2 === 0);
// console.log(firstEvenIndex);

// // Find the index of the first word with more than 5 characters
// let wordsArray = ["apple", "banana", "cherry", "date"];
// let longWordIndex = wordsArray.findIndex((word) => word.length > 5);
// console.log(longWordIndex);

// // Simple Promise
// let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// delay(2000).then(() => console.log("Hello, world!"));

// // Promise Chain
// let fetchData = () =>
//   new Promise((resolve) => resolve({ name: "hassan", age: 24}));
// fetchData().then((data) => console.log(data));

// // Error Handling in Promise
// let fetchUserData = () =>
//   new Promise((resolve, reject) => {
//     let userData = { name: "hassan" }; 
//     if (userData.age) {
//       resolve(userData);
//     } else {
//       reject("User data missing age property");
//     }
//   });
// fetchUserData().catch((error) => console.log(error));

// Simulate Network Request
// let getWeather = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true; 
//       if (success) {
//         resolve({ temp: 70, condition: "cloudy" });
//       } else {
//         reject("Error fetching weather data");
//       }
//     }, 1000);
//   });
// getWeather()
//   .then((data) => console.log("Weather Data:", data))
//   .catch((error) => console.log("Error:", error));

// Simple async Function
// let sayHello = async () => {
//   await delay(2000);
//   console.log("Hello, world!");
// };
// sayHello();

// Fetch Data with async/await
// let fetchUserDataAsync = async () => {
//   return new Promise((resolve, reject) => {
//     let userData = { name: "hassan", age: 24 };
//     if (userData.age) {
//       resolve(userData);
//     } else {
//       reject("User data missing age property");
//     }
//   });
// };
// let getUserData = async () => {
//   try {
//     const userData = await fetchUserDataAsync();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUserData();

// Fetch and Process Data
// let fetchUser = () =>
//   new Promise((resolve) => resolve({ name: "hassan", age: 24 }));
// let fetchPosts = () =>
//   new Promise((resolve) =>
//     resolve([
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ])
//   );

// let getUserAndPosts = async () => {
//   try {
//     const user = await fetchUser();
//     const posts = await fetchPosts();
//     console.log("User Data:", user);
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUserAndPosts();

// Error Handling in async/await
// let fetchUserWithError = () =>
//   new Promise((resolve, reject) => {
//     let user = null; 
//     if (user) {
//       resolve(user);
//     } else {
//       reject("User not found");
//     }
//   });
// let getUserInfo = async () => {
//   try {
//     const user = await fetchUserWithError();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUserInfo();

// Simulate API Calls
// let apiCall = () =>
//   new Promise((resolve) => {
//     let delayTime = Math.random() * 2000; 
//     setTimeout(() => {
//       resolve("API data received");
//     }, delayTime);
//   });

// let getData = async () => {
//   try {
//     let data1 = await apiCall();
//     console.log(data1);
//     let data2 = await apiCall();
//     console.log(data2);
//     let data3 = await apiCall();
//     console.log(data3);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };
// getData();
