/**
 * The Node fs module provides you with methods for working with files and folders, 
 * including opening and closing, reading and writing, and deleting operations.
 * The fs module is a Node.js standard module, so it's available to use as long as you have Node.js 
 * installed in your environment
 * 
 * Many fs module methods are available in both asynchronous and synchronous forms, 
 * while some are only available asynchronously.
*/
// const fs = require('fs');
// {
//     fs.writeFile() // Asynchronous file writing
//     fs.writeFileSync() // Synchronous file writing

//     fs.readFile() // Asynchronous file reading
//     fs.readFileSync() // Synchronous file reading

//     fs.open() // Asynchronous open
//     fs.openSync() // Synchronous open

//     fs.openAsBlob() // Asynchronous, no synchronous counterpart

//     fs.opendir() // Opens directory
//     fs.opendirSync() // Synchronous directory open
// }

// //Here's the basic syntax for the asynchronous usage of the methods:
// {
//     fs.writeFile("filePath", "content", "utf8", (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("File written to!");
//     });
// }

// //For the promises version, you can import that from fs/promises or chain promises to your fs import.
// {
//     async function promiseFSexample() {
//         try {
//             await fs.readFile("filePath", "content", "utf8");
//             console.log("File written to!")
//         } catch (err) {
//             console.error(err);
//         }
//     }
//     promiseFSexample
// }
// //And here's the synchronous version:
// {
//     try {
//         fs.writeFileSync("filePath", "content", "utf8");
//         console.log("File written to!");
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

/**
 * The writeFile() method lets you write to a file. If the file doesn't exist, it creates it at the specified path. 
 * If you provide a relative path, the file is created relative to the current working directory.
*/
{
    const fs = require("fs/promises");
    async function writeToFile() {
        try {
            await fs.writeFile(
                "article.md",
                "## Node `fs` Module: The Complete Guide",
                "utf8",
            );
            console.log("File written to!")
        } catch (err) {
            console.error(err);
        }
    }
    writeToFile(); // File written to!
    //The appendFile() method lets you add content to a file. If the file doesn't exist, it creates it. 
    async function appendToFile() {
        try {
            await fs.appendFile(
                "article.md",
                "\nIn this article, you will learn all there is to know about the Node fs module...",
                "utf8",
            );
            console.log("File appended to!");
        } catch (err) {
            console.log("Error appending to file:", err);
        }
    }

    appendToFile();
    //The readFile() method lets you see what the content of a file is:
    async function readFileContent() {
        try {
            const fileContent = await fs.readFile("article.md", "utf8");
            fileContent !== null ? console.log(fileContent) : console.log("file is empty");
        } catch (error) {
            console.error(error)
        }
    }
    readFileContent();
    //If you don't specify the utf8 character encoding, you will get the content of the file as a buffer:
    async function readFileContentBuffer() {
        try {
            const fileContent = await fs.readFile("article.md");
            //this will convert biffer value "hexadecimal" to string
            // as we used string intrpitaion
            fileContent !== null ? console.log(`Buffer Content: ${fileContent}`) : console.log("file is empty");
            fileContent !== null ? console.log('Buffer Content2: ', fileContent) : console.log("file is empty");
        } catch (error) {
            console.error(error);
        }
    }
    readFileContentBuffer()
    //Lastly, the unlink() method lets you delete a file:
    async function deleteFile() {
        try {
            await fs.unlink("article.md");
            console.log("File deleted successfully!");
        } catch (err) {
            console.error("Error deleting file:", err);
        }
    }

    deleteFile();
}