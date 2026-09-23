/**
 * The OS module is another standard module that comes built into Node.js.
 * It lets you interact with the current operating system Node is running on so 
 * you can access vital information like 
 * the OS type, CPU details, available memory, total memory, network interfaces, and more.
*/

const os = require('os');
//getting os type
const platform = os.platform();
console.log(`platform: ${platform}`);
const type = os.type();
console.log(`type: ${type}`);
//get cpu architecture
const arch = os.arch();
console.log(`architecture : ${arch}`);
const release = os.release()
console.log(`release: ${release}`);
//returns an array of objects with details about each logical CPU core. This can help monitor CPU load
const cpuCores = os.cpus();
console.log(cpuCores);

/**
 * uptime() shows the time since the system was booted up. It can help determine how long servers have been running:
*/
console.log(os.uptime());

//to print total memory
console.log(os.totalmem());
console.log(os.freemem());

console.log(os.userInfo());

/**
 * Lastly, networkInterfaces() returns an object containing only network interfaces that have been assigned a network address.
*/
console.log(os.networkInterfaces());