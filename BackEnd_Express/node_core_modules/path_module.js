/**
 * The Node.js path module lets you work with files and directory paths. 
 * It provides several useful methods for handling and transforming directories, including joining, normalizing, 
 * and resolving the directories across different platforms and operating systems.
*/
const path = require('path');
const fs = require('fs/promises');


/**
 * First, you should be aware of the Node.js global variables __filename and __dirname, AKA "common JS" variables.
 *  You don't need the path module to access them, which is why they are called global variables.
*/
console.log(`current file name: ${__filename}`);
console.log(`current directory path: ${__dirname}`);
//get only file name
console.log(`Only file name: ${path.basename(__filename)}`);
//get only directory name
console.log(`Only directory name: ${path.basename(__dirname)}`);
//get the extension of the file
console.log(`File extension: ${path.extname(__filename)}`);
//get the name of the file without the extension
console.log(`File name without extension: ${path.basename(__filename, path.extname(__filename))}`);
//The join() method takes all the path segments you pass in and joins them into one clean, normalized path.
const joinedPath = path.join(__dirname, 'test', 'test.txt');
console.log(joinedPath);
async function writeToFile(){
    try {
        await fs.mkdir(path.join(__dirname, 'test'), { recursive: true });
        await fs.writeFile(joinedPath, 'Hello World', 'utf8');
        console.log('File written successfully');
    } catch (err) {
        console.error(err);
    }
}

async function readFromFile(){
    try {
        const data = await fs.readFile(joinedPath, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

async function main()
{
    await writeToFile();
    await readFromFile();
}

main();