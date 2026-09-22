/**
 * Object:is a fundamental data structure that allows you to store and organize related data and functionality
*/
{
    const person =
    {
        name: "Magdy",
        age: 26,
        address: "El-Mahad Eldiny",
        salary: 18000
    }

    //How can we access thee values of object keys
    //1- by dot notation
    console.log(`name: ${person.name}`);
    //2- using bracket notation
    console.log(`salary: ${person['salary']}`);
    let key = "age";
    console.log(`age: ${person[key]}`);
}

//Remoing elements from objects
{
    const person = {
        name: "Alice",
        age: 30,
        job: "Engineer"
    };

    delete person["job"];
    console.log(`check removal person.jpb result: ${person.job === undefined ? "removed" : "not removed"}`);
    //Method 2
    /**
     * Another way to remove properties is by using destructuring assignment with rest parameters. 
     * This approach doesn't actually delete the property, but it creates a new object without the specified properties:
    */
    const person2 =
    {
        name: "Magdy _Elshrief",
        age: 26,
        job: "Software_Engineer",
        city: "Damanhur",
        salary: "1000$"
    }
    const { salary, city, ...remainingProperties } = person2;
    console.log(remainingProperties);

}

// Check If an Object Has a Property?
{
    //1-hasOwnProperty || hasOwn()
    //bothe of them check if an object has a property as its own (not inherited). 
    const person = {
        name: "Alice",
        age: 30
    };
    //make employee inherit person
    const employee = Object.create(person);
    employee.salary = 1000;
    employee.address = "Dmanahur"
    console.log(`checking name property in employee Object: ${employee.hasOwnProperty("name")}`);//false
    console.log(`checking salary property in salary Object: ${employee.hasOwnProperty("salary")}`); // true
    console.log(Object.hasOwn(employee, "name")); // false

    //in operator. Like hasOwnProperty(), the in operator will return true if the property exists on the object. 
    // but it will inclide inherited chain too
    console.log(`check name in employee: ${"name" in employee}`);//ture;
}

//How Do You Work with Accessing Properties from Nested Objects and Arrays in Objects?
{
    const person = {
        name: "Alice",
        age: 30,
        contact: {
            email: "alice@example.com",
            phone: {
                home: "123-456-7890",
                work: "098-765-4321"
            }
        }
    };
    console.log(`Person home phone number: ${person.contact.phone.home}`);
    //Or
    console.log(`Person work phone number: ${person["contact"]["phone"]["work"]}`);

    //Now, let’s take a look at how we can access data where one of the object properties has the value of an array. 
    const person2 = {
        name: "Alice",
        age: 30,
        addresses: [
            { type: "home", street: "123 Main St", city: "Anytown" },
            { type: "work", street: "456 Market St", city: "Workville" }
        ]
    };
    console.log(`Person home str address: ${person2.addresses[0].street}`);
    console.log(`Person work str address: ${person2['addresses'][1]["street"]}`);
}

//What Is the Difference Between Primitive and Non-Primitive Data Types?
{
    //1-Primitive data types are the simplest form of data in JavaScript. 
    // They include number, bigint, string, boolean, null, undefined, and symbol.
    //When you work with primitive data types, you're dealing directly with their values. 
    let num1 = 5;
    let num2 = num1;
    num1 = 10;
    console.log(num2); // 5

    //2-Non-primitive data types, on the other hand, are more complex. 
    // In JavaScript, these are objects, which include regular objects, arrays, and functions. 
    // Unlike primitives, non-primitive types can hold multiple values as properties or elements.
    /**
     * When you create a variable with a non-primitive value, 
     * what's stored in the variable is actually a reference to the location in memory where the object is stored,
     *  not the object itself. 
    */
    //In JavaScript, when you assign an object to another variable, 
    //you're copying the reference to the object, not the object itself. 
    // This is known as shallow copying by reference. 
    const originalPerson = { name: "John", age: 30, salary: 50000 };
    const copiedPerson = originalPerson;
    originalPerson.age = 26;
    console.log(`new copied opject affecteion: ${copiedPerson.age}`);
}
    
//What Is the Difference Between Functions and Object Methods?
/**
 * Regular functions have their own scope, but they don't have a built-in reference to any particular object. 
 * Methods, however, are bound to their object and can access its properties and other methods using the this keyword.
*/
{
    //functions are reusable blocks of code that perform a specific task
    function greet(name) {
        return "Hello, " + name + "!";
    }
    console.log(greet("Alice")); // "Hello, Alice!"

    //Object methods, on the other hand, are functions that are associated with an object. 
    const person = {
        name: "Magdy",
        age: 30,
        sayHello: function () {
            return "Hello, my name is " + this.name;
        }
    };
    console.log(person.sayHello());
}

//What Is the Object() Constructor, and When Should You Use It?
{
    /**
     * In JavaScript, a constructor is a special type of function used to create and initialize objects. 
     * It is invoked with the new keyword and can initialize properties and methods on the newly created object.
    */
    //When you call new Object(), it returns a new object that can be used to store values.
    const num = 26;
    const numObject = new Object(num);
    console.log(numObject.valueOf("Number"));
    console.log(typeof numObject);
}