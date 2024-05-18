//Import chalk by using require
// Chalk is being run on version chalk@4.1.2 as version 5 is ESM
// after install i ran "npm_chalk % npm i chalk@4.1.2"
const chalk = require('chalk');


//make log a console.log shorthand
const log = console.log;

//Basic coloring for letters in console
log(chalk.red('This is the color red'));
log(chalk.yellow('This is the color yellow'));
log(chalk.blue('This is the color blue'))

//background coloring, using bg (background) and the color to make the console
//background on colors change

log(chalk.bgRed("A red background"));
log(chalk.bgYellow("A yellow background"));
log(chalk.bgBlue("A blue background"));

