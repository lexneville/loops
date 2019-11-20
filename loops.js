//-------------------------------- Loops ----------------------------------

// In coding we should not repeat ourselves, the code below is inefficient

console.log("I will not be late for class again");
console.log("I will not be late for class again");
console.log("I will not be late for class again");
console.log("I will not be late for class again");
console.log("I will not be late for class again");

// We can use a loop to run through one block of code multiple times

for (let i = 0; i < 5; i++) {       
    console.log("I will not be late for class again");
}

// For loops are structured as follows:     for ([INITIAL EXPRESSION]; [CONDITION]; [INCREMENT EXPRESSION]) {STATEMENT}

// [INITIAL EXPRESSION], if any, is executed. 
// This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. 
// This expression can also declare variables. 

// The [CONDITION] expression is evaluated. If the value of condition is true, the loop statements execute. 
// If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.

// The {STATEMENT} executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.

// If present, the update expression [INCREMENT EXPRESSION] is executed.

// LOOP returns to step 2 to asses if [CONDITION] value is true, if so, the code block will run again.

let music = ["Nirvana", "Prodigy", "Aphex Twin", "Keeno", "Pink Floyd"]

for (i = 0; i < 5; i++) {
    console.log(music[i]); // We use the variable 'i' as the array index position 
}

// If our array is large and unweildy to count, we can create a variable first that stores the array length

let music = ["Nirvana", "Prodigy", "Aphex Twin", "Keeno", "Pink Floyd"];
let arrayLen = music.length;

for (index = 0; index < arrayLen; index++) {   // Here we have given our initial expression variable the name 'index'
    console.log(music[index]);  
}

// Using a different increment value

let music = ["Nirvana", "Prodigy", "Aphex Twin", "Keeno", "Pink Floyd"];
let arrayLen = music.length;

for (index = 0; index < arrayLen; index +=2 ) {   // Here our increment expression will increase the index value by 2
    console.log(music[index]);  
}

// ---------------------------   WHILE LOOPS ----------------------------------------

let health = 100;
let attack = 10

while(health > 0) {
    console.log(`I was hit by an enemy for ${attack} points, but I'm still alive`);
    health -= 10;
    console.log(`My health has been reduced to ${health}`)
}

console.log(`My health is ${health}, now I am dead!!`)


// ---------------------------  DO WHILE LOOPS ----------------------------------------

let balance = 200;
let = trainers = 75;

do { 
    console.log("I'm going to buy some trainers");
    balance -= trainers;
    console.log(`My balance is now ${balance}`);
}  
while (balance > trainers);

console.log("I don't have enough funds for another pair");

// --------------------------- LOOP ACTIVITY -----------------------------

let eightiesFilms = ["The Goonies", "The Breakfast Club", "Ghostbusters", "Ferris Beullers Day Off", "Rocky"];
let listSize = eightiesFilms.length;

for ( i =0; i < listSize; i++) {
    console.log(eightiesFilms[i]);
}

const filmCheck = (index) => {
    if (eightiesFilms[index] === "Ghostbusters"){
        console.log("Yay it’s Ghostbusters!");
    } else {
        console.log("Booo, we want Ghostbusters!");
    }
}

filmCheck(2);


