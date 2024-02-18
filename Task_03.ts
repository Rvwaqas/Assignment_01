// Task: 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


let alien_color :string="green";

if(alien_color==="green"){
    console.log("the player just earned 5 points");
}

if(alien_color==="red"){
    console.log(" ");
}

//Task:26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.

//start


if(alien_color==="green"){
    console.log("the player just earned 5 points");
}else if(alien_color==="yellow"){
    console.log("the player just earned 10 points");
}else{
    console.log(" ");   
}

//end

//Task 27:
let aliencolor:string="yellow";

if(aliencolor==="green"){
    console.log("the player just earned 5 points");
}else if(aliencolor==="yellow"){
    console.log("the player just earned 10 points");
}else if(aliencolor==="red"){
    console.log("the player just earned 15 points");
}else{
    console.log(" ");
}

//Task 28

let person_age:number=28;

if(person_age<2){
console.log("The person is a baby");
}else if(person_age>=2 && person_age<4){
    console.log("The person is a toddler");
}else if(person_age>=4 && person_age<13){
    console.log("The person is a kid");
}else if(person_age>=13 && person_age<20){
    console.log("The person is a teenager.");
}else if(person_age>=20 && person_age<65){
    console.log("The person is an adult.");
}else{
    console.log("The person is an elder.");
}
//end

//Task: 29

let favorite_fruit:string[]=["apple","orange","grapes"];

if(favorite_fruit.includes("apple")){
    console.log("I really like Apple!");
}


if(favorite_fruit.includes("orange")){
    console.log("I really like orange!");
}
if(favorite_fruit.includes("grapes")){
    console.log("I really like orange!");
}
if(favorite_fruit.includes("orange")){
    console.log("I really like orange!");
}
if(favorite_fruit.includes("orange")){
    console.log("I really like orange!");
}
//end

//task:30

let username:string[]=["admin","waqas","ahmed","ans","sana"];

for(let i in username){
    if(username[i]==="admin"){
        console.log(`Hello ${username[i]} , would you like to see a status report?`);
    }else{
        console.log(`Hello ${username[i]}, thank you for logging in again.`)
    }
}

//end

//task:31

let user:string[]=["ahemd","ans","waqar"];

if(user.length===0){
    console.log("We need to find some users!");
}else{ 

if(user.includes("ahmed")){
    console.log("welcome");
   
}

if(user.includes("ans")){
    console.log("welcome");
}
}
user.length=0;
if(user.length===0){
    console.log("We need to find some users!");
}


//task 32

let current_user:string[]=["waqar","ahemd","ans","waqas,","sana"];
let new_user:string[]=["waqar","ahmed","muslim","Go","help"];

 for(let i=0; i<new_user.length;i++){
    let result:boolean=false;
    for(let j=0;j<current_user.length;j++){
        if(current_user[j]===new_user[i]){
            result=true;
        }
    }
    if(result){
        console.log(`${new_user[i]} a username has not been used`);
    }else{
        console.log(`${new_user[i]} the username is available`);
    }


 
}//outer for

//end

//Task 33

let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<ordinal_number.length;i++){
    if(ordinal_number[i]===1){
        console.log(`${ordinal_number[i]}st`);
    }else if(ordinal_number[i]===2){
        console.log(`${ordinal_number[i]}nd`);
    }else if(ordinal_number[i]===3){
        console.log(`${ordinal_number[i]}rd`);
    }else if(ordinal_number[i]===4){
        console.log(`${ordinal_number[i]}th`);
    }else if(ordinal_number[i]===5){
        console.log(`${ordinal_number[i]}th`);
    }else if(ordinal_number[i]===6){
        console.log(`${ordinal_number[i]}th`);
    }else if(ordinal_number[i]===7){
        console.log(`${ordinal_number[i]}th`);
    }else if(ordinal_number[i]===8){
        console.log(`${ordinal_number[i]}th`);
    }else if(ordinal_number[i]===9){
        console.log(`${ordinal_number[i]}th`);
    }

}
//end

//Task34
let pizzal:string[]=["chopped broccoli", "pepperoni", "cooked sausage"];

for(let g in pizzal){
    console.log(`I like ${pizzal[g]} pizza`);
}

console.log(" I really love pizza!");
//end

//Task 35

let pet:Array<string>=["dog","cat","goat"];

for(let i in pet){
    console.log(`A ${pet[i]} would make a great pet.`)
}

console.log(" Any of these animals would make a great pet!");

//end

//task 36
//task:37
function make_shirt(size:string="Large",mess:string="I love javascript"):void{
    console.log(`your shirt size is ${size} and its ${mess}`)

}

make_shirt("small","Nice shirt");
make_shirt()
make_shirt("medium");

// task:38
function describe_city(city:string,country:string="India"):void{

    console.log(`${city} is in ${country}`);

}

describe_city("Dehli");
describe_city("Karachi","Pakistan");
describe_city("Lahore","Pakistan");

//end

//Task:39
function city_country(city:string,country:string):string{
    return (`"${city},${country}"`);

}

const rest1=city_country("Karachi","Pakistan")
console.log(rest1);
const rest2=city_country("New York","USA")
console.log(rest2);
const rest3=city_country("Canberra","Australia");
console.log(rest3);

//Task 40

type Album={
    artist:string;
    title:string;
    tracks?:number;
}

function make_album(artist:string,title:string,tracks?:number):Album{
    let album:Album={
        artist:artist,
        title:title,
        
    };
    if(tracks){
        album.tracks=tracks;
    }

    return album

    

}

let result_1:Album=make_album("h1","Hello");
console.log(result_1)
let result_2:Album=make_album("h2","Hello",6);
console.log(result_2)
let result_3:Album=make_album("h3","Hello",19);
console.log(result_3)
//end

//Task 41

function show_magicians(name:string[]):Array<string>{
        return name;
}


let result_4:Array<string>=show_magicians(["name1","name2","name3"]);
console.log(result_4);

//Task 42

function show(name:string[]):void{
    for(let i in name){
        console.log(name[i]);
    }
}

function make_great(name:string[]):void{
    for(let i in name){
        console.log(`The Great ${name[i]}`);
    }

}

let magic_list:string[]=['person_1','person_2','person_3','person_4'];
show(magic_list);
make_great(magic_list);


// Task 43


function show1(name:string[]):void{
    for(let i in name){
        console.log(name[i]);
    }
}

function make_great2(name:string[]):Array<string>{
    
    let outcome=name.map((za) => `The Great${za} !`);
    return outcome;

}

show1(magic_list);
let new_outcome:string[]=make_great2(magic_list);
console.log(new_outcome);




//Task 44

function Sandwiches(...items:string[]):void{
    items.forEach((item)=>{
        console.log(`This material need for making sandwiche ${item}`);
    })

}

Sandwiches("break","egg","rice");
Sandwiches("break","halwa","baryani");
Sandwiches("plate","egg","spoon"),"car";

//end

//Task 45
type car={
    manufacturer:string,
    model_name:string,
    model:number,
    items:any
}
function Create_car(manufacturer:string,model_name:string,model:number,...items:any):car{
    let Car:car={
        manufacturer:manufacturer,
        model_name:model_name,
        model:model,
        items,
    }
    return Car;

}


const lb:any=Create_car("Sazuki","Mehran",2004,{color:"red",airbag:true});
console.log(lb);