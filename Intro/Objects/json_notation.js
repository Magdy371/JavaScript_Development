const path = require("path");
const fs = require("fs/promises");



/**
 * There are two powerful methods in JavaScript for handling JSON data: JSON.parse() and JSON.stringify(). 
 * These methods are commonly used to convert between JSON strings and JavaScript objects.
*/

/**
 * JSON.stringify() is used to convert a JavaScript object into a JSON string. 
 * This is useful when you want to store or transmit data in a format that can be easily shared or transferred between systems.
*/

/**
 * JSON.parse() converts a JSON string back into a JavaScript object.
*/
async function checkFileExist(fileName, data) {
    const currentDir = __dirname;
    const filePath = path.join(currentDir, "JSON", path.basename(fileName));

    try {
        await fs.access(filePath);
        console.log("File already exists");
    } catch {
        const jsonString = JSON.stringify(data);
        console.log("File not found; creating it");
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await writeToFile(filePath, jsonString);
    }

    const fileData = await readFromFile(filePath);
    console.log(fileData);
    console.log(fileData["list of courses"][2]);
}

async function writeToFile(filePath, objectContainer)
{
    await fs.writeFile(filePath, JSON.stringify(objectContainer, null, 2));
}

async function readFromFile(filePath)
{
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
}

const data = {
  name: "Alice",
  age: 30,
  isStudent: false,
  list_of_courses: ["Mathematics", "Physics", "Computer Science"]
}
checkFileExist("example.json", data).catch(console.error);



/**
 * The JSON.stringify() method also accepts an optional parameter called a replacer, 
 * which can be a function or an array. Here is an example of using an array for the optional replacer parameter:
*/
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// result: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));


const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

//What Is the Optional Chaining Operator, and How Does It Work?
/**
 * The optional chaining operator (?.) is a useful tool in JavaScript that lets you safely access object properties or call methods without 
 * worrying whether they exist. It's like a safety net for working with objects that might have missing parts.
*/
const person = {
    "name":"Magdy",
    age:26
};
console.log(person?.job); // undefine
//console.log(person.job.address); //TypeError: undefined is not an object (evaluating 'person.job.address')
console.log(person?.job?.address); // Undefined

const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined
