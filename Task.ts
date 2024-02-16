// Task-1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Start
let message:string="Hello Eric";
console.log(`${message} , would you like to learn some Python today? `);
//  End


//Task-2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.                            
// Start:

let name1:string="Waqas";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());



//end

// Task:3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Start

let auther:string="hamza";
console.log(auther + ' once said, “A person who never made a mistake never tried anything new.”');
//end

//Task:4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//start
let famous_person:string="Ahmed";
console.log(`${famous_person} once said, “A person who never made a mistake never tried anything new.”`)
//end

//Task:5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//start

let name2:string="\t\n  waqas hussain \t\n";
let name3:string=name2.trim();
console.log(name3);