// Task:19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//start
console.log("my guest list is empty in the last exercise : 0");
//end
// Task:20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//start
var country = ["Usa", "Australia", "Canada", "America"];
console.log(country);
//end
//Task 21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//start
var cities = [
    { city_name: "lahore" },
    { city_name: "Karachi" },
    { city_name: "Islamabad" }
];
console.log(cities);
//end
// Task:22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//start
var arr = ["2", "3", "h3"];
console.log(arr.indexOf("4")); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
//remove error
console.log(arr.indexOf("2"));
//end
// Task:23
var num = 3;
console.log("Is num == 3? I predict True.");
console.log(num === 3);
var car1 = "Honda";
console.log("Is num == 3? I predict True.");
console.log(car1 === "Honda");
var vegetable = "ladyfinger";
console.log("Is num == 3? I predict True.");
console.log(vegetable === "ladyfinger");
var age = 28;
console.log("Is num == 3? I predict True.");
console.log(age === 28);
var mobile = "infinix";
console.log("Is num == 3? I predict True.");
console.log(mobile === "infinix");
var num4 = 3;
console.log("Is num4 == 3? I predict False.");
console.log(num4 !== 3);
var car2 = "Honda";
console.log("Is car2 == suzuki? I predict False.");
console.log(car2 !== "Honda");
var vegetable1 = "ladyfinger";
console.log("Is vegatable1 == orang? I predict False.");
console.log(vegetable1 !== "ladyfinger");
var age1 = 28;
console.log("Is age1 == 3? I predict False.");
console.log(age1 !== 28);
var mobile1 = "infinix";
console.log("Is mobile == halva? I predict False.");
console.log(mobile1 !== "infinix");
//end
//Task:24
// Tests for equality and inequality with strings
var st = "hello";
console.log("".concat(st === 'hello'));
console.log("".concat(st !== 'hello'));
//Tests using the lower case function
var game = "FOOTBALL";
var result = game.toLowerCase() === "Football";
console.log(result);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var a = 12;
var b = 3;
var c = (a >= b);
console.log(c);
//Tests using "and" and "or" operators
var d = 23;
var e = 4;
var h = (d === 23 && e < d);
var f = (d === 3 || e > d);
console.log(h);
console.log(f);
// Test whether an item is in a array
//Test whether an item is not in a array
var ha = ["na", "ha", "ba"];
var la = ha.includes('ha');
var laa = ha.includes('ans');
console.log(la);
console.log(laa);
