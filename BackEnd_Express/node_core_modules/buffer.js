/**
 * Node.js does not run in the browser, 
 * so it needed its own way to handle binary data, 
 * especially when handling file input and output (I/O) and TCP streams, 
 * where data comes in chunks. That's where the Buffer module comes in.
*/
/**
 * The Node.js Buffer module lets you work with binary data like 
 * files, images, or network streams directly. With it, you can store and manipulate binaries directly in memory.
*/
const { Buffer } = require('buffer');
//Buffer.from() lets you create a buffer from a string, array, or other raw data.
{
    const myStrBuffer = Buffer.from("magdy elshrief");
    console.log(myStrBuffer);

    // Create a buffer from an array of numbers
    const myNumBuffer = Buffer.from([
        70, 82, 69, 69, 67, 79, 68, 69, 67, 65, 77, 80,
    ]);

    /**
     * While it is possible to use some methods from the Buffer module without importing it first, 
     * other methods aren't available unless you explicitly import Buffer. 
     * So it's recommended that you always import Buffer whenever you use it in your projects.
    */
    console.log(myNumBuffer[0]); // 70
    console.log(myStrBuffer[0]); // 102
    console.log(myStrBuffer.toString()); // freeCodeCamp
    console.log(myNumBuffer.toString()); // FREECODECAMP

    /**
     * Buffer.alloc() lets you create a new buffer of a given size (number of bytes). 
     * Every byte inside it is automatically filled with 0:
    */
   const name = "Magdy Elshrief"
    const someBuffer = Buffer.alloc(name.length);
    console.log(someBuffer);
    //You can go ahead and use the Buffer.write() method to write to this buffer:
    someBuffer.write("Magdy Elshrief");
    console.log(someBuffer);
    console.log(`${someBuffer}`);
    //If you write more data than the buffer can hold, it will be truncated:
    someBuffer.write("Magdy Elshrief Jaber");
    console.log(`${someBuffer}`);
    console.log(Buffer.byteLength(someBuffer));
}

