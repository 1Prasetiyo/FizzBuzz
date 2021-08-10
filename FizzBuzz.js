/* 
Algorhtims FizzBuzz with JS
7 FizzBuzz
*/

function fizzBuzz(num) {
    for (let i = 1 ; i<= num; i++) {
        if (i % === 7) {
            console.log("FizzBuzz");
        }

        else if (i % 4 === 0) {
            console.log("Fizz")
        }

        else if (i % 9 === 0) {
            console.log("Buzz")
        }

        else console.log(i):
    }
 }

fizzBuzz(35)