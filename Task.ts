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
//end
//Task:6 Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results
//start

console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(16/2);
//end

//Task:7 Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//Start

let num1:number=8;
console.log(`${num1} is my favorite numver`);
//end

//Task:8Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//start
//end

//Task:9 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//start

let friends_Names:string[]=["Waqar","Ahmed","Ans"]

for (let n=0;n<friends_Names.length;n++){
    console.log(friends_Names[n]);
}

//end

//Task:10 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//start

let friends:string[]=["Waqar","Ahmed","Ans"]

for (let n=0;n<friends_Names.length;n++){
    console.log(`Hello ${friends_Names[n]}`);
}

let friend:string[]=["Waqar","Ahmed","Ans"]
for(let i in friend){
    console.log(`Hi! ${friend[i]}`);
}
//end

//Task:11 Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//start
let veh:Array<string>=["bick","cysle","car"];

veh.forEach((items)=>{
    console.log(`I would like to own a Honda ${items}`);
});
//end

//Task:12 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//start
let guest:string[]=["Ali","hamza","Bakhtawar"];

guest.forEach((guest)=>{
    console.log(`hello ${guest} I am inviting you to attend my sister wedding.`);
});
//end

//Task:13 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//start
let oldguestlist:string[]=["Ali","Hmaza","Bakhtawar"];
let Notcome:string="Bakhtawar";
let invite:string="Noor";

console.log(`${Notcome} is not attending the wedding`);

for(let i in oldguestlist){
    if(oldguestlist[i]===Notcome){
        oldguestlist[i]=invite;
    };
    console.log(`${oldguestlist[i]} you are invited to my sister wedding!`);
}

let newlist=oldguestlist.map((guest)=> guest=== Notcome ? invite:guest);

newlist.forEach((guest)=>{
    console.log(guest);
});

//end
//Task:16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//start

let lista:string[]=["sana","ahemd","waqas"];

console.log("We found a bigger table in wedding for dinner!");

lista.unshift("Ans"); //add in the first
lista.splice(Math.floor(lista.length/2),0,"waqar");//add in the meddle
lista.push("herry");//add in the last

lista.map((list)=>{
    console.log( `To gather ${list} all are in the same table`);
});

//end

//Task:17• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//start

while(lista.length>2){
    let removeGuest=lista.pop();
    console.log(`${removeGuest} you’re sorry you can’t invite them to dinner`);
}
lista.forEach((list)=>{
console.log(list);
});
lista.length=0;

console.log(` list is empty`);

//end

// task 18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let countries:string[]=["Pakistan","Australia","Turkey","UAE"];
console.log(countries);

console.log([...countries].sort());
console.log(countries);

console.log([...countries].sort().reverse());
console.log(countries);

console.log(countries.reverse());
console.log(countries.reverse());

console.log(countries.sort());
console.log(countries.sort((a,b)=> b.localeCompare(a)));

//end
