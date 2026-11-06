//For Of
/**
 * best fit for arrays and strings
*/
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const str = "Hello";
for (const char of str) {
    console.log(char);
}

//For In
/**
 * best fit for objects
*/
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}
//Nested For In 
const nestedObj = {
    a: { x: 1, y: 2 },
    b: { x: 3, y: 4 },
};
for (const key in nestedObj) {
    console.log(key);
    for (const nestedKey in nestedObj[key]) {
        console.log(nestedKey, nestedObj[key][nestedKey]);
    }
}


const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};

//isObject check function
function isObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) && value !== null;
}
for (const property in person) {
    if (isObject(person[property])) {
        for (const nestedProp in person[property]) {
            console.log(nestedProp, person[property][nestedProp]);
        }
    }
}


//------------------------While Loop------------------------
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//------------------------Do While Loop------------------------
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
/**
 * the main difference between while and do while loop is that:
 *  do while loop will execute the code block at least once even if the condition is false, 
 * whereas while loop will not execute the code block if the condition is false.
*/




/**
 * A break statement is used to exit a loop early, w
 * hile a continue statement is used to skip the current iteration of a loop and move to the next one.
*/
console.log("-----------------Break example--------------------");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}
console.log("-----------------Loop exited--------------------");
//Continue example
console.log("-----------------Continue example--------------------");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip the current iteration when i is 5
    }
    console.log(i);
}
console.log("-----------------Loop exited--------------------");

/**
 * Another thing you can do with both the break and continue statements is
 *  to use labels to specify which loop you want to break or continue.
*/
console.log("-----------------Break with label example--------------------");
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // exit the outer loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.log("-----------------Outer loop exited--------------------");
console.log("-----------------Continue with label example--------------------");
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1) {
            continue innerLoop; // skip the inner loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.log("-----------------Outer loop exited--------------------");