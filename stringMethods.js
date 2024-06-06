var text = "I am currently involved in BSc.CSIT 5th semester";
//alert(text);
console.log(text);

console.log(document);

//print the length of the string
console.log("the length of the text is:",text.length);

//print the character at index 5 of the given string
console.log("the character at index 5 is:",text.charAt(5));

//print the character code at index 5 of the given string
console.log("the charater code at index 5 is:",text.charCodeAt(5));

//slicing the string
console.log("the string sliced is:",text.slice(5,20));

//changing into uppercase
console.log("the given string in uppercase is:",text.toUpperCase());

//changing into lowercase
console.log("the given string in lower case is:",text.toLowerCase());

//string trimming
console.log("the trimmed string is:",text.trim());

//string concat
console.log("the concated string is:",text.concat("Welcome to my class."));

//string padding in the beginning
console.log("the string with padding is:",text.padStart(50,0));
