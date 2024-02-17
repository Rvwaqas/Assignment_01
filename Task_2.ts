// Task:19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//start
console.log("my guest list is empty in the last exercise : 0");
//end


// Task:20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//start

let country:Array<string>=["Usa","Australia","Canada","America"];
console.log(country);

//end

 
//Task 21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//start




let cities:{city_name:string}[]=[
    {city_name:"lahore"},
    {city_name:"Karachi"},
    {city_name:"Islamabad"}
]

console.log(cities);

//end

// Task:22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//start
let arr:string[]=["2","3","h3"];

console.log(arr.indexOf("4")); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

//remove error

console.log(arr.indexOf("2"));

//end

// Task:23

let num:number=3;
console.log("Is num == 3? I predict True.");
console.log(num===3);

let car1:string="Honda";
console.log("Is num == 3? I predict True.");
console.log(car1==="Honda");

let vegetable:string="ladyfinger";
console.log("Is num == 3? I predict True.");
console.log(vegetable==="ladyfinger");

let age:number=28;
console.log("Is num == 3? I predict True.");
console.log(age===28);

let mobile:string="infinix";
console.log("Is num == 3? I predict True.");
console.log(mobile==="infinix");

let num4:number=3;
console.log("Is num4 == 3? I predict False.");
console.log(num4!==3);

let car2:string="Honda";
console.log("Is car2 == suzuki? I predict False.");
console.log(car2!=="Honda");

let vegetable1:string="ladyfinger";
console.log("Is vegatable1 == orang? I predict False.");
console.log(vegetable1!=="ladyfinger");

let age1:number=28;
console.log("Is age1 == 3? I predict False.");
console.log(age1!==28);

let mobile1:string="infinix";
console.log("Is mobile == halva? I predict False.");
console.log(mobile1!=="infinix");

//end


//Task:24
// Tests for equality and inequality with strings
let st:string="hello";
console.log(`${st==='hello'}`)
console.log(`${st!=='hello'}`)

//Tests using the lower case function
let game:string="FOOTBALL";
let result:boolean=game.toLowerCase()==="Football";
console.log(result);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a:number=12;
let b:number=3;
let c:boolean= (a>=b);
console.log(c);

//Tests using "and" and "or" operators
let d:number=23;
let e:number=4;
let h:boolean= (d===23 && e<d);
let f:boolean= (d=== 3 || e>d);
console.log(h);
console.log(f);

// Test whether an item is in a array
//Test whether an item is not in a array

let ha:string[]=["na","ha","ba"];
let la:boolean=ha.includes('ha');
let laa:boolean=ha.includes('ans');
console.log(la);
console.log(laa);






