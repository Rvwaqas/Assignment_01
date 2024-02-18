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
//end
//task 36
//task:37
function make_shirt(size, mess) {
    if (size === void 0) { size = "Large"; }
    if (mess === void 0) { mess = "I love javascript"; }
    console.log("your shirt size is ".concat(size, " and its ").concat(mess));
}
make_shirt("small", "Nice shirt");
make_shirt();
make_shirt("medium");
// task:38
function describe_city(city, country) {
    if (country === void 0) { country = "India"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Dehli");
describe_city("Karachi", "Pakistan");
describe_city("Lahore", "Pakistan");
//end
//Task:39
function city_country(city, country) {
    return ("\"".concat(city, ",").concat(country, "\""));
}
var rest1 = city_country("Karachi", "Pakistan");
console.log(rest1);
var rest2 = city_country("New York", "USA");
console.log(rest2);
var rest3 = city_country("Canberra", "Australia");
console.log(rest3);
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var result_1 = make_album("h1", "Hello");
console.log(result_1);
var result_2 = make_album("h2", "Hello", 6);
console.log(result_2);
var result_3 = make_album("h3", "Hello", 19);
console.log(result_3);
//end
//Task 41
function show_magicians(name) {
    return name;
}
var result_4 = show_magicians(["name1", "name2", "name3"]);
console.log(result_4);
//Task 42
function show(name) {
    for (var i in name) {
        console.log(name[i]);
    }
}
function make_great(name) {
    for (var i in name) {
        console.log("The Great ".concat(name[i]));
    }
}
var magic_list = ['person_1', 'person_2', 'person_3', 'person_4'];
show(magic_list);
make_great(magic_list);
// Task 43
function show1(name) {
    for (var i in name) {
        console.log(name[i]);
    }
}
function make_great2(name) {
    var outcome = name.map(function (za) { return "The Great".concat(za, " !"); });
    return outcome;
}
show1(magic_list);
var new_outcome = make_great2(magic_list);
console.log(new_outcome);
//Task 44
function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    items.forEach(function (item) {
        console.log("This material need for making sandwiche ".concat(item));
    });
}
Sandwiches("break", "egg", "rice");
Sandwiches("break", "halwa", "baryani");
Sandwiches("plate", "egg", "spoon"), "car";
function Create_car(manufacturer, model_name, model) {
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    var Car = {
        manufacturer: manufacturer,
        model_name: model_name,
        model: model,
        items: items,
    };
    return Car;
}
var lb = Create_car("Sazuki", "Mehran", 2004, { color: "red", airbag: true });
console.log(lb);
