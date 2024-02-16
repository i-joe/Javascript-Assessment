// 1. How can you select an element by its ID using JavaScript?
// By using the document.getElementById method or the querySelector(#id) method.

// 2. How can you select all elements of a specific class name?
// By using the document.querySelectorAll(.className) method.

// 3. How can you select the first child element of a given element? 
// By using the firstElementChild property this way: parentElement.firstElementChild

// 4. How can you select all elements that match a specific CSS selector?
// By using the querySelctorAll() method.

// 5. How can you change the text content of an element?
// By using the innerText property.

// 6. How can you modify the value of an HTML attribute?
// By using the setAttribute() method.

// 7.  How can you add a new element to the DOM?
// By using the document.createElement() method.

// 8. How can you remove an element from the DOM?
// By using the remove() method.

// 9. How can you access the parent element of a given element?
// By using the "parentElement" property.

// 10. How can you access the next sibling element of a given element?
// By using the "nextElementSibling" property

// 11. How can you iterate over all child elements of a given element?
// By using the "children" property.

// 12. How can you find all elements matching a specific condition within a
//subtree?
// By using the querySelctorAll() method.

// 13. How can you change the inline style of an element using JavaScript?
// By using the "style" property and the desired property name and value.

// 14. How can you add or remove CSS classes from an element?
// By using the "classList" property and the add() or remove() method as desired.

// 15. How can you toggle between two different styles for an element?
// By using the classList.add(), classList.remove() methods

// 16. How can you dynamically create and add a CSS stylesheet to the document?
// By creating a "style" element, setting its css rules and then appending the style to the "head" of the document.

// 17. Explain the syntax and purpose of the forEach method in JavaScript
// Syntax
// array.forEach(function(currentValue, index, arr) {
   // your logic to be executed for each element
// })
// Purpose
// currentValue: The value of the current element being processed.
// index (optional): The index of the current element within the array.
// arr (optional): The original array being iterated over

// 18. How does forEach differ from traditional for loops in terms of scope and
// behavior?
// Scope:
// forEach: The callback function passed to forEach does not create a new scope. This means variables declared within the callback have access to variables outside the callback, potentially leading to unintended scope issues.
// for loop: The code within a for loop, including its initialization, condition, and increment expressions, runs in its own scoped block. Variables declared within the loop are not accessible outside, providing better isolation and clarity.

// Behavior:
// forEach:
// Executes the callback function once for each element in the array.
// Stops iterating if the array is modified during the loop (elements added or removed).
// Primarily used for performing actions on each element rather than returning a new array.
// for loop:
// Offers more control over the iteration process.
// Can access and modify the index of the current element.
// Allows customizable conditions for continuing or stopping the loop.
// Can be used for creating a new array based on the loop logic.

// 19. Write code to double each element in an array using forEach
// let element = [1,2,3,4,5]
// element.forEach(function(item){
//     item *= 2
//     console.log(item)
// })

// 20. Create a new array containing only strings from a mixed array using forEach
// let mixedArray = [10, "carrot", true, "apple", 20]
// let onlyStringArray = []
// mixedArray.forEach(function(element){
//     if(typeof element === "string"){
//         onlyStringArray.push(element)
//     }
// })
// console.log(onlyStringArray)

// 21. Filter an array to include only even numbers using forEach
// let num = [1,2,3,4,5,6]
// num.forEach(function(item){
//     if(item % 2 === 0){
//         console.log(item)
//     }
// })

// 22. Demonstrate how to access the current index within a forEach callback
// const arr = [2,3,5,6,9]
// arr.forEach(function(item, index){
//     console.log(`item at index ${index} = ${item}`)
// })

// 23.  Explain how to break out of a forEach loop early
// By using the 'some()' method and set a return statement to break the loop at a point before full length of array.
// let myArray = [1,2,3,4,5]
// myArray.some(function(item){
//     console.log(item)
//     return item === 3
// })

// 24. Can you modify the original array directly within a forEach callback? Why or why not?
// Yes, you can modify the original array directly because the callback stores the elements in the array at a time and this makes it possible to modify the values of elements in the array.

// 25. Describe common use cases for forEach in JavaScript applications
// ForEach may be used for formatting data like changing to uppercase or lowercase.
// ForEach can also be used to iterate over elements and perform validation on them.
// ForEach can be used in rendereing data. You can iterate over an array of items an generate HTML elements or components for each item.

// 26.  When would you choose forEach over other looping methods?
// When you only want to print the array elements or items
// When you don't require the index positions of the array items
// When you only need to iterate over the array to carry out an action on each item in the array without having to create another array.

// 27. Explain the syntax and purpose of the for...of loop in JavaScript
// for(let variable of iterableObject){
    // Your logic
// }
// variable: The variable name to store the value of the current element in each iteration
// iterableObject: Any object such as an array, string, map etc, that allows for iteration over its elements

// Purpose:
// It offers a convenient way to access and process each element without needing to manage indexes like traditional for loops
// It is useful for printing or performing actions on each element in an array and also for destructuring values from iterables

// 28. How does for...of differ from traditional for loops and forEach?
// It differs in the syntax
// for...of loops can be used to iterate over any iterable object including arrays, strings, maps, sets etc whereas for loops is best suited to iterate over arrays and array-like objects and forEach basically for arrays and its elements

// 29.  Iterate over an array of numbers and print their squares using for...of
// const numbers = [1,2,3,4,5]
// for(let squares of numbers){
//     squares *= 2
//     console.log(squares)
// }

// 30. Create a new array containing the string lengths of each element in another array using for...of
// let stringArray = ["apple", "mango", "grapes"]
// let stringLengthsArray = []

// for(let stringLength of stringArray){
//     stringLengthsArray.push(stringLength.length)
//     console.log(stringLengthsArray)
// }

// 31. Iterate over the keys of an object using for...of
// const object = {
//     userName : "Orion Ibe",
//     age : 18,
//     isActive : true
// }

// Using for...in loop
// for(let key in object){
//     console.log(key)
// }

// 32.  Iterate over the values of an object using for...of
// const object = {
//     userName : "Orion Ibe",
//     age : 18,
//     isActive : true
// }

// Using 'Object.values()' method
// for(let value of Object.values(object)){
//     console.log(value)
// }

// 33. Explain how to access both keys and values in a for...of loop
//Using 'Object.entries()' method to access the keys and values while saving them in an array variable with key and value as names
 
// for(let [key, value] of Object.entries(object)){
//     console.log(`${key} : ${value}`)
// }

// 34. Can you modify the original array or object within a for...of loop?
// Yes

// 35. Describe common use cases for for...of loops in JavaScript applications
// Iterating over arrays - to target the values for any needed process
// Destructuring purposes - When there is a need to extract properties and/or values from an object
// For processing strings - It can be used to iterate over characters for formatting purposes etc.

// 36.  When would you choose for...of over other looping methods?
// When you need to break out of the loop early
// When you don't need to access the index positions of each element in the loop
// When you want a simple and straight forward code

// 37. Write a for loop that prints numbers from 1 to 10
// for(let x = 1; x <=10; x++){
//     console.log(x)
// }

// 38. Write a for loop that sums all numbers in an array
// let numbers = [1,2,3,4,5]
// let sum = 0
// for(let i = 0; i <= numbers.length; i++){
//     sum += i
// }
// console.log(sum)

// 39. Find the largest number in an array using a for loop
// let numbers = [1,2,3,4,5]
// let largestNumber = numbers[0]
// for(let y = 1; y < numbers.length; y++){
//    if(numbers[y] > largestNumber){
//     largestNumber = numbers[y]
//    } 
// }
// console.log(largestNumber)

// 40. Create a new array containing the squares of numbers in another array using a for loop
// let originalArray = [1,2,3]
// let newArray = []
// for(x = 1; x <= originalArray.length; x++){
//     newArray.push(x * 2)   
// }
// console.log(newArray)

// 41. Iterate over an object's properties and values using a for loop
// const object = {
//     userName: "Orion",
//     age: 18,
//     isActive: true
// }

// for(let key in object){
//     console.log(`${key}: ${object[key]}`)
// }

// 42. Explain the difference between initial, conditional, and increment expressions in for loops

// Using this for loop to explain:

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Initialization: let i = 0 this is the starting point for the loop by defining a variable i and assigning it the value 0.
// Condition: i < 10 checks if i is less than 10. As long as this condition holds true (initially and after each increment), the loop continues.
// Increment: i++ increases the value of i by 1 after each iteration, moving the loop closer to the end (i < 10).
// When the i reaches 10 after 10 iterations, the condition becomes false, and the loop terminates.

// 43. Demonstrate how to nest for loops to create multidimensional arrays
// let parentArray = []
// for(let x = 0; x < 3; x++){
//     let nestedArray = []
//     for(let y = 0; y < 4; y++){
//         nestedArray.push(x * y)
//     }
//     parentArray.push(nestedArray)
// }
// console.log(parentArray)

// 44.  Break out of a for loop early using the break statement.
// for(let z = 0; z < 5; z++){
//     if(z === 3){
//         break
//     }
//     console.log(z)      
// }

// 45. Continue to the next iteration of a for loop using the continue statement
// for(let z = 0; z < 5; z++){
//     if(z === 3){
//         continue
//     }
//     console.log(z)      
// }

// 46.  Describe common use cases for for loops in JavaScript applications
// Automating repetitive actions like sending emails, updating database entries, or performing calculations for a series of values
// Updating game state, moving objects, or creating animation frames based on repetitive calculations and conditional checks within loops
// Accessing and manipulating values based on their index in the array

// 47.  Select an element by its ID using getElementById
// let myElement = document.getElementById("element")

// 48. Select all elements of a specific class name using getElementsByClassName
// let sameClass = document.getElementsByClassName("classes")

// 49. Select the first child element of a given element using firstChild
// let parentElement = document.getElementById("my-element")
// let firstChild = parentElement.firstChild

// 50. Select all elements that match a specific CSS selector using querySelector
// let myStyle = document.querySelectorAll(".element")

// 51. Access the parent element of a given element using parentNode
// let childElement = document.getElementById("my-child")
// let parentElement = childElement.parentNode

// 52. Access the next sibling element of a given element using nextSibling
// let element = document.getElementById("my-element")
// let sibling = element.nextSibling

// 53. Iterate over all child elements of a given element using childNodes.
// let parentElement = document.getElementById("my-parent")
// for(let i = 0; i < parentElement.childNodes.length; i++){
//     let childNode = parentElement.childNodes[i]

//     if(childNode.nodeType === Node.ELEMENT_NODE){
//         console.log(childNode) 
//     }  
// }

// 54. Find all elements matching a specific condition within a subtree using a recursive function
// function findElementsMatchingCondition(rootElement, condition, matchingElements = []){
// Check if the root element satisfies the condition
// if (condition(rootElement)) {
//     matchingElements.push(rootElement);
// }

// Recursively traverse child elements
// for (let i = 0; i < rootElement.children.length; i++) {
//     findElementsMatchingCondition(rootElement.children[i], condition, matchingElements);
// }

// return matchingElements;
// }

// Example usage:
// const rootElement = document.getElementById('root'); // Replace 'root' with the ID of the root element
// const condition = element => element.tagName === 'DIV'; // Example condition: Find all <div> elements

// const matchingElements = findElementsMatchingCondition(rootElement, condition);
// console.log(matchingElements);
 
// 55. Explain the difference between childNodes, children, and getElementsByTagName
// childNodes returns all types of child nodes of an element, including elements, text nodes, and comments.
// children returns only the child elements (element nodes) of an element, excluding text nodes and comments.
// getElementsByTagName returns elements with a specified tag name within the document or a subtree, regardless of their position or type

// 56. Demonstrate how to modify element content (text and attributes) using DOM manipulation
// Text content:
// let element = document.getElementById('exampleElement')
// element.textContent = 'Updated Text'

// Attributes:
// let image = document.getElementById('exampleImage')
// image.setAttribute('src', 'new-src.jpg')
// image.setAttribute('alt', 'New Alt Text')

// 57.  Add a new element to the DOM using createElement and appendChild
// let container = document.getElementById("my-parent")
// let newElement = document.createElement("p")
// newElement.textContent = `<p>This is my paragraph</p>`

// container.appendChild(newElement)

// 58. Remove an element from the DOM using removeChild
// let container = document.getElementById("my-parent")
// let newElement = document.createElement("p")

// container.removeChild(newElement)

// 59. Change the inline style of an element using style
// newElement.style.backgroundColor = 'orange'

// 60. Add or remove CSS classes from an element using classList
// let element = document.getElementById('exampleElement');
// element.classList.remove('old-class');
// element.classList.add('new-class');

// 61. Toggle between two different styles for an element using JavaScript
// element.addEventListener('click', function(){
//     element.classList.toggle('style1')
//     element.classList.toggle('style2')
// })

// 62.  Use a for loop to create 10 new paragraph elements and append them to the body of the document.
// for(let i = 0; i < 10; i++){
//     let paragraph = document.createElement('p')
//     paragraph.innerHTML = `paragraph ${i + 1}`
//     document.body.appendChild(paragraph)
// }

// 63. Use forEach to iterate over all images on a page and add a border to each one.
// let images = document.querySelectorAll('img')
// images.forEach(function(image){
//     image.style.border = `1px solid blue`
// })