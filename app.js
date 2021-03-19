let userName = "";
userName = "Maria";

/*if (userName === "") {
    cosole.log('Hello!');
} else {
    console.log(`Hello, ${userName}!`);
}*/

userName === ""
? console.log("Hello!")   
: console.log(`Hello, ${userName}!`); // ternary expression for if function to make it smaller.

let userQuestion = "";
userQuestion = "'Will i perform in this course?'";

console.log(`${userName} asked: ${userQuestion}`);

/*
userName === ""
? console.log(`Someone asked: ${userQuestion}`) : console.log(`${userName} asked: ${userQuestion}`);
--- here i changed the posting if the user did not say the name.

userQuestion === ""
? console.log(`${user}, can you please ask something?`) : console.log(`${userName} asked: ${userQuestion}`);   
---here i tried to post a request to ask something, if the user did not. 
*/

let randomNumber = Math.floor (Math.random () * 8);
let eigthBall = "";

if (randomNumber == 0 ) {
    eigthBall = "It's true!";
} else if (randomNumber == 1) {
    eigthBall = "So it is!";
} else if (randomNumber == 2) {
    eigthBall = "Unpredictibale now.";
} else if (randomNumber == 3) {
    eigthBall = "Please try again.";
} else if (randomNumber == 4) {
    eigthBall = "Dont't rely on that.";
} else if (randomNumber == 5) {
    eigthBall = "My sources say no.";
} else if (randomNumber == 6) {
    eigthBall = "The prospects are not so good.";
} else if (randomNumber == 7) {
    eigthBall = "Signs indicate yes!";
} else if (randomNumber == 8) {
    eigthBall = "You may rely on it!";
} else {
    eigthBall = "Magic eigth Ball";
}

console.log(`Magic Eigth Ball response: ${eigthBall}`);
