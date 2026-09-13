let item = "flashLight";
const collections = [item, 5, "COW", true, [45, 55, 44, 32]];
console.log(collections);
console.log(`length: ${collections.length}`);
//To ADD a new item to the array
collections[collections.length] = "Marcelia";
//OR SIMPLY USE push() method
collections.push("Spain");
console.log(collections);
console.log(`length: ${collections.length}`);

//Array Methods
//pop() method removes the last element from an array and returns that element.
collections.pop();
console.log(collections);
console.log(`length: ${collections.length}`);

//shift() method removes the first element from an array and returns that element.
collections.shift();
console.log(collections);
console.log(`length: ${collections.length}`);

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
collections.unshift("Marcelia", "Magdy");
console.log(collections);
console.log(`length: ${collections.length}`);

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(collections.indexOf("Marcelia"));

//find() method returns the first element in the array that satisfies the provided testing function.
console.log(collections.find((item) => item === "Marcelia"));

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(collections.filter((item) => typeof item === "string"));

//sort() method sorts the elements of an array in place and returns the sorted array.
console.log(collections.sort());
//2Dimentional Array in Js
const names = [
    ["Ahmed", "Sara", "Mohamed", "Mona", "Omar", "Nour", "Youssef", "Laila", "Khaled", "Hana"],
    ["Ali", "Mariam", "Hassan", "Fatma", "Adam", "Salma", "Karim", "Rana", "Tarek", "Dina"],
    ["Ibrahim", "Aya", "Mahmoud", "Reem", "Mostafa", "Huda", "Ziad", "Nada", "Amr", "Jana"],
    ["Samir", "Heba", "Wael", "Rania", "Fadi", "Yara", "Sami", "Noha", "Bilal", "Malak"],
    ["Adel", "Rasha", "Hamza", "Farah", "Nabil", "Sandy", "Fares", "Lina", "Ramy", "Shorouk"],
    ["Ayman", "Basmalah", "Hany", "Doaa", "Sherif", "Maha", "Osama", "Sahar", "Bassem", "Riham"],
    ["Walid", "Eman", "Maged", "Hanan", "Seif", "Rim", "Ashraf", "Manar", "Hatem", "Aya"],
    ["Salah", "Nermin", "Kamel", "Wafaa", "Khalil", "Nadia", "Fouad", "Rabab", "Sameh", "Mervat"],
    ["Ismail", "Zeina", "Saad", "Hala", "Ragab", "Lubna", "Yasin", "Samia", "Nasser", "Amal"],
    ["Yehia", "Kenza", "Marwan", "Esraa", "Hossam", "Soma", "Anas", "Basma", "Gamal", "Khadija"]
  ];
console.log(names[2][3]);

/**
 * Array destructuring is a feature in JavaScript that allows you to extract values from arrays,
 *  and assign them to variables in a more concise and readable way.
 *  It provides a convenient syntax for unpacking array elements into distinct variables.
 *  Array destructuring also allows you to skip elements you're not interested in by using commas.
 */
let fruits = ["apple", "banana", "orange"];
let [first, second, last] = fruits;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`last: ${last}`);
let colors = ['green', 'blue', 'white'];
let [c1,,c3] = colors;
console.log(`c1: ${c1}`);
console.log(`c3: ${c3}`);

/**
 * Now, let's discuss the rest syntax, denoted by three dots (...).
 *  It allows you to capture the remaining elements of an array that haven’t been destructured into a new array.
 */
let fruitsArray = ["apple", "banana", "orange", "mango", "kiwi"];
let [f1, f2,...rest] = fruitsArray;
console.log(`f1: ${f1}`);
console.log(`f2: ${f2}`);
console.log(`rest of fruits array: ${rest}`);
//Another example
let numbersArray = [1, 2, 3, 4, 5];
let [a, , b, ...rest2] = numbersArray;
console.log(a, b, rest2);

//THIS WILL THROOW SYNTAX ERROR
/**
 * let fruits2 = ["apple", "banana", "orange", "grape"];
 * let [first2, ...rest3, last2] = fruits2;
 * console.log(first2, rest3, last2);
 */

/**
 *Reversing a string is a common programming task that can be accomplished in JavaScript using a combination of string and array methods.
 *  The process involves three main steps:
Splitting the string into an array of characters.
Reversing the array.
Joining the characters back into a string.
 */

//1- split
//An empty string (""), which splits the string into individual characters.
//A single space (" "), which splits the string wherever spaces occur.
//A dash ("-"), which splits the string at each dash.

let str = "Hello";
let charArr = str.split("")// produce array of characters [H, e, l, l, o];
console.log(`str split(""): ${charArr}`);

//2- The reverse() method is an array method that reverses the elements of an array in place.
//This means it modifies the original array rather than creating a new one.
charArr.reverse();
console.log(`reversed charArray: ${charArr}`);
//3-join method
/**
 *  The join() method creates and returns a new string by concatenating all the elements in an array,
 *   separated by a specified separator string. If you want to join the characters without any separator,
 *    you can use an empty string as the argument.
 */
let joinedReversedAray = charArr.join("");
console.log(`reversed str: ${joinedReversedAray}`);
