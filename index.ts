#! \usr\bin\env node
//shebang code
import inquirer from "inquirer"


//1.run program pc generate random number
//2.user input for guessing number
//3.win decleration after compair user input with pc random number
//4.In random number we call "Math function random"

const randomNumber = Math.floor(Math.random() * 10 + 6);

console.log('welcome to number guessing game.')
const answers = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        
        type: "number",
        message: "Please! guess a number between 1-6: ",
         },
]);
 if(answers.userGuessingNumber === randomNumber){
     console.log("congragulation! you guessed right Number.")

 }else{
    console.log("You guess wrong Number.")
 }