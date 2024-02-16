// Task-1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Start
var message = "Hello Eric";
console.log("".concat(message, " , would you like to learn some Python today? "));
//  End
//Task-2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.                            
// Start:
var name1 = "Waqas";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
//end
// Task:3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Start
var auther = "hamza";
console.log(auther + ' once said, “A person who never made a mistake never tried anything new.”');
//end
//Task:4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//start
var famous_person = "Ahmed";
console.log("".concat(famous_person, " once said, \u201CA person who never made a mistake never tried anything new.\u201D"));
//end
//Task:5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//start
var name2 = "\t\n  waqas hussain \t\n";
var name3 = name2.trim();
console.log(name3);
