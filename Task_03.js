// Task: 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color === "green") {
    console.log("the player just earned 5 points");
}
if (alien_color === "red") {
    console.log(" ");
}
//Task:26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.
//start
if (alien_color === "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("the player just earned 10 points");
}
else {
    console.log(" ");
}
//end
//Task 27:
var aliencolor = "yellow";
if (aliencolor === "green") {
    console.log("the player just earned 5 points");
}
else if (aliencolor === "yellow") {
    console.log("the player just earned 10 points");
}
else if (aliencolor === "red") {
    console.log("the player just earned 15 points");
}
else {
    console.log(" ");
}
//Task 28
var person_age = 28;
if (person_age < 2) {
    console.log("The person is a baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("The person is a toddler");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("The person is a kid");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("The person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//end
//Task: 29
var favorite_fruit = ["apple", "orange", "grapes"];
if (favorite_fruit.includes("apple")) {
    console.log("I really like Apple!");
}
if (favorite_fruit.includes("orange")) {
    console.log("I really like orange!");
}
if (favorite_fruit.includes("grapes")) {
    console.log("I really like orange!");
}
if (favorite_fruit.includes("orange")) {
    console.log("I really like orange!");
}
if (favorite_fruit.includes("orange")) {
    console.log("I really like orange!");
}
//end
//task:30
var username = ["admin", "waqas", "ahmed", "ans", "sana"];
for (var i in username) {
    if (username[i] === "admin") {
        console.log("Hello ".concat(username[i], " , would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username[i], ", thank you for logging in again."));
    }
}
//end
//task:31
var user = ["ahemd", "ans", "waqar"];
if (user.length === 0) {
    console.log("We need to find some users!");
}
else {
    if (user.includes("ahmed")) {
        console.log("welcome");
    }
    if (user.includes("ans")) {
        console.log("welcome");
    }
}
user.length = 0;
if (user.length === 0) {
    console.log("We need to find some users!");
}
//task 32
var current_user = ["waqar", "ahemd", "ans", "waqas,", "sana"];
var new_user = ["waqar", "ahmed", "muslim", "Go", "help"];
for (var i = 0; i < new_user.length; i++) {
    var result = false;
    for (var j = 0; j < current_user.length; j++) {
        if (current_user[j] === new_user[i]) {
            result = true;
        }
    }
    if (result) {
        console.log("".concat(new_user[i], " a username has not been used"));
    }
    else {
        console.log("".concat(new_user[i], " the username is available"));
    }
} //outer for
//end
//Task 33
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_number.length; i++) {
    if (ordinal_number[i] === 1) {
        console.log("".concat(ordinal_number[i], "st"));
    }
    else if (ordinal_number[i] === 2) {
        console.log("".concat(ordinal_number[i], "nd"));
    }
    else if (ordinal_number[i] === 3) {
        console.log("".concat(ordinal_number[i], "rd"));
    }
    else if (ordinal_number[i] === 4) {
        console.log("".concat(ordinal_number[i], "th"));
    }
    else if (ordinal_number[i] === 5) {
        console.log("".concat(ordinal_number[i], "th"));
    }
    else if (ordinal_number[i] === 6) {
        console.log("".concat(ordinal_number[i], "th"));
    }
    else if (ordinal_number[i] === 7) {
        console.log("".concat(ordinal_number[i], "th"));
    }
    else if (ordinal_number[i] === 8) {
        console.log("".concat(ordinal_number[i], "th"));
    }
    else if (ordinal_number[i] === 9) {
        console.log("".concat(ordinal_number[i], "th"));
    }
}
//end
//Task34
var pizzal = ["chopped broccoli", "pepperoni", "cooked sausage"];
for (var g in pizzal) {
    console.log("I like ".concat(pizzal[g], " pizza"));
}
console.log(" I really love pizza!");
//end
//Task 35
var pet = ["dog", "cat", "goat"];
for (var i in pet) {
    console.log("A ".concat(pet[i], " would make a great pet."));
}
console.log(" Any of these animals would make a great pet!");
