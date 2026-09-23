/**
 * Crypto is another core module that's built into Node.js. 
 * It includes tools for things like hashing, encryption, decryption, 
 * and creating digital signatures, all of which are used to protect sensitive information and keep your app secure.
*/

/**
 * Some of the methods are used for data transformation purposes, 
 * such as the ones for hashing and encrypting data, and some others are for key and security management, 
 * such as the ones for generating random values and creating secrets.
*/

const crypto = require('crypto');
//Hashing and Encrypting Data
{
    //The createHash() method creates a hash object by taking in algorithms like sha256, sha512, or md5. 
    // It's a one-way operation, so you can't reverse it.
    const password = "myPassword";
    const hashedPassword = crypto.createHash(Bun.env.ALGO).update(password).digest("hex");
    console.log("createHash result:", hashedPassword);
    //Coparing incoming password with the hashed password
    const incomingPassword = "myPassword";
    const hashedIncomingPassword = crypto.createHash(Bun.env.ALGO).update(incomingPassword).digest("hex");
    if (hashedPassword === hashedIncomingPassword) {
        console.log("Passwords match!");
    } else {
        console.log("Passwords do not match!");
    }
    /**
     * createHmac() does almost the same thing as createHash(), 
     * but it takes things to the next level by accepting a secret key, 
     * so only someone with that key can verify the hash. It is ideal for authentication and verifying data integrity:
    */
   const newHashedMessage = crypto.createHmac(Bun.env.ALGO,Bun.env.SECRET_KEY).update(password).digest("utf-8");
   console.log("createHash result:", newHashedMessage);
}
