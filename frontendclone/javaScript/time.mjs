// const movemt = require('movemt');

// console.log("Welcome to Node.js!");
// const currentDateTime = movemt().format('YYYY-MM-DD HH:mm:ss');

// console.log(currentDateTime)
 import chalk from "chalk";
const timedat = new Date.format('YYYY-MM-DD HH:mm:ss');
console.log(chalk.yellow(timedat))