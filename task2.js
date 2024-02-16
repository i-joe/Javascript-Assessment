// ARRAYS
// 1. Create an array containing the numbers 1-10
// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2. let thirdElement = numArr[2] // Accessing the third element.
// 3. numArr[9] = 0 // Changing the value of the last item to 0. 
// 4. numArr.push(11) // Adding a new element(11) to the end of the array.
// 5. numArr.shift() // Removing the first element from the array.
// 6. numArr.indexOf(5) // To find the index of number 5 in the array.
// 7. numArr.includes(8) // To check if the array includes number 8.
// 8. numArr.reverse() // To reverse the order of arrangement.
// 9. numArr.sort((a, b) => a - b) // To print out only even numbers.
// 10. numArr.filter((num) => num % 2 === 0) // Creating an array of even numbers.

// WHILE LOOPS
// 1. A while loop that prints the numbers from 1 to 10
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let x = 1;
// while(x <= numbers.length){
//     console.log(x)
//     x++
// }

// 2. To sum all the numbers in an array
// let numbers = [1, 2, 3, 4, 5]
// let i = 0;
// let sum = 0
// while(i < numbers.length){
//     sum += numbers[i]
//     i++
// }
// console.log(`Sum of ${numbers} = ${sum}`)

// 3. To find the largest number in an array
// const numArr= [8, 25, 4, 15, 50]
// let i = 0;
// while(i < numArr.length){
//     const largestNum = Math.max(...numArr)
//     console.log(largestNum)
//     i++
// }

// 4. To prompt the user for input until they enter a valid email address
// let validFormat = ["user@mail.com"]
// userInput = prompt(`Please enter your email`)
// let y = 0;
// while(y <= validFormat.length){
//     if(userInput === "user@mail.com"){
//         console.log(`welcome`)
//     }else{
//         console.log(`Please enter a valid email address`)
//     }
//     y++
// }

// 5. To simulate a dice roll until a 6 is rolled.
// let roll = Math.floor(Math.random() * 6 + 1)
// let x = 0;
// while(x <= roll){
//     if(roll === 6){
//         console.log(`${roll}, You win.`)
//     }else{
//         console.log(`${roll}, keep trying`)
//     }
//     x++
// }

// FOR-EACH METHOD
// 1. To print each element of an array
// let array = ["Nigeria", "Australia", "Canada", "Japan", "Angola"]
// array.forEach(function(eachElement){
//     console.log(eachElement)
// })

// 2. Double each element in the array
// Using the same array in 1
// let arrayDouble = [] // Empty array created to collect the duplicated items.
// array.forEach(function(element){
//     arrayDouble.push(element) //This will push the copied items into the empty array.
//     return arrayDouble.push(element)
// })
// console.log(arrayDouble)

// 3.Create a new array containing only the strings from a mixed array
// let mixedArray = ["Red", 5, 10, "Blue", true, "Green"]
// let stringsArray = []
// mixedArray.forEach(function(item){
//     if(typeof item === "string"){
//         stringsArray.push(item)
//     }
// })
// console.log(stringsArray)

// 4. To find the sum of all even numbers in an array
// let numberArray = [1, 2, 3, 4, 5]
// numberArray.forEach(function(item){
//     if(item % 2 === 0){
//         sumOfEvenNumbers = item + item
//     }
// })
// console.log(sumOfEvenNumbers)

// 5. To filter an array based on a certain condition
// let objectArray = [
//     {
//         userName : "Joseph",
//         activityStatus : true
//     },

//     {
//         userName : "Grace",
//         activityStatus : true
//     },

//     {
//         userName : "Cole",
//         activityStatus : false
//     },

//     {
//         userName : "Joan",
//         activityStatus : false
//     }

// ]
// objectArray.forEach(function(item){
//     if(item.activityStatus === true){
//         console.log(`Hello ${item.userName}, you are active`)
//     }
// })

// REST PARAMETERS
// 1. To define a function that accepts any number of arguments using rest parameters
// function functionName(...restParameter){
//     let parameter = value
//     return parameter
// }
// functionName(argument1, argument2, argument3, argument4)

// 2. To create a function that calculates the average of a list of numbers
// function averageCalculator(...numbers){
//     let average = (`${numbers}`) / 2
//     return average
// }
// console.log(averageCalculator(20 + 20))

// 3. Using rest parametere to log all the arguments passed into it
// function restFunction(...items){
//     let list = `Here are your items: ${items}`
//     return list
// }
// console.log(restFunction("flour", "honey", "sugar", "milk", "oats"))

// 4. Combining multiple arrays into a single array using rest parameter.
// const firstArray = [1, 2, 3]
// const secondArray = ["Joseph", "Ibe"]
// const thirdArray = [true, 10, "Apple"]
// function merger(...arraycombination){
//     const merge = [
//         ...firstArray,
//         ...secondArray,
//         ...thirdArray
//     ]
//     return merge
// }
// console.log(merger(firstArray, secondArray, thirdArray))

// 5. To create a function that collects varying objects and merges them into one.
// let object1 = {
//     userName : "Joseph",
//     pin : 123
// }

// let object2 = {
//     item : "Mobile Phone",
//     price : 100000,
//     dateOfPurchase : "27th January, 2024"
// }

// function combination(...objectMerge){
//     let combinedObjects = {
//         ...object1,
//         ...object2
//     }
//     return combinedObjects
// }
// console.log(combination(object1, object2))

// OBJECT LITERALS
// 1. To create an object literal representing a person
// let personObject = {
//     userName : "Joseph Ibe",
//     userAge : 34,
//     userAddress : "FCT Abuja"
// } 

// 2. Access the name property of the personObject
// let nameAccess = personObject.userName
// console.log(nameAccess)

// 3. To change the value of the age property
// let ageChange = personObject.userAge = 30
// console.log(ageChange)

// 4. To add a new property to the object called "email"
// let newProperty = personObject.email = "ibejoseph77@gmail.com"
// console.log(personObject)

// 5. To delete the address property from the object
// delete personObject.userAddress
// console.log(personObject)

// FOR LOOPS
// 1. To print numbers from 1 to 10
// let numStore = []
// for(let i = 1; i <= 10; i++ ){
//     console.log(numStore.push(i))
// }

// 2. To sum all the numbers in an array
// const array = [2, 4, 6]
// let sum = 0
// for(let x = 0; x < array.length; x++){
//     sum += array[x]
//     console.log(sum)
// }

// 3. To find the largest number in an array
// let newArray = [15, 3, 60, 95]
// let largestNumber = newArray[0]
// function largestNumFunction(largestStore){
//     for(let z = 0; z < newArray.length; z++){
//         if(newArray[z] > largestNumber){
//             largestNumber = newArray[z]
//         }
//     }
//     return largestNumber
// }
// console.log(largestNumFunction(newArray)) 

// 4. To create a new array containing the squares of the numbers in another array
// let initialArray = [2, 4, 6]
// let squaredArray = []
// function squareFunction(squaredStore){
//     for(x = 0; x < initialArray.length; x++){
//         square = initialArray[x] * initialArray[x]
//         squaredArray.push(square)
//     }
//     return squaredArray
// }
// console.log(squareFunction(initialArray))

// 5. To write a for loop that iterates over an objects properties and values.
// let objectArray = [
//     {
//         userName : "Joseph",
//         userID : 123,
//         userAge : 24,
//         isActive : true
//     }
// ]
// for(let i = 1; i <= objectArray.length; i++){
//     objectAccess = objectArray[0]
//     console.log(objectAccess)    
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let show of numbers){
//     console.log(`Multiplication table for number ${show}`)
//     for(let newNumbers of numbers){
//         let result = `${show} x ${newNumbers} = ${show * newNumbers}`
//         console.log(result)
//     }
// }

// FOR OF LOOPS
// 1. Print each element of an array
// const numArray = [5,10,15,20]
// for(let print of numArray){
//     console.log(print)
// }

// 2. To create a new array containing the string lengths of each element in another array
// const anotherArray = ["apple", "grapes", "berries"]
// const newArray = []
// for(let stringLength of anotherArray){
//     let show = stringLength.length
//     newArray.push(show) 
// }
// console.log(newArray)

// 3. To iterate over the keys of an object
// let myObject = {
//     userName : "Joseph",
//     country : "Nigeria",
//     countryCode : 234
// }
// let objectArray = Object.keys(myObject)
// for(let key of objectArray){
//     console.log(key)
// }

// 4. To iterate over the values of an object.
// let myObject = {
//     userName : "Joseph",
//     country : "Nigeria",
//     countryCode : 234
// }
// let objectArray = Object.keys(myObject)
// for(let key of objectArray){
//     value = myObject[key]
//     console.log(value)
// }

// 5. To iterate over both keys and values of an object
// let myObject = {
//     userName : "Joseph",
//     country : "Nigeria",
//     countryCode : 234
// }
// let objectArray = Object.keys(myObject)
// for(let key of objectArray){
//     value = myObject[key]
//     console.log(`${key} : ${value}`)
// }

// 41. Differences between a while loop and a for loop
// 1. A while loop has it's initializer written outside the loop parenthesis and the update block written within the loop block, whereas; 
// A for loop has all its parts written within the parenthesis of the loop.

// 42. When to use a forEach method over a traditional for loop
// A forEach method is used when you want to get the elements, their index positions from an array as well as access to the full array at the same time.

// 43. Benefits of using rest parameters?
// They help in storing multiple arguments or elements

// 44. How to create nested objects using object literals
// They are created using the spread operator
// let objectParent = {
//     ...objectChild1,
//     ...objectChild2
// } 
// objectChild1 and objectChild2 are the nested objects

// 45. The different ways to iterate over and array in JavaScript
// For loop, for...of loop, for...in loop, forEach method, filter method, map method, reduce method

// 46. Write a function that removes duplicates from an array
// let duplicatesArray = [1,1,2,2,3,3]
// function duplicateRemover(arrayStore){
//     return arrayStore.filter(function(eachItem, index){
//         return arrayStore.indexOf(eachItem) === index
//     })
    
// }
// console.log(duplicateRemover(duplicatesArray))

// 47. Write a function that merges two arrays without duplicates.
// const firstArray = [1,2,3,4]
// const secondArray = [3,4,5,6]

// function mergeFunction(...mergedArray){
//     const merger = [...mergedArray] // This merges both arrays into one array
//     return merger.filter(function(mergerItems, index){
//         return merger.indexOf(mergerItems) === index
//     })
// }
// console.log(mergeFunction(...firstArray, ...secondArray))

// 48. Write a function that checks if two arrays have any common elements
// const firstArray = [1,2,3,4]
// const secondArray = [3,4,5,6]

// function copyCheck(array1, array2){
//     for(let result1 of array1){
//         for(let result2 of array2){
//             if(result1 === result2)
//             return true
//         }
//     }
//     return false 
// }
// console.log(copyCheck(firstArray, secondArray))

// 49. Write a function that creates a new array containing only the unique elements
// from two arrays
// const firstArray = [1,2,3,4]
// const secondArray = [3,4,5,6]

// function uniqueElementsFunction(array1, array2){
//     let mergeAndConvertArrays = new Set([...array1, ...array2])
//     let uniqueArray = Array.from(mergeAndConvertArrays)
//     return uniqueArray
// }
// let uniqueElements = uniqueElementsFunction(firstArray, secondArray)
// console.log(uniqueElements)

// 50. Write a function that flattens a nested array into a single-level array
// let parentArray = [10, 20, 30]
// let nestedArray = [5, 15, 25]

// function arrayMergerFunction(){
//     merger = parentArray.concat([...nestedArray])
//     return merger
// }
// let flattenedArray = arrayMergerFunction(parentArray, nestedArray)
// console.log(flattenedArray)