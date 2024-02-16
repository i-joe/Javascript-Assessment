// JANUARY JS ASSESSMENT

// If-Else
// 1.  Age Eligibility Checker: Determine if a person is eligible to vote based on their age

// let eligibleAge = 18
// let newVoterAge = window.prompt("Enter your age")
//  newVoterage = Number(newVoterAge)

// if(newVoterAge >= eligibleAge){
//      console.log("You are eligible to vote")
// }else{
//     let feedback = "Sorry, you are not eligible to vote"
//      console.log(feedback)
// }


// 2. Even or Odd Number Identifier: Check if a given number is even or odd and display a message

// let number = prompt(`Please enter a number`);
// function oddEven(num){
//     evenCheck = num % 2
//     return evenCheck
// }
// oddEven(number)

// if(evenCheck === 0){
//     console.log("Your number is an even Number")
// }else{
//     console.log("Your number is an odd number")
// }


// 3. Vowel or Consonant Classifier
// let letter = prompt("Please enter a letter")
// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// let check = vowels.includes(letter)
// if(letter = check){
//     console.log("Your letter is a vowel")
// }else{
//     console.log("Your letter is a consonant")
// }

// 4. Large Number Finder: Compare two numbers and return the larger one
// let number1 = prompt(`Enter the first number`)
// Number(number1)
// let number2 = prompt(`Enter the second number`)
// Number(number2)
// let comparison = Math.max(number1, number2)
// if(number1 > number2){
//     console.log(`${comparison} is the larger number`)  
// }else{
//     console.log(`${comparison} is the larger number`)
// }

// 5. Simple Calculator: Create a calculator that can perform basic arithmetic operations
// let operand1 = prompt(`Enter first number: `)
// operand1 = Number(operand1) 
// let operator = prompt(`Enter sign`)
// let operand2 = prompt(`Enter second number: `)
// operand2 = Number(operand2)

// let result
// if(operator === "+"){
//     result = operand1 + operand2
// }else if(operator === "-"){
//     result = operand1 - operand2
// }else if(operator === "*"){
//     result = operand1 * operand2
// }else if(operator === "/"){
//     result = operand1 / operand2
// }else{
//     console.log(`Invalid operation`)
// }
// console.log(`${operand1} ${operator} ${operand2} = ${result}`)

// Switch Statements
// 1. Day of the week printer: Print the name of the day for a given number(1-7)
// let dayOfTheWeek = prompt(`Input a number: `)
// dayOfTheWeek = Number(dayOfTheWeek)
// switch(true){
//     case dayOfTheWeek === 1:
//         console.log(`Sunday`)
//         break
//     case dayOfTheWeek === 2:
//         console.log(`Monday`)
//         break
//     case dayOfTheWeek === 3:
//     console.log(`Tueday`)
//         break
//     case dayOfTheWeek === 4:
//         console.log(`Wednesday`)
//         break
//     case dayOfTheWeek === 5:
//         console.log(`Thursday`)
//         break
//     case dayOfTheWeek === 6:
//         console.log(`Friday`)
//         break
//     case dayOfTheWeek === 7:
//         console.log(`Saturday`)
//         break
//     default:
//         console.log(`Invalid input`)
// }

// 2. Grade Evaluator: Assign letter grade(ABCDEF) based on number grade.
// let number = prompt(`Enter your score`)
// number = Number(number)
// switch(true){
//     case (number <= 29):
//         console.log(`You got an F`)
//         break
//     case (number > 29 && number <= 39): 
//         console.log(`You got an E`)
//         break
//     case (number > 39 && number <= 49):
//         console.log(`You got a D`)
//         break
//     case (number > 49 && number <= 60):
//         console.log(`You got a C`)
//         break
//     case (number > 60 && number <= 89):
//         console.log(`You got a B`)
//         break
//     case (number > 89 && number <= 100):
//         console.log(`You got an A`)
//         break
//     default:
//         console.log(`You have no record of scores`)
// }

// 3. Rock-Paper-Scissors Game: Determine the winner based on player choices.
// let player1 = Math.floor(Math.random() * 3)
// let player2 = prompt(`Hello player 2, type either rock, paper or scissors to play`).toLocaleLowerCase()

// switch(player1){
//     case 0: player1 = "rock"
//     break;

//     case 1: player1 = "paper"
//     break;

//     case 2: player1 = "scissors"
// }

// switch(true){
//     case (player1 === "rock" && player2 === "rock"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - It's a tie!`)
//         break
//     case (player1 === "rock" && player2 === "paper"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 2 won!`)
//         break
//     case (player1 === "rock" && player2 === "scissors"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 1 won!`)
//         break
//     case (player1 === "paper" && player2 === "rock"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 1 won!`)
//         break
//     case (player1 === "paper" && player2 === "paper"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - It's a tie!`)
//         break
//     case (player1 === "paper" && player2 === "scissors"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 2 won!`)
//         break
//     case (player1 === "scissors" && player2 === "rock"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 2 won!`)
//         break
//     case (player1 === "scissors" && player2 === "paper"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - Player 1 won!`)
//         break
//     case (player1 === "scissors" && player2 === "scissors"):
//         console.log(`Player 1: ${player1}, Player 2: ${player2} - It's a tie!`)
//         break
//     default:
//         console.log(`Your input is invalid, sorry`)    
// }

// 4. Month Name displayer: Print the name of a month for a given number(1-12)
// let monthNumber = prompt(`Input a number: `)
// monthNumber = Number(monthNumber)
// switch(true){
//     case monthNumber === 1:
//         console.log(`January`)
//         break
//     case monthNumber === 2:
//         console.log(`February`)
//         break
//     case monthNumber === 3:
//     console.log(`March`)
//         break
//     case monthNumber === 4:
//         console.log(`April`)
//         break
//     case monthNumber === 5:
//         console.log(`May`)
//         break
//     case monthNumber === 6:
//         console.log(`June`)
//         break
//     case monthNumber === 7:
//         console.log(`July`)
//         break
//     case monthNumber === 8:
//         console.log(`August`)
//         break
//     case monthNumber === 9:
//         console.log(`September`)
//         break
//     case monthNumber === 10:
//         console.log(`October`)
//         break
//     case monthNumber === 11:
//         console.log(`November`)
//         break
//     case monthNumber === 12:
//         console.log(`December`)
//     default:
//         console.log(`Invalid input`)
// }

// 5. Simple Menu: Create a menu with a few options and execute different actions based on users choice
// let menu = ["Chicken", "Pizza", "Rice", "Amala", "Cake"]
// console.log(`Here is our menu, Please make your choice: ${menu}`)
// let usersChoice = prompt(`Please put in your choice`)

// switch(true){
//     case usersChoice === menu[0]:
//         console.log(`Your ${menu[0]} is coming right up, thank you!`)
//         break
//     case usersChoice === `${menu[0]} and ${menu[2]}`:
//         console.log(`Your ${menu[0]} and ${menu[2]} is coming right up!`)
//         break
//     case usersChoice === menu[4]:
//         console.log(`Your ${menu[4]} is coming right up!`)
//         break
//     default:
//         console.log(`Please make a choice from the menu list`)
// }

// For loops
// 1. Number Summation: Calculate the sum of all numbers from 1 to a given number.
// let givenNumber = 5
// function calculateSum(givenNumberParameter){
//     let sumOfNumbers = 0
//     for(let i = 1; i <= givenNumber; i++){
//         sumOfNumbers += i
//     }
//     return sumOfNumbers
// } 
// let sumOfNumbers = calculateSum(givenNumber)
// console.log(`The sum of numbers from 1 to ${givenNumber} = ${sumOfNumbers}`)

// 2. Countdown timer: Print a countdown from a given number to 1.
// let givenNumber = 5
// for(let i = givenNumber; i >= 1; i--){
//     console.log(i)
// }

// 3. Multiplication table generator: Print a multiplication table for a given number
// let num = [2]
// for(let i = 2; i <= num; i++){
//     console.log(`Multiplication table for number ${num}`)
     
//     for(let x = 1; x <= 12; x++){
//         let result = `${i} x ${x} = ${i * x}`
//         console.log(result)
//     }
// }

// 4. Array Element Printer: Print each element of an array.
// let arrayElements = ["Joseph", "Chidiebere", "Ibe", "Joey", "Cheedee"]
// for(let array of arrayElements){
//     console.log(array)
// }

// 5. String repeater: Repeat a string a specified number of times
// let string = ["Joseph", "Ibe"]
// for(let i = 0; i <= 5; i++){
//         i = string[0];
//         console.log(i) 
// }

// Functions
// 1. Greeter Function: Take a persons name as input and greet them with a personalized message
// let personsName = prompt(`Please enter your name`)
// function greeterFunction(nameParameter){
//         console.log(`Hello ${nameParameter}, it is nice to have you here!`)
// }
// greeterFunction(personsName)

// 2. Area Calculator - Rectangle, triangle, or circle.
// function areaCalculator(length, breadth){
//         let areaOfRectangle = length * breadth
//         return areaOfRectangle
// }
// console.log(`Area of rectangle =`, areaCalculator(6, 3))

// // Area Calculator - triangle
// function areaCalc(breadth, height){
//         let areaOfTriangle = (breadth * height) / 2
//         return areaOfTriangle
// }
// console.log(`Area of triangle =`, areaCalc(5, 6))

// // Area Calculator - circle
// function calculateArea(radius){
//         let areaOfCircle = Math.PI * radius * radius
//         return areaOfCircle
// }
// console.log(`Area of circle = `, calculateArea(8).toFixed(2))

// 3. Palindrome Checker: Determine if a given word or phrase is a palindrome
// let checkForMe = prompt(`Please enter a word, sentence or phrase`)
// function palindromeChecker(text){
//         const stringedData = String(text).toLowerCase()
//         const reversedData = stringedData.split('').reverse('').join('')

//         return reversedData === stringedData
// }
// console.log(palindromeChecker(checkForMe))

// 4. Number Reverser: Reverse the digits of a given number
// function numberReverser(data){
//         let reversedStringedNumber = data.toString().split('').reverse().join('')
//         return parseInt(reversedStringedNumber)
// }
// console.log(numberReverser(123))

// 5. Simple Sorting Function: Sort an array of numbers in accending or descending
// const numbersArray = [74, 14, 40, 22, 3]
// function ascendingOrder(a, b){
//         return a - b   
// }
// numbersArray.sort(sortingFunction)
// console.log(numbersArray)

// Function Parameters
// 1. Number Adder
// function numberAdder(num1, num2){
//         let addition = num1 + num2
//         return addition
// }
// console.log(numberAdder(10, 5))

// 2. Word Length Checker
// function wordLengthChecker(word){
//         let wordLength = word.length
//         return wordLength
// }
// console.log(wordLengthChecker("Joseph"))

// 3. Age difference Calculator
// let person1 = prompt('Please put your birth year in numbers only')
// let person2 = prompt('Please put your birth year in numbers only')
// function ageDifferenceCalculator(birthYear1, birthYear2){
//         let ageDifference = birthYear1 - birthYear2
//         return ageDifference
// }
// console.log(ageDifferenceCalculator(person1, person2))

// 4. Temperature Converter - celcius to fahrenheit
// function tempConverter(celcius){
//         let celciusToFahrenheit = (celcius * 9/5) + 32 
//         return celciusToFahrenheit
// }
// console.log(`${tempConverter(20)} degree fahrenheit`)

// Fahrenheit to celcius
// let temperature = prompt('Please enter temperature in fahrenheit')
// temperature = Number(temperature)
// function tempConverter(fahrenheit){
//         let fahrenheitToCelcius = (fahrenheit - 32) * 9/5 
//         return fahrenheitToCelcius
// }
// console.log(`${tempConverter(temperature)} degree celcius`)

// 5. Currency converter
// let amountToConvert = 100
// let exchangeRate = 0.85

// function currencyConverter(amount, exchangeRateStore, direction = 'to'){
//     if(direction === 'to'){
//         return amount * exchangeRateStore
//     }else if(direction === 'from'){
//         return amount / exchangeRateStore
//     }else{
//         return 'Please specify "to" or "from"'
//     }
// }
// let dollarToEuro = currencyConverter(amountToConvert, exchangeRate)
// console.log(`$100 = ${dollarToEuro}EUR`)

// let euroToDollar = currencyConverter(amountToConvert, exchangeRate, 'from')
// console.log('EUR100 =', `$${euroToDollar.toFixed(2)}`)

// Arrow Functions
// 1. Double each element in an array
// let array = [1,2,3,4,5]
// let doubledelement = array.map((item) => item * 2)
// console.log(doubledelement)

// 2. String concatenation: combine 2 strings into a single string
// let string1 = "Joseph"
// let string2 = "Ibe"

// let combinedString = (string1, string2) => `${string1} ${string2}`
// console.log(combinedString(string1, string2))

// 3. Filter an array of numbers to keep only the even ones
// let numbersArray = [1,3,4,7,8,10]
// let evenNumbers = numbersArray.filter((items) => items % 2 === 0)
// console.log(evenNumbers)

// 4. Split a sentence into an array of words
// let sentence = "This sentence is going to be split"
// let splitSentence = (sentenceStore) => sentenceStore.split(' ')
// console.log(splitSentence(sentence))

// 5. Number Multiplier: Multiply a number by a given factor
// let number = 15
// let factor = 5
// let numberByFactor = (numberStore, factorStore) => numberStore * factorStore
// console.log(numberByFactor(number, factor)) 

// Object Literals
// 1. Person object
// let personObject = {
//         personName : "Joseph Ibe",
//         age : 34,
//         occupation : "Front-end Engineer"
// }
// console.log(personObject)

// 2. Book object
// let bookObject = {
//         title : "Half of A Yellow Sun",
//         author : "Chimamanda Ngozi Adichie",
//         genre : "Historical fiction"
// }
// console.log(bookObject)

// 3. Animal object
// let animalObject = {
//         nameOfAnimal: "Cat",
//         species : "Felis catus",
//         ageofAnimal : 5
// }

// 4. Product object
// let productObject = {
//         nameOfProduct : "Galaxy Buds Pro",
//         priceOfProduct : 100000,
//         productDescription: {
//                 color : "black",
//                 weight : 0.3,
//                 size : 10 / 8 / 5
//         } 
// }
// console.log(productObject)

// 5. Address object
// let addressObject = {
//         street : "Cheedee street",
//         city : "Abuja",
//         state : "FCT",
//         zipCode : 900801
// }

// Arrays
// 1. Number sorter - Ascending order
// const numbers = [2, 5, 3, 1, 4]
// ascendingOrder = numbers.sort()
// console.log('Ascending order', ascendingOrder)

// // Descending order
// descendingOrder = numbers.sort((a, b) => b - a)
// console.log('Descending order', descendingOrder)

// 2. Word Finder
// let wordArray = ["joseph", "chidi", "ibe"]
// let searchWord = prompt('Enter a word to search')
// let wordFinder = searchWord.toLowerCase()

// if(wordArray.includes(wordFinder)){
//     console.log(`${wordFinder} is found on the list.`)
// }else{
//     console.log(`Sorry ${wordFinder} is not found on the list`)
// }

// 3. Largest Number Finder
// const numbers = [2, 4, 6, 8, 10]
// const largestNumber = Math.max(...numbers)
// console.log(`The largest number is ${largestNumber}`)

// 4. Duplicate Remover
// const newArray = [1, 2, 2, 3, 4, 4, 5]
// const duplicateRemover = newArray.filter((newArray, index, self) => self.indexOf(newArray) === index)
// console.log(duplicateRemover)

// 5. Array Reverser - Reverse the order of elements in an array
// const elementsArray = [10, 20, 30, 40, 50]
// const reversedArray = elementsArray.reverse(...elementsArray)
// console.log(reversedArray)

// While loops
// 1. Guessing Game - keep prompting the user for a guess until they guess the correct number
// let correctGuess = 3;
// let numberOfGuessesAllowed = 3;
// guessCount = 1
// while(guessCount <= numberOfGuessesAllowed){
//     let userGuess = prompt(`Guess a number between 1 and 5. You have ${guessCount} of 3 tries.`);
//     userGuess = Number(userGuess);
//     if(userGuess === correctGuess){
//         console.log(`Correct guess, weldone!`)
//         break
//     }else if(numberOfGuessesAllowed === guessCount){
//         console.log(`Game over`)
//         break
//     }else{
//         userGuess = window.alert('Wrong guess, try again');
//     }
//     guessCount++  
// }

// 2. Password Validator
// let allowedPasswordLength = "        "
// allowedPasswordLength = String(allowedPasswordLength).toLowerCase()
// numberOfTriesAllowed = 3
// userInputCount = 1
// while(userInputCount <= numberOfTriesAllowed){
//     let userPassword = prompt(`Please enter your password`)

//     if(userPassword.length === allowedPasswordLength.length){
//         console.log(`Welcome!`)
//         break
//     }else if(userInputCount === numberOfTriesAllowed){
//         console.log(`Number of attempts exceeded, please try after one hour.`)
//         break
//     }else{
//         console.log(`Your password must be at least 8 characters long`)
//     }
//     userInputCount++
// }

// 3. Number Counter - Count from 1 to a given number
// let givenNumber = 5
// let i = 1
// while(i <= givenNumber){
//     console.log(i)
//     i++
// }

// 4. Find all factors of a given number
// let numberInput = prompt("Enter a number to generate it's factors")
// numberInput = Number(numberInput)
// function factorsFinder(number){
//     let factors = []
//     let divisor = 1

//     while(divisor <= number){
//         if(number % divisor === 0){
//             factors.push(divisor)
//         }
//         divisor++
//     }
//     return factors
// }
// let answer = factorsFinder(numberInput)
// console.log(answer)

// 5. Simple Number Guessing Game
// let correctGuess = Math.floor(Math.random() * 7 + 1) 
// let numberOfGuessesAllowed = 3;
// guessCount = 1
// while(guessCount <= numberOfGuessesAllowed){
//     let userGuess = prompt(`Guess a number between 1 and 7. You have ${guessCount} of 3 tries.`);
//     userGuess = Number(userGuess);
//     if(userGuess === correctGuess){
//         console.log(`Correct guess, weldone!`)
//         break
//     }else if(numberOfGuessesAllowed === guessCount){
//         console.log(`Game over`)
//         break
//     }else{
//         userGuess = window.alert('Wrong guess, try again');
//     }
//     guessCount++  
// }


// Math Object
// 1. Random Number Generator using Math.random()
// let randomNumber = Math.ceil(Math.random() * 100000)
// console.log(randomNumber)

// 2. Quadratic Equation Solver using Math.sqrt()
// let a = prompt("Enter value of a","")
// let b = prompt("Enter value of b","")
// let c = prompt("Enter value of c","")

// let rootPart = Math.sqrt(Math.pow(b, 2) - 4 * a * c)
// let denom = 2 * a

// let root1 = (-b + rootPart) / denom
// let root2 = (-b - rootPart) / denom
// if(rootPart >= 0){
//     console.log(root1 , root2)
// }else{
//     console.log("No roots found")
// }

// 3. Distance Calculator: using pythagoras theorem to calculate the distance between two points
// let pointx1 = prompt("Enter value for point x1")
// let pointx2 = prompt("Enter value for point x2")
// let pointy1 = prompt("Enter value for point y1")
// let pointy2= prompt("Enter value for point y2")

// function calcDistance(x1, y1, x2, y2){
//     let sideA = pointx2 - pointx1
//     let sideB = pointy2 - pointy1
//     let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
//     return sideC 
// }
// calcDistance(pointx1, pointy1, pointx2, pointy2)
// let distance = calcDistance(pointx1, pointy1, pointx2, pointy2)
// console.log(distance)

// 4. Trigonometric Calculator: Calculate sine, cosine, tangent
// let angle = 45
// let sineResult = Math.sin(angle)
// console.log(sineResult)

// let cosineResult = Math.cos(angle)
// console.log(cosineResult)

// let tangentResult = Math.tan(angle)
// console.log(tangentResult)

// 5. Finance Calculator: Calculate simple interest, compound interest, loan payment.
// Simple Interest 
// SI = Principal * Rate * Time / 100

// let P = 10000
// let r = 10
// let t = 3

// function simpleInterest(principal, rate, time){
//     let interest = (P * r * t) / 100
//     return interest
// }
// simpleInterest(P, r, t)
// let sI = simpleInterest(P, r, t)
// console.log(sI)

// Compound Interest
// A = P(1 + r/n) ** n * t

// let P = 20000
// let r = 0.08
// let n = 12
// let t = 10 

// function compoundInterest(principal, rate, time, numPeriods){
//     let amount = P * Math.pow((1 + r/n), n * t)
//     return amount
// }
// compoundInterest(P, r, t, n)
// let cI = compoundInterest(P, r, t, n).toFixed(2)
// console.log(cI)

// Loan Payment
// let principal = 1000000
// let annualInterestRate = 5
// let numberOfPayments = 12 * 5

// function calcMonthlyPayment(principal, annualInterestRate, numberOfPayments){
//     let monthlyInterestRate = annualInterestRate / 12 / 100
//     let monthlyPayment = principal*(monthlyInterestRate/(1-Math.pow(1+monthlyInterestRate, -numberOfPayments)))
//     return monthlyPayment
// }
// calcMonthlyPayment(principal, annualInterestRate, numberOfPayments)
// let monthlyPayment = calcMonthlyPayment(principal, annualInterestRate, numberOfPayments)
// console.log('Monthly loan Payment:', monthlyPayment.toFixed(2))